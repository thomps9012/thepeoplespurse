import jwt from 'jsonwebtoken'

const secret = 'secret';
const expiration = '2h';

module.exports = {
    authMiddleware: ({req}: any) => {
        let token = req.body.toekn || req.query.token || req.headers.authorization;
        
        if(req.headers.authorization) {
            token = token.split('').pop().trim();
        }

        if(!token) {
            return req;
        }

        try {
            const data = jwt.verify(token, secret, { maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }
        return req;
    },
    signToken: ({ email, username, _id, educator }: any) => {
        const payload = { email, username, _id, educator };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};