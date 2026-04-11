// connection/MongoDbConnection.js

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (err) {
        console.log("DB connection error:", err.message);
        process.exit(1);
    }
};

export default connectDB;