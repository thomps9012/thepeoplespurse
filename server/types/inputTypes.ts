export type UserSignUpInput = {
    first_name: String;
    last_name: String;
    email: {
        type: String,
        match: ['/[a-z\A-Z\d]+([\.\_]?[a-z\A-Z\d]+)+@[a-z\A-Z\d]+(\.[a-z]+)+/']
    };
    username: String;
    password: string;
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

export type ActionInput = {
    name: String;
    detail: String;
    length: Number;
    action_date: Date;
    affiliated_org: String;
    contact: String;
}

export type VoteInput = {
    class_code: String;
    budget: [
        {
            code: String;
            name: String;
            percent: Number;
        }
    ]
}