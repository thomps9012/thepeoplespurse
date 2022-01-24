"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = 'secret';
const expiration = '2h';
module.exports = {
    authMiddleware: ({ req }) => {
        let token = req.body.toekn || req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split('').pop().trim();
        }
        if (!token) {
            return req;
        }
        try {
            const data = jsonwebtoken_1.default.verify(token, secret, { maxAge: expiration });
            req.user = data;
        }
        catch (_a) {
            console.log('Invalid Token');
        }
        return req;
    },
    signToken: ({ email, username, _id, educator }) => {
        const payload = { email, username, _id, educator };
        return jsonwebtoken_1.default.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
