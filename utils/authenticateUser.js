import JWT from "jsonwebtoken"

const authenticateUser = (req, res, next) => {
    const token = req?.headers["authorization"]?.slice(8);
    
    console.log(token, "token")
    if (!token) {
        return res.status(400).json({
            message: 'User not authenticated'
        })
    }

    try {
        const verified = JWT.verify(token, process.env.JWT_SECRET)
        if(!verified){
            return res.status(400).json({
                message: "invalid token"
            })
        }
        req.user = verified;
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

export default authenticateUser