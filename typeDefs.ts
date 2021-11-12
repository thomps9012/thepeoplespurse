import { gql } from 'apollo-server';

const typeDefs = gql`
scalar DateTime
scalar JWT

type User @entity {
    id: ID! @id
    username: String! @column @unique
    password: String! @column
    teachers: [Teacher]! @link
    actions: [Action]! @link
}

type Teacher @entity {
    id: ID! @id
    username: String! @column @unique
    password: String! @column
    classes: [Class]! @link
}

type Vote @entity {
    id: ID! @id 
    voter: User! @link
    classCode: Class! @link
    createdAt: DateTime @column(overrideType: "Date")
    budget: [Dept]! @link
}

type Action @entity {
    id: ID! @id
    student: User! @link
    name: String! @column
    detail: String! @column
    organization: String! @column
    actionDate: DateTime @column(overrideType: "Date")
    length: Float!
}

type Dept @entity @key(fields: "code"){
    code: String! @column
    name: String! @column
    percent: Float! @column
}

type Class @entity @key(fields: "id"){
    id: String! @column
    votes: [Vote]! @link
    createdAt: DateTime @column(overrideType: "Date")
}

type Query {
    getUser(id: ID!): User
    allUsers: [User]
    vote(id: ID!): Vote
    allVotes: [Vote]
    classVotes(classCode: String!): [Vote]
    classes(id: String!): [Class]
    actions(userID: ID!): [Action]
}

input DeptInput {
    name: String!
    code: String!
    percent: Float!
}

input Interest {
    name: String!
}

input CastVote {
    department: [DeptInput]!
    classCode: String
}

input TakeAction {
    name: String!
    detail: String!
    organization: String!
    actionDate: DateTime
    length: Float!
}

input LoginInput {
    username: String,
    password: String
}

input SignUpInput {
    username: String,
    password: String
}

type Mutation {
    login(input: LoginInput!): JWT!
    teacherLogin(input: LoginInput!): JWT!
    signUp(input: SignUpInput!): JWT!
    teacherSignUp(input: SignUpInput!): JWT!
    castVote(input: CastVote!): Vote!
    takeAction(input: TakeAction!): Action!
}
`;

export default typeDefs;