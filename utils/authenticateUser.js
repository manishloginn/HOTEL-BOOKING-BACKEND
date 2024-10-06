const JWT = require('jsonwebtoken')

const authenticateUser = ( req, res, next ) => {
    const token = req.cookies.userToken;

    if(!token) {
        return res.send({
            status:401,
            message: 'User not authenticated'
        })
    }

    console.log("token",   token)

    try {
            const verified = JWT.verify(token, process.env.JWT_SECRET)
            console.log("Verified Payload:", verified); 
            req.user = verified;
            next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

module.exports = authenticateUser