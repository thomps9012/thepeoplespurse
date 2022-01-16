import { gql } from 'apollo-server';

export const typeDefs = gql`
scalar DateTime
scalar JWT
scalar EmailAddress

type User @entity {
    id: ID! @id
    first_name: String! @column
    last_name: String! @column
    username: String! @column
    email: EmailAddress @column(overrideType: "string")
    password: String! @column
    class: [Class] @link
    actions: [Action] @link
    educator: Boolean! @column
}

type Vote @entity {
    id: ID! @id 
    voter: User! @link
    budget: [Dept]! @link
    class: Class @link
    createdAt: DateTime @column(overrideType: "Date")
}

type Action @entity {
    id: ID! @id
    user: User!
    name: String! @column
    detail: String! @column
    length: Float!
    date: DateTime! @column(overrideType: "Date")
    affiliated_org: String! @column
    documentation: File @column
}

type Dept @entity{
    code: String! @column
    name: String! @column
    percent: Float! @column
}

type Class @entity{
    id: ID! @id
    classCode: String! @column
    learners: [ID] @link
    votes: [ID] @link
    educaotr: ID! @link
    createdAt: DateTime @column(overrideType: "Date")
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
    password: String
}

input UserSignUpInput {
    email: EmailAddress,
    username: String,
    password: String
}

input CreateClassInput {
    classCode: String!,
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
    createClass(input: CreateClassInput!): Class
    joinClass(classCode: String!): Class 
    login(input: LoginInput!): Auth
}
`;
