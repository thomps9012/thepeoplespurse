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
    educator: Boolean! @column
}

type Vote @entity {
    id: ID! @id 
    voter: ID! @link
    class: ID @link
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
    id: ID! @id
    classCode: String! @column
    learners: [ID] @link
    votes: [ID] @link
    educaotr: ID! @link
    createdAt: DateTime @column(overrideType: "Date")
}

type Query {
    getUser(id: ID!): User
    getTeacher(id: ID!): Teacher
    allUsers: [User]
    classVotes(classID: ID!): [Vote]
    allVotes: [Vote]
    classInfo(classID: ID!): Class
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
    userID: String!
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
