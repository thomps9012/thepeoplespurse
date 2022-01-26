import { DateTimeResolver } from 'graphql-scalars'
import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-core'
import { UserLoginInput, UserSignUpInput, ActionInput, VoteInput } from '../types/inputTypes';
import { mongoDbProvider } from '../config/mongodb.provider';
const { signToken } = require('../utils/auth');
import bcrypt from 'bcrypt'

export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        getUser: async (obj: any, args: any, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const userId = user.data._id;
                return await mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(userId) });
            } else {
                throw new AuthenticationError('Not Logged In')
            }
        },
        classActions: async (parent: any, { classID }: { classID: string }, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const userId = user.data._id;
                if (user.data.educator) {
                    const projection = { learners: 1 }
                    const classInfo = await mongoDbProvider.classesCollection.find({ $and: [{ educator: new ObjectId(userId) }, { _id: new ObjectId(classID) }] }).project(projection).toArray();
                    let learnerIDs = classInfo[0].learners
                    let learnerArr = [];
                    console.log('ids', learnerIDs)
                    for (const item in learnerIDs) {
                        const learner = await mongoDbProvider.usersCollection.findOne({ _id: learnerIDs[item] })
                        learnerArr.push(learner)
                        console.log('learner', learner)
                    }
                    console.log(learnerArr)
                    return learnerArr
                } else {
                    throw new AuthenticationError('Not an Educator')
                }
            } else {
                throw new AuthenticationError('Not Logged In')
            }
        },
        classVotes: async (obj: any, { classID }: { classID: string }) => {
            const projection = { votes: 1 }
            const classVotes = await mongoDbProvider.classesCollection.find({ _id: new ObjectId(classID) }).project(projection).toArray();
            let voteIDs = classVotes[0].votes
            let voteArr = []
            for (const item in voteIDs) {
                const singleVote = await mongoDbProvider.votesCollection.findOne({ _id: voteIDs[item] })
                voteArr.push(singleVote)
            }
            return voteArr
        },
        allVotes: async (obj: any) => {
            return mongoDbProvider.votesCollection.find({}).toArray();
        },
        classInfo: async (obj: any, { classID }: { classID: string }) => {
            return await mongoDbProvider.classesCollection.findOne({ _id: new ObjectId(classID) });
        },
        classes: async (obj: any, args: any, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const userId = user.data._id;
                return mongoDbProvider.classesCollection.find({ learners: new ObjectId(userId) }).toArray()
            } else {
                throw new AuthenticationError('Not Logged In')
            }
        },


    },
    Mutation: {
        signUp: async (parent: any, { input }: { input: UserSignUpInput }) => {
            const user = await mongoDbProvider.usersCollection.insertOne({
                ...input,
                password: await bcrypt.hash(input.password, 10),
                educator: false,
                classes: [],
                actions: []
            })
            let payload = {
                email: input.email,
                username: input.username,
                _id: user.insertedId,
                educator: false

            }
            const token = await signToken(payload);
            return { token, user };
        },
        castVote: async (parent: any, { input }: { input: VoteInput }, context: any) => {
            const user_jwt = context.headers.authorization;
            console.log(input)
            console.log(user_jwt)
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const userId = user.data._id;

                const vote = await mongoDbProvider.votesCollection.insertOne({
                    ...input,
                    voter: new ObjectId(userId),
                    created_at: new Date()
                })

                if (input.class_code) {
                    const updatedClass = await mongoDbProvider.classesCollection.updateOne(
                        { class_code: input.class_code },
                        {
                            $addToSet: {
                                votes: vote.insertedId
                            }
                        }
                    )
                    return vote.insertedId
                } else {
                    return vote.insertedId
                }
            }
            throw new AuthenticationError('Not Logged In');
        },
        takeAction: async (parent: any, { input }: { input: ActionInput }, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const action = await mongoDbProvider.actionsCollection.insertOne({
                    ...input,
                    user: new ObjectId(user.data._id)
                })
                const updatedUser = await mongoDbProvider.usersCollection.updateOne(
                    { _id: new ObjectId(user.data._id) },
                    {
                        $addToSet:
                        {
                            actions: { ...input }
                        }
                    }, { upsert: true }
                )
                if (action.acknowledged && updatedUser.acknowledged) {
                    return action.insertedId
                } else {
                    throw new AuthenticationError('Action Invalid')
                }
            }
            throw new AuthenticationError('Not Logged In');
        },
        createClass: async (parent: any, input: any, context: any) => {
            const user_jwt = context.headers.authorization;
            console.log(user_jwt)
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                console.log(user)
                if (user.data.educator) {
                    const createdClass = await mongoDbProvider.classesCollection.insertOne({
                        ...input,
                        educator: new ObjectId(user.data._id),
                        learners: [],
                        votes: [],
                        createdAt: Date.now
                    });
                    const updatedEducator = await mongoDbProvider.usersCollection.updateOne(
                        { _id: new ObjectId(user.data._id) },
                        {
                            $addToSet: {
                                classes: {
                                    ...input,
                                    _id: createdClass.insertedId,
                                    educator: new ObjectId(user.data._id),
                                    learners: [],
                                    votes: [],
                                    createdAt: Date.now
                                }
                            }
                        },
                        { upsert: true }
                    )
                    return createdClass.insertedId
                }
                throw new AuthenticationError('Not an Educator');
            }
            throw new AuthenticationError('Not Logged In');
        },
        joinClass: async (parent: any, class_code: any, context: any) => {
            const user_jwt = context.headers.authorization;
            if (user_jwt) {
                const secret = 'secret';
                const expiration = '2h';
                const user: any = jwt.verify(user_jwt, secret, { maxAge: expiration })
                const classCode = class_code.class_code
                const joinedClass = await mongoDbProvider.classesCollection.findOne({ class_code: classCode });
                const updatedClass = await mongoDbProvider.classesCollection.updateOne(
                    { class_code: classCode },
                    {
                        $addToSet: {
                            learners: new ObjectId(user.data._id)
                        }
                    }
                );
                const updatedUser = await mongoDbProvider.usersCollection.updateOne(
                    { _id: new ObjectId(user.data._id) },
                    {
                        $addToSet: {
                            classes: joinedClass?._id
                        }
                    },
                    { upsert: true }
                );
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
            const user = await mongoDbProvider.usersCollection.findOne({ $and: [{ email: email }, { username: username }] });
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