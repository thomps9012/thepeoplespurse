"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const actionSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // class: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Class',
    //     required: false
    // },
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    length: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    affiliated_org: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    sign_off: {
        type: String,
        required: false,
        unique: false
    }
});
const Action = (0, mongoose_1.model)('Action', actionSchema);
exports.default = Action;
