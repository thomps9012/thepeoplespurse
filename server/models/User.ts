import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new Schema({
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
            type: Schema.Types.ObjectId,
            ref: 'Class',
            required: false
        }
    ],
    actions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    ],
    educator: {
        type: Boolean,
        default: false,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password: string | Buffer) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;
