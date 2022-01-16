import { DateTimeResolver } from 'graphql-scalars'
// import { CastVote, LoginInput, UserSignUpInput, TakeAction, TeacherSignUpInput, Teacher, CreateClassInput, ClassDbObject, TeacherDbObject, UserDbObject, VoteDbObject } from '../graphql-codegen-typings'
import { ObjectId } from 'mongodb'
// import { mongoDbProvider } from '../config/mongodb.provider'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
import { AuthenticationError } from 'apollo-server-core'
import User from '../models/User';
import Class from '../models/Class';
import Vote from '../models/Vote';
import Action from '../models/Action';
import { ObjectIdLike } from 'bson'
const { signToken } = require('../utils/auth');

export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        getUser: async (obj: any, { id }: { id: string }) => { return await User.findOne({ _id: new ObjectId(id) }); },
        userActions: async (parent: any, args: any, context: { user: { _id: string | number | Buffer | ObjectId | ObjectIdLike | undefined } }) => {
            if (context.user) {
                return await Action.find({ user: new ObjectId(context.user._id) });
            }
        },
        classVotes: async (obj: any, { classID }: { classID: string }) => {
            // return await Class.find({ _id: new ObjectId(classID) }).populate('votes');
            return await Vote.find({ class: new ObjectId(classID) });
        },
        allVotes: async (obj: any) => {
            return await Vote.find({});
        },
        classInfo: async (obj: any, { classID }: { classID: string }) => {
            return await Class.findOne({ _id: new ObjectId(classID) }).populate('learners');
        },
        classes: async (obj: any, { teacherID }: { teacherID: string }) => {
            return await Class.find({ educator: new ObjectId(teacherID) });
        },


    },
    Mutation: {
        signUp: async (parent: any, args: any) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        castVote: async (parent: any, args: any, context: { user: any }) => {
            if (context.user) {
                const vote = await Vote.create(args);

                return vote;
            }
            throw new AuthenticationError('Not Logged In');
        },
        takeAction: async (parent: any, args: any, context: { user: any }) => {
            if (context.user) {
                const action = await Action.create(args);

                return await User.findByIdAndUpdate(context.user._id, { $push: { actions: action } });

            }
            throw new AuthenticationError('Not Logged In');
        },
        createClass: async (parent: any, args: any, context: { user: any }) => {
            if (context.user) {
                const createdClass = await Class.create(args);

                return await User.findByIdAndUpdate(context.user._id, { $push: { class: createdClass } });
            }
            throw new AuthenticationError('Not an Educator In');
        },
        joinClass: async (parent: any, classCode: any, context: { user: any }) => {
            if (context.user) {
                const joinedClass = await Class.findOne({ class_code: classCode });
                return await User.findByIdAndUpdate(context.user._id, { $push: { class: joinedClass } });
            }
            throw new AuthenticationError('Not Logged In')
        },
        login: async (parent: any, { email, password }: any) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect Password')
            }

            const token = signToken(user)

            return { token, user };
        }
    }
};