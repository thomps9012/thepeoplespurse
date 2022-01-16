import { Schema, model } from 'mongoose'

const actionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
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
    documentation: {
        type: File,
        required: false,
        unique: false
    }
})

const Action = model('Action', actionSchema);

export default Action;