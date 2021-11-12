import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars'
// import { ObjectId } from 'mongodb'
// import { mongoDbProvider } from './mongodb.provider'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import { AuthenticationError } from 'apollo-server-core'

export const resolvers = {
    DateTime: DateTimeResolver,
    Query : {

    },
    Mutation: {

    },
    // User: {
    //     id: (obj: User | UserDbObject): string =>
    //     (obj as UserDbObject)._id
    //         ? (obj as UserDbObject)._id.toString()
    //         : (obj as User).id
    // }
};