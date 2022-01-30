import { gql } from 'apollo-server';

export const typeDefs = gql`
scalar Date
scalar DateTime
scalar JWT
scalar EmailAddress

type User {
    _id: ID
    first_name: String! 
    last_name: String! 
    username: String! 
    email: EmailAddress
    password: String! 
    classes: [Class] 
    actions: [Action] 
    educator: Boolean! 
}

type Vote {
    _id: ID 
    voter: ID! 
    budget: [Dept]! 
    class_code: String 
    createdAt: DateTime
}

type Action {
    _id: ID
    user: User!
    name: String! 
    detail: String! 
    length: Float!
    date: DateTime!
    affiliated_org: String
    sign_off: String! 
}

type Dept{
    code: Int! 
    name: String! 
    percent: Float! 
}

type Class{
    _id: ID
    class_code: String! 
    learners: [ID] 
    votes: [ID] 
    educator: ID! 
    createdAt: DateTime
}

type Department {
    _id: Int
    dept: String
    percent: Int
}

type AllVotes {
    aggVotes: [Department]
    totalVotes: Int
}

type Query {
    getUser: User
    classActions(classID: ID!): [User]
    classVotes(classID: ID!): [Vote]
    allVotes: AllVotes
    classInfo(classID: ID!): Class
    classes: [Class]
    allClasses: [Class]
}

input DeptInput {
    name: String!
    code: Int!
    percent: Float!
}

input CastVote {
    budget: [DeptInput]!
    class_code: String
}

input TakeAction {
    name: String!
    detail: String!
    organization: String!
    length: Float!
    action_date: DateTime
    contact: String!
}

input LoginInput {
    email: EmailAddress,
    username: String,
    password: String
}

input UserSignUpInput {
    first_name: String,
    last_name: String,
    email: EmailAddress,
    username: String,
    password: String
}

input CreateClassInput {
    class_code: String!,
    educator: ID!
}

type Auth {
    token: ID
    user: User
  }

type Mutation {
    signUp(input: UserSignUpInput!): Auth 
    castVote(input: CastVote!): ID
    takeAction(input: TakeAction!): ID
    createClass(class_code: String!): ID
    joinClass(class_code: String!): Class 
    login(input: LoginInput!): Auth
}
`;
