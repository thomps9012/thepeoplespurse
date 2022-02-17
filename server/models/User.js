"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/[a-z\A-Z\d]+([\.\_]?[a-z\A-Z\d]+)+@[a-z\A-Z\d]+(\.[a-z]+)+/, 'Must be a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    class: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Class',
            required: false
        }
    ],
    actions: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    ],
    educator: {
        type: Boolean,
        default: false,
        required: true
    }
});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt_1.default.hash(this.password, saltRounds);
    }
    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt_1.default.compare(password, this.password);
};
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
