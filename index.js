import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./connection/MongoDbConnection.js";
import Auth from "./routes/router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "production";

// middleware
app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: [
    "https://hotel-booking-frontend-red.vercel.app",
    "http://localhost:3000"
  ],
  credentials: true
}));

// DB connect
connectDB();

// routes
app.use("/", Auth);

// server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT} in ${MODE} mode`);
});