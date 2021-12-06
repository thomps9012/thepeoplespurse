import { gql } from 'apollo-server';

const typeDefs = gql`
scalar DateTime
scalar JWT
scalar EmailAddress

type User @entity {
    id: ID! @id
    username: String! @column
    email: EmailAddress @column(overrideType: "string")
    password: String! @column
    classCode: Class! @link
    actions: [Action]! @link
}

type Teacher @entity {
    id: ID! @id
    username: String! @column
    email: EmailAddress @column(overrideType: "string")
    password: String! @column
    classes: [ID]! @link
}

type Vote @entity {
    id: ID! @id 
    voter: User! @link
    createdAt: DateTime @column(overrideType: "Date")
    budget: [Dept]! @link
}

type Action @entity {
    name: String! @column
    detail: String! @column
    organization: String! @column
    actionDate: DateTime @column(overrideType: "Date")
    length: Float!
}

type Dept @entity{
    code: String! @column
    name: String! @column
    percent: Float! @column
}

type Class @entity{
    id: String! @column
    classCode: String! @column
    users: [User] @link
    votes: [Vote] @link
    teacher: Teacher! @link
    createdAt: DateTime @column(overrideType: "Date")
}

type Query {
    getUser(id: ID!): User
    getTeacher(id: ID!): Teacher
    allUsers: [User]
    vote(id: ID!): Vote
    allVotes: [Vote]
    classVotes(classCode: String!): [Vote]
    classes(teacherID: ID!): [Class]
    actions(userID: ID!): [Action]
}

input DeptInput {
    name: String!
    code: String!
    percent: Float!
}

input CastVote {
    budget: [DeptInput]!
    classCode: String
    voter: String!
}

input TakeAction {
    jwt: JWT!
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
    classCode: String,
}

input TeacherSignUpInput {
    email: EmailAddress,
    username: String,
    password: String
}

input CreateClassInput {
    classCode: String!,
    teacher: String!
}

type Auth {
    token: JWT!
    user: User
    teacher: Teacher
  }

type Mutation {
    login(input: LoginInput!): Auth!
    teacherLogin(input: LoginInput!): Auth!
    signUp(input: UserSignUpInput!): Auth!
    teacherSignUp(input: TeacherSignUpInput!): Auth!
    castVote(input: CastVote!): ID
    takeAction(input: TakeAction!): Action
    createClass(input: CreateClassInput!): ID!
}
`;

export default typeDefs;