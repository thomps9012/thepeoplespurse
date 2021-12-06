// update type here
export type Class = {
    username: string;
    email: string;
    password: string;
    classCode: string;
}

export type Action = {
    name: string;
    detail: string;
    organization: string;
    actionDate: Date;
    length: Float32List;
}