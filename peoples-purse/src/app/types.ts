import { ObjectId } from "bson"

// update type here
export type Class = {
    id: ObjectId;
    classCode: string;
    createdAt: Date;
    users: [User];
    votes: [Vote];
}

export type Action = {
    name: string;
    detail: string;
    organization: string;
    actionDate: Date;
    length: Float32List;
}

export type User = {
    id: ObjectId;
    username: string;
    email: string;
    actions: [Action];
}

export type Vote = {
    id: ObjectId;
}

export type UserQuery = {
    users: User[];
}