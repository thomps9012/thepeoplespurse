// export type User = {
//     username: string;
//     email: string;
//     password: string;
//     classCode: string;
// }

// export type Mutation = {
//     signUpUser: User;
// }

export type Action = {
    name: string;
    detail: string;
    organization: string;
    actionDate: Date;
    length: Float32List;
}