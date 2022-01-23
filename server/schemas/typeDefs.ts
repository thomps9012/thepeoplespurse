import { gql } from 'apollo-server';

export const typeDefs = gql`
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
    voter: User! 
    budget: [Dept]! 
    class: Class 
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
    code: String! 
    name: String! 
    percent: Float! 
}

type Class{
    _id: ID
    class_code: String! 
    learners: [User] 
    votes: [ID] 
    educator: ID! 
    createdAt: DateTime
}

type Query {
    getUser(id: ID!): User
    userActions(user: ID!): [Action]
    classVotes(classID: ID!): [Vote]
    allVotes: [Vote]
    classInfo(classID: ID!): Class
    classes(educator: ID!): [Class]
}

input DeptInput {
    name: String!
    code: String!
    percent: Float!
}

input CastVote {
    budget: [DeptInput]!
    class: ID
    voter: ID!
}

input TakeAction {
    user: ID!
    name: String!
    detail: String!
    organization: String!
    actionDate: DateTime
    length: Float!
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
    castVote(input: CastVote!): Vote
    takeAction(input: TakeAction!): Action
    createClass(classCode: String!): ID
    joinClass(classCode: String!): Class 
    login(input: LoginInput!): Auth
}
`;
