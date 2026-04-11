import JWT from "jsonwebtoken";

const adminAuthenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "admin") {
            return res.status(403).json({
                message: "Access denied. Admin only"
            });
        }

        req.user = decoded;
        next();

    } catch (err) {
        return res.status(403).json({
            message: "Invalid or expired token"
        });
    }
};

export default adminAuthenticate;