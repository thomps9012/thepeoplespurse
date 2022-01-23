import { ObjectId } from "mongodb"

export type UserSignUpInput = {
    first_name: String;
    last_name: String;
    email: {
        type: String,
        match: ['/[a-z\A-Z\d]+([\.\_]?[a-z\A-Z\d]+)+@[a-z\A-Z\d]+(\.[a-z]+)+/']
    };
    username: String;
    password: String;
}

export type UserLoginInput = {
    username: {
        required: false;
        type: String;
    }
    email: {
        required: false;
        type: String;
    };
    password: string;
}

// export type CreateClassInput = {
//     class_code: String;
//     educator: ObjectId;
// }