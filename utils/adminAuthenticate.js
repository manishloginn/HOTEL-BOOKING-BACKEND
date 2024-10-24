const JWT = require('jsonwebtoken')

const adminAuthenticate = (req, res, next) => {

    const token = req.cookies.adminToken

    // console.log(token)

    if(!token){
        return res.send({
            status:401,
            message: 'Admin not authenticated'
        })
    }

    try {
        const verify = JWT.verify(token, process.env.JWT_SECRET)

        // console.log(verify)

        req.adminUser = verify

        next()


    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
        
    }




}

module.exports = adminAuthenticate