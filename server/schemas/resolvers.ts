import { DateTimeResolver } from 'graphql-scalars'
import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-core'
import User from '../models/User';
import Class from '../models/Class';
import Vote from '../models/Vote';
import Action from '../models/Action';
import { ObjectIdLike } from 'bson'
import { UserLoginInput, UserSignUpInput } from '../types/inputTypes';
import { mongoDbProvider } from '../config/mongodb.provider';
const { signToken } = require('../utils/auth');
import bcrypt from 'bcrypt'

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
        signUp: async (parent: any, { input }: { input: UserSignUpInput }) => {
            const user = await mongoDbProvider.usersCollection.insertOne({
                ...input
            })
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
        createClass: async (parent: any, input: any, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const educator = await mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(user.data._id) })
                if (educator?.educator) {
                    const createdClass = await mongoDbProvider.classesCollection.insertOne({
                        ...input,
                        educator: educator,
                        learners: [],
                        votes: [],
                        createdAt: Date.now
                    });
                    return createdClass.insertedId
                }
                throw new AuthenticationError('Not an Educator');
            }
            throw new AuthenticationError('Not Logged In');
        },
        joinClass: async (parent: any, classCode: any, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const class_code = classCode.classCode
                const joinedClass = await mongoDbProvider.classesCollection.findOne({ class_code: class_code });
                const updatedClass = await mongoDbProvider.classesCollection.updateOne({ class_code: class_code }, { $addToSet: { learners: user.data }, upsert: true });
                const updatedUser = await mongoDbProvider.usersCollection.updateOne({ _id: new ObjectId(user.data._id) }, { $addToSet: { class: joinedClass }, upsert: true });
                if (updatedUser.modifiedCount === 1 || updatedClass.modifiedCount === 1) {
                    return joinedClass
                } else {
                    throw new Error("Already joined Class");

                }
            }
            throw new AuthenticationError('Not Logged In')
        },
        login: async (parent: any, { input }: { input: UserLoginInput }) => {
            const username = input.username;
            const email = input.email;
            const user = await mongoDbProvider.usersCollection.findOne({ $or: [{ email: email }, { username: username }] });
            if (!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }
            const correctPW = input.password ? await bcrypt.compare(input.password, user?.password) : '';
            if (!correctPW) {
                throw new AuthenticationError('Incorrect Password')
            }

            const token = signToken(user)
            return { token, user };
        }
    }
};