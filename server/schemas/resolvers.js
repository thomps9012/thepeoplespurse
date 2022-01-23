"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_scalars_1 = require("graphql-scalars");
const mongodb_1 = require("mongodb");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_core_1 = require("apollo-server-core");
const User_1 = __importDefault(require("../models/User"));
const Class_1 = __importDefault(require("../models/Class"));
const Vote_1 = __importDefault(require("../models/Vote"));
const Action_1 = __importDefault(require("../models/Action"));
const mongodb_provider_1 = require("../config/mongodb.provider");
const { signToken } = require('../utils/auth');
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.resolvers = {
    DateTime: graphql_scalars_1.DateTimeResolver,
    Query: {
        getUser: async (obj, { id }) => { return await User_1.default.findOne({ _id: new mongodb_1.ObjectId(id) }); },
        userActions: async (parent, args, context) => {
            if (context.user) {
                return await Action_1.default.find({ user: new mongodb_1.ObjectId(context.user._id) });
            }
        },
        classVotes: async (obj, { classID }) => {
            // return await Class.find({ _id: new ObjectId(classID) }).populate('votes');
            return await Vote_1.default.find({ class: new mongodb_1.ObjectId(classID) });
        },
        allVotes: async (obj) => {
            return await Vote_1.default.find({});
        },
        classInfo: async (obj, { classID }) => {
            return await Class_1.default.findOne({ _id: new mongodb_1.ObjectId(classID) }).populate('learners');
        },
        classes: async (obj, { teacherID }) => {
            return await Class_1.default.find({ educator: new mongodb_1.ObjectId(teacherID) });
        },
    },
    Mutation: {
        signUp: async (parent, { input }) => {
            const user = await mongodb_provider_1.mongoDbProvider.usersCollection.insertOne(Object.assign({}, input));
            const token = signToken(user);
            return { token, user };
        },
        castVote: async (parent, args, context) => {
            if (context.user) {
                const vote = await Vote_1.default.create(args);
                return vote;
            }
            throw new apollo_server_core_1.AuthenticationError('Not Logged In');
        },
        takeAction: async (parent, args, context) => {
            if (context.user) {
                const action = await Action_1.default.create(args);
                return await User_1.default.findByIdAndUpdate(context.user._id, { $push: { actions: action } });
            }
            throw new apollo_server_core_1.AuthenticationError('Not Logged In');
        },
        createClass: async (parent, args, context) => {
            if (context.user) {
                const createdClass = await Class_1.default.create(args);
                return await User_1.default.findByIdAndUpdate(context.user._id, { $push: { class: createdClass } });
            }
            throw new apollo_server_core_1.AuthenticationError('Not an Educator In');
        },
        joinClass: async (parent, classCode, context) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user = jsonwebtoken_1.default.verify(user_jwt, secret, { maxAge: expiration });
                const class_code = classCode.classCode;
                const joinedClass = await mongodb_provider_1.mongoDbProvider.classesCollection.findOne({ class_code: class_code });
                const updatedClass = await mongodb_provider_1.mongoDbProvider.classesCollection.updateOne({ class_code: class_code }, { $addToSet: { learners: user.data } });
                const updatedUser = await mongodb_provider_1.mongoDbProvider.usersCollection.updateOne({ _id: new mongodb_1.ObjectId(user.data._id) }, { $addToSet: { class: joinedClass } });
                if (updatedUser.modifiedCount === 1 || updatedClass.modifiedCount === 1) {
                    return joinedClass;
                }
                else {
                    throw new Error("Already joined Class");
                }
            }
            throw new apollo_server_core_1.AuthenticationError('Not Logged In');
        },
        login: async (parent, { input }) => {
            const username = input.username;
            const email = input.email;
            const user = await mongodb_provider_1.mongoDbProvider.usersCollection.findOne({ $or: [{ email: email }, { username: username }] });
            if (!user) {
                throw new apollo_server_core_1.AuthenticationError('Incorrect Credentials');
            }
            const correctPW = input.password ? await bcrypt_1.default.compare(input.password, user === null || user === void 0 ? void 0 : user.password) : '';
            if (!correctPW) {
                throw new apollo_server_core_1.AuthenticationError('Incorrect Password');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};
