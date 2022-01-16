import { Schema, model } from 'mongoose';


const classSchema = new Schema({
    educator: {
        type: Schema.Types.ObjectId,
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
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    votes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vote'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Class = model('Class', classSchema);

export default Class;