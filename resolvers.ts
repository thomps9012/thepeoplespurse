import { DateTimeResolver } from 'graphql-scalars'
import { ActionDbObject, CastVote, ClassDbObject, LoginInput, SignUpInput, TakeAction, User, UserDbObject, VoteDbObject } from './graphql-codegen-typings'
import { ObjectId } from 'mongodb'
import { mongoDbProvider } from './mongodb.provider'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { AuthenticationError } from 'apollo-server-core'

export const resolvers = {
    DateTime: DateTimeResolver,
    Query: {
        getUser: (obj: any, { id }: { id: string }): Promise<UserDbObject
            | any> =>
            mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(id) }),
        allUsers: () =>
            mongoDbProvider.usersCollection.find({}).toArray(),
        vote: (obj: any, { id }: { id: string }): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.votesCollection.findOne({ _id: new ObjectId(id) }),
        allVotes: (obj: any): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.votesCollection.find({}).toArray(),
        classVotes: (obj: any, { classCode }: { classCode: string }): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.votesCollection.find({ classCode: classCode }).toArray(),
        classes: (obj: any, { id }: { id: string }): Promise<ClassDbObject
            | any> =>
            mongoDbProvider.classesCollection.find({ id: id }).toArray(),
        actions: (obj: any, { userID }: { userID: string }): Promise<ActionDbObject
            | any> =>
            mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(userID) })


    },
    Mutation: {
        signUp: async (
            obj: any,
            { input }: { input: SignUpInput }
        ) => {
            const result = await mongoDbProvider.usersCollection.insertOne({
                username: input.username,
                password: input.password ? await bcrypt.hash(input.password, 10) : '',
                teachers: [],
                actions: []
            });
            console.log(result.insertedId)
            return jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
            );
        },
        teacherSignUp: async (
            obj: any,
            { input }: { input: SignUpInput }
        ) => {
            const result = await mongoDbProvider.usersCollection.insertOne({
                username: input.username,
                password: input.password ? await bcrypt.hash(input.password, 10) : '',
                classes: []
            });
            console.log(result.insertedId)
            return jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
            );
        },
        login: async (
            obj: any,
            { input }: { input: LoginInput }
        ) => {
            const user = await mongoDbProvider.usersCollection.findOne({
                username: input.username,
            });
            const correctPw = input.password ? await bcrypt.compare(input.password, user?.password) : '';
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password')
            }
            return jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: user?.username, expiresIn: "1d" }
            );
        },
        teacherLogin: async (
            obj: any,
            { input }: { input: LoginInput }
        ) => {
            const teacher = await mongoDbProvider.teachersCollection.findOne({
                username: input.username,
            });
            const correctPw = input.password ? await bcrypt.compare(input.password, teacher?.password) : '';
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password')
            }
            return jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: teacher?.username, expiresIn: "1d" }
            );
        },
        castVote: async (
            obj: any,
            { input }: { input: CastVote },
            context: any
        ) => {
            try {
                const data = jwt.verify(context.token, 'f1BtnWgD3VKY')
                const vote = await mongoDbProvider.votesCollection.insertOne({
                    voter: data.sub,
                    classCode: input.classCode,
                    budget: input.department
                })
                console.log(vote.result)
                return vote.result;
            } catch {
                console.log('Invalid Token')
            }
        },
        takeAction: async (
            obj: any,
            { input }: { input: TakeAction },
            context: any
        ) => {
            try {
                const data = jwt.verify(context.token, 'f1BtnWgD3VKY')
                const result = await
                        mongoDbProvider.usersCollection.updateOne(
                            { username: data.sub },
                            {
                                $addToSet: {
                                    actions: input

                                },
                            },
                            { upsert: true }
                        );
                    console.log(result.result)
                return result.result;
                } catch {
                    console.log('Invalid Token')
                }
            },
        },
        User: {
            id: (obj: User | UserDbObject): string =>
                (obj as UserDbObject)._id
                    ? (obj as UserDbObject)._id.toString()
                    : (obj as User).id
        }
    };