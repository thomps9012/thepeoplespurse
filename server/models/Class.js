"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const classSchema = new mongoose_1.Schema({
    educator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    class_code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    learners: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    votes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Vote'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Class = (0, mongoose_1.model)('Class', classSchema);
exports.default = Class;
