const JWT = require('jsonwebtoken')

const authenticateUser = ( req, res, next ) => {
    const authHeader = req.headers.authorization;


    // console.log(token)

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'User not authenticated',
        });
    }

    const token = authHeader.split(' ')[1];


    try {
            const verified = JWT.verify(token, process.env.JWT_SECRET)
            req.user = verified;
            next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

module.exports = authenticateUser