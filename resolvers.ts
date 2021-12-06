import { DateTimeResolver } from 'graphql-scalars'
import { ActionDbObject, CastVote, ClassDbObject, LoginInput, UserSignUpInput, TakeAction, User, UserDbObject, VoteDbObject, TeacherSignUpInput, TeacherDbObject, Teacher, CreateClassInput, Class, Vote } from './graphql-codegen-typings'
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
        getTeacher: (obj: any, { id }: { id: string }): Promise<UserDbObject
            | any> =>
            mongoDbProvider.teachersCollection.findOne({ _id: new ObjectId(id) }),
        allUsers: () =>
            mongoDbProvider.usersCollection.find({}).toArray(),
        vote: (obj: any, { id }: { id: string }): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.votesCollection.findOne({ _id: new ObjectId(id) }),
        allVotes: (obj: any): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.votesCollection.find({}).toArray(),
        classInfo: (obj: any, { classID }: { classID: string }): Promise<VoteDbObject
            | any> =>
            mongoDbProvider.classesCollection.findOne({ _id: new ObjectId(classID) }),
        classes: (obj: any, { teacherID }: { teacherID: string }): Promise<ClassDbObject
            | any> =>
            mongoDbProvider.classesCollection.find({ teacher: new ObjectId(teacherID) }).toArray(),
        actions: (obj: any, { userID }: { userID: string }): Promise<ActionDbObject
            | any> =>
            mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(userID) })


    },
    Mutation: {
        signUp: async (
            obj: any,
            { input }: { input: UserSignUpInput }
        ) => {
            const result = await mongoDbProvider.usersCollection.insertOne({
                email: input.email,
                username: input.username,
                password: input.password ? await bcrypt.hash(input.password, 10) : '',
                classCode: input.classCode,
                actions: []
            });
            const user = await mongoDbProvider.usersCollection.findOne({
                email: input.email
            })
            console.log(user)
            if (input.classCode) {
                const updatedClass = await mongoDbProvider.classesCollection.updateOne(
                    { classCode: input.classCode },
                    {
                        $addToSet: {
                            users: result.insertedId
                        }
                    }
                )
                console.log(updatedClass)
            }
            const token = jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
            );
            const data = { token, user }
            console.log(data)
            return data
        },
        teacherSignUp: async (
            obj: any,
            { input }: { input: TeacherSignUpInput }
        ) => {
            const result = await mongoDbProvider.teachersCollection.insertOne({
                email: input.email,
                username: input.username,
                password: input.password ? await bcrypt.hash(input.password, 10) : '',
                classes: []
            });
            const teacher = await mongoDbProvider.teachersCollection.findOne({
                email: input.email
            })
            const token = jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
            );
            const data = { token, teacher }
            console.log(data)
            return data
        },
        login: async (
            obj: any,
            { input }: { input: LoginInput }
        ) => {
            const user = await mongoDbProvider.usersCollection.findOne({
                email: input.email,
            });
            const correctPw = input.password ? await bcrypt.compare(input.password, user?.password) : '';
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password')
            }
            const token = jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: user?.username, expiresIn: "1d" }
            );
            const data = { token, user }
            console.log(data)
            return data
        },
        teacherLogin: async (
            obj: any,
            { input }: { input: LoginInput }
        ) => {
            const teacher = await mongoDbProvider.teachersCollection.findOne({
                email: input.email,
            });
            const correctPw = input.password ? await bcrypt.compare(input.password, teacher?.password) : '';
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password')
            }
            const token = jwt.sign(
                // will change on PRODUCTION
                { "https://localhost:4000/": {} },
                "f1BtnWgD3VKY",
                { algorithm: "HS256", subject: teacher?.username, expiresIn: "1d" }
            );
            const data = { token, teacher }
            return data
        },
        castVote: async (
            obj: any,
            { input }: { input: CastVote },
        ) => {
            // can add in JWT verification here as well
            try {
                const vote = await mongoDbProvider.votesCollection.insertOne({
                    voter: new ObjectId(input.voter),
                    classCode: input.classCode,
                    budget: input.budget,
                    createdAt: new Date()
                })
                if (input.classCode != null) {
                    const updatedClass = await mongoDbProvider.classesCollection.updateOne(
                        { classCode: input.classCode },
                        {
                            $addToSet: {
                                votes: vote.insertedId
                            }
                        }
                    )
                    console.log(updatedClass)
                }
                return vote.insertedId;
            } catch {
                console.log('Invalid Token')
            }
        },
        takeAction: async (
            obj: any,
            { input }: { input: TakeAction },
            // {context}: {context: Jwt},
            // headers: any
        ) => {
            // console.log('input--> ', input)
            // console.log('context--> ', context)
            // console.log('headers--> ', headers)
            const data = jwt.verify(input.jwt, 'f1BtnWgD3VKY')
            try {
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
                return result.upsertedId;
            } catch {
                console.log('Invalid Token')
            }
        },
        createClass: async (obj: any, { input }: { input: CreateClassInput }) => {
            try {
                const createdClass = await mongoDbProvider.classesCollection.insertOne({
                    teacher: new ObjectId(input.teacher),
                    classCode: input.classCode,
                    users: [],
                    votes: [],
                    createdAt: new Date()
                })
                const updatedTeacher = await mongoDbProvider.teachersCollection.updateOne(
                    { _id: new ObjectId(input.teacher) },
                    {
                        $addToSet: {
                            classes: createdClass.insertedId
                        }
                    },
                    { upsert: true }
                );
                return createdClass.insertedId
            } catch {
                console.log('Invalid Token')
            }
        }
    },
    User: {
        id: (obj: User | UserDbObject): string =>
            (obj as UserDbObject)._id
                ? (obj as UserDbObject)._id.toString()
                : (obj as User).id
    },
    Teacher: {
        id: (obj: Teacher | TeacherDbObject): string =>
            (obj as TeacherDbObject)._id
                ? (obj as TeacherDbObject)._id.toString()
                : (obj as Teacher).id
    },
    Class: {
        id: (obj: Class | ClassDbObject): string =>
            (obj as ClassDbObject)._id
                ? (obj as ClassDbObject)._id.toString()
                : (obj as Class).id
    },
    Vote: {
        id: (obj: Vote | VoteDbObject): string =>
            (obj as VoteDbObject)._id
                ? (obj as VoteDbObject)._id.toString()
                : (obj as Vote).id,
        // voter: (obj: User | UserDbObject): string => 
        // (obj as UserDbObject)._id
        // ? (obj as UserDbObject)._id.toString()
        // : (obj as User).id,
    }
};