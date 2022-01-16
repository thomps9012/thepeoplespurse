"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const voteSchema = new mongoose_1.Schema({
    voter: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    budget: [
        {
            dept_name: {
                type: String,
                required: true,
                unique: true,
                trim: true
            },
            dept_code: {
                type: Number,
                required: true,
                unique: true
            },
            budget_percent: {
                type: Number,
                required: true
            }
        }
    ],
    class: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Class',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Vote = (0, mongoose_1.model)('Vote', voteSchema);
exports.default = Vote;
