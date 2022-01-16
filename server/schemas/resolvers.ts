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
import { auth } from '../utils/auth';

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
            const token = auth.signToken(user);
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

            const token = auth.signToken(user)

            return { token, user };
        }
    }
};

module.exports = resolvers;
        // signUp: async (
        //     obj: any,
        //     { input }: { input: UserSignUpInput }
        // ) => {
        //     const result = await mongoDbProvider.usersCollection.insertOne({
        //         email: input.email,
        //         username: input.username,
        //         // password: input.password ? await bcrypt.hash(input.password, 10) : '',
        //         classCode: input.classCode,
        //         actions: []
        //     });
        //     const user = await mongoDbProvider.usersCollection.findOne({
        //         email: input.email
        //     })
        //     console.log(user)
        //     if (input.classCode) {
        //         const updatedClass = await mongoDbProvider.classesCollection.updateOne(
        //             { classCode: input.classCode },
        //             {
        //                 $addToSet: {
        //                     users: result.insertedId
        //                 }
        //             }
        //         )
        //         console.log(updatedClass)
        //     }
        //     const token = jwt.sign(
        //         // will change on PRODUCTION
        //         { "https://localhost:4200/": {} },
        //         "f1BtnWgD3VKY",
        //         { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
        //     );
        //     const data = { token, user }
        //     return data
        // },
        // teacherSignUp: async (
        //     obj: any,
        //     { input }: { input: TeacherSignUpInput }
        // ) => {
        //     const result = await mongoDbProvider.teachersCollection.insertOne({
        //         email: input.email,
        //         username: input.username,
        //         password: input.password ? await bcrypt.hash(input.password, 10) : '',
        //         classes: []
        //     });
        //     const teacher = await mongoDbProvider.teachersCollection.findOne({
        //         email: input.email
        //     })
        //     const token = jwt.sign(
        //         // will change on PRODUCTION
        //         { "https://localhost:4200/": {} },
        //         "f1BtnWgD3VKY",
        //         { algorithm: "HS256", subject: input.username ? input.username : '', expiresIn: "1d" }
        //     );
        //     const data = { token, teacher }
        //     return data
        // },
        // login: async (
        //     obj: any,
        //     { input }: { input: LoginInput }
        // ) => {
        //     const user = await mongoDbProvider.usersCollection.findOne({
        //         email: input.email,
        //     });
        //     const correctPw = input.password ? await bcrypt.compare(input.password, user?.password) : '';
        //     if (!correctPw) {
        //         throw new AuthenticationError('Incorrect Password')
        //     }
        //     const token = jwt.sign(
        //         // will change on PRODUCTION
        //         { "https://localhost:4000/": {} },
        //         "f1BtnWgD3VKY",
        //         { algorithm: "HS256", subject: user?.username, expiresIn: "1d" }
        //     );
        //     const data = { token, user }
        //     console.log(data)
        //     return data
        // },
        // teacherLogin: async (
        //     obj: any,
        //     { input }: { input: LoginInput }
        // ) => {
        //     const teacher = await mongoDbProvider.teachersCollection.findOne({
        //         email: input.email,
        //     });
        //     const correctPw = input.password ? await bcrypt.compare(input.password, teacher?.password) : '';
        //     if (!correctPw) {
        //         throw new AuthenticationError('Incorrect Password')
        //     }
        //     const token = jwt.sign(
        //         // will change on PRODUCTION
        //         { "https://localhost:4000/": {} },
        //         "f1BtnWgD3VKY",
        //         { algorithm: "HS256", subject: teacher?.username, expiresIn: "1d" }
        //     );
        //     const data = { token, teacher }
        //     return data
        // },
        // castVote: async (
        //     obj: any,
        //     { input }: { input: CastVote },
        // ) => {
        //     // can add in JWT verification here as well
        //     try {
        //         const vote = await mongoDbProvider.votesCollection.insertOne({
        //             voter: new ObjectId(input.voter),
        //             classCode: input.classCode,
        //             budget: input.budget,
        //             createdAt: new Date()
        //         })
        //         if (input.classCode != null) {
        //             const updatedClass = await mongoDbProvider.classesCollection.updateOne(
        //                 { classCode: input.classCode },
        //                 {
        //                     $addToSet: {
        //                         votes: vote.insertedId
        //                     }
        //                 }
        //             )
        //         }
        //         return vote.insertedId;
        //     } catch {
        //         console.log('Invalid Token')
        //     }
        // },
        // takeAction: async (
        //     obj: any,
        //     { input }: { input: TakeAction },
        //     // {context}: {context: Jwt},
        //     // headers: any
        // ) => {
        //     // console.log('input--> ', input)
        //     // console.log('context--> ', context)
        //     // console.log('headers--> ', headers)
        //     try {
        //         const result = await
        //             mongoDbProvider.usersCollection.updateOne(
        //                 { _id: new ObjectId(input.userID) },
        //                 {
        //                     $addToSet: {
        //                         actions: {
        //                             name: input.name,
        //                             detail: input.detail,
        //                             organization: input.organization,
        //                             length: input.length,
        //                             actionDate: input.actionDate
        //                         }

        //                     },
        //                 },
        //                 { upsert: true }
        //             );
        //         return result.upsertedId;
        //     } catch {
        //         console.log('Invalid Token')
        //     }
        // },
        // createClass: async (obj: any, { input }: { input: CreateClassInput }) => {
        //     try {
        //         const createdClass = await mongoDbProvider.classesCollection.insertOne({
        //             teacher: new ObjectId(input.teacher),
        //             classCode: input.classCode,
        //             users: [],
        //             votes: [],
        //             createdAt: new Date()
        //         })
        //         const updatedTeacher = await mongoDbProvider.teachersCollection.updateOne(
        //             { _id: new ObjectId(input.teacher) },
        //             {
        //                 $addToSet: {
        //                     classes: createdClass.insertedId
        //                 }
        //             },
        //             { upsert: true }
        //         );
        //         return createdClass.insertedId
        //     } catch {
        //         console.log('Invalid Token')
        //     }
        // }
//     },
// };