import { Schema, model } from 'mongoose'

const voteSchema = new Schema({
    voter: {
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Vote = model('Vote', voteSchema);

export default Vote;