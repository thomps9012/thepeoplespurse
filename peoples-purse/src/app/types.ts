import { ObjectId } from "bson"

// update type here
export type Class = {
    id: ObjectId;
    username: string;
    email: string;
    password: string;
    classCode: string;
    createdAt: Date;
}

export type Action = {
    name: string;
    detail: string;
    organization: string;
    actionDate: Date;
    length: Float32List;
}