"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_scalars_1 = require("graphql-scalars");
// import { CastVote, LoginInput, UserSignUpInput, TakeAction, TeacherSignUpInput, Teacher, CreateClassInput, ClassDbObject, TeacherDbObject, UserDbObject, VoteDbObject } from '../graphql-codegen-typings'
const mongodb_1 = require("mongodb");
// import { mongoDbProvider } from '../config/mongodb.provider'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
const apollo_server_core_1 = require("apollo-server-core");
const User_1 = __importDefault(require("../models/User"));
const Class_1 = __importDefault(require("../models/Class"));
const Vote_1 = __importDefault(require("../models/Vote"));
const Action_1 = __importDefault(require("../models/Action"));
const { signToken } = require('../utils/auth');
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
        signUp: async (parent, args) => {
            const user = await User_1.default.create(args);
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
            if (context.user) {
                const joinedClass = await Class_1.default.findOne({ class_code: classCode });
                return await User_1.default.findByIdAndUpdate(context.user._id, { $push: { class: joinedClass } });
            }
            throw new apollo_server_core_1.AuthenticationError('Not Logged In');
        },
        login: async (parent, { email, password }) => {
            const user = await User_1.default.findOne({ email });
            if (!user) {
                throw new apollo_server_core_1.AuthenticationError('Incorrect Credentials');
            }
            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new apollo_server_core_1.AuthenticationError('Incorrect Password');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};
