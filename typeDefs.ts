import { gql } from 'apollo-server';

const typeDefs = gql`
scalar DateTime
scalar EmailAddress
scalar JWT

type User @entity {
    id: ID! @id
    username: String! @column
    password: String! @column
    email: EmailAddress @column(overrideType: "string")
    teacher: Boolean! @column
    interests: [Interest]! @column
    actions: [Action] @link
    classes: [Class] @link
}

type Vote @entity {
    id: ID! @id 
    voter: User! @link
    classCode: Class! @link
    createdAt: DateTime @column(overrideType: "Date")
    budget: [Dept]! @column
}

type Action @entity {
    id: ID! @id
    student: User! @link
    name: String! @column
    detail: String! @column
    organization: String! @column
    actionDate: DateTime @column(overrideType: "Date")
    length: Number!
}

type Interest @entity {
    name: String! @column
    depts: [Dept]! @column
}

type Dept @entity @key(fields: "code"){
    code: String! @column
    name: String! @column
    percent: Number! @column
}

type Class @entity @key(fields: "id"){
    id: String! @column
    votes: [Vote]! @link
    createdAt: DateTime @column(overrideType: "Date")
}

type Query {
    getUser(id: ID!): User
    users: [User]
    vote(id: ID!): Vote
    classVotes(classCode: String!): [Vote]
    classes(userID: ID!): [Class]
    actions(userID: ID!): [Action]
}

input CastVote {
    interests: [Interest]
    department: [Dept]!
    classCode: String
}

input TakeAction {
    name: String!
    detail: String!
    organization: String!
    actionDate: DateTime
    length: Number!
}

input LoginInput {
    email: EmailAdress,
    password: String
}

input SignUpInput {
    email: EmailAddress,
    username: String,
    password: String
}

type Mutation {
    login(input: LoginInput!): JWT!
    signUp(input: SignUpInput!): JWT!
    castVote(input: CastVoteInput!): Vote!
    takeAction(input: TakeAction!): Action!
}
`;

export default typeDefs;