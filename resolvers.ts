import { DateTimeResolver } from 'graphql-scalars'
import { ActionDbObject, ClassDbObject, User, UserDbObject, VoteDbObject } from './graphql-codegen-typings'
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
        actions: (obj: any, {userID}: {userID: string}): Promise<ActionDbObject
            | any> => 
            mongoDbProvider.usersCollection.findOne({ _id: new ObjectId(userID) })


    },
    Mutation: {

    },
    User: {
        id: (obj: User | UserDbObject): string =>
            (obj as UserDbObject)._id
                ? (obj as UserDbObject)._id.toString()
                : (obj as User).id
    }
};