import express from "express";

import {
  userRegistration,
  userLogin,
  roomAdd,
  hotelRegistration,
  adminLogin
} from "../controllers/authtication.js";

import insertData from "../controllers/addDatatodb.js";
import  {bookRoom}  from "../controllers/booking.js";

import authenticateUser from "../utils/authenticateUser.js";
import adminAuthenticate from "../utils/adminAuthenticate.js";

import {
  fetchHotel,
  selectHotel,
  fetchRoomInHotel
} from "../controllers/fetchHotem.js";

import myBookingController from "../controllers/myBookings.js";
import mySingleBooking from "../controllers/mySingleBooking.js";

import { rzpCallback } from "../utils/razorpaycallback.js";
import { bookingpayment } from "../utils/gateway.js";
import { callback } from "../utils/callback.js";

const router = express.Router();


// ================= BASIC =================
router.post("/insertData", insertData);

// ================= USER =================
router.post("/userRegister", userRegistration);
router.post("/userLogin", userLogin);

// ================= ADMIN =================
router.post("/adminRegistration", hotelRegistration);
router.post("/adminLogin", adminLogin);

// ================= ROOM =================
router.post("/roomadd", adminAuthenticate, roomAdd);

// ================= HOTEL =================
router.get("/hotelData", fetchHotel);
router.post("/hotelselect", selectHotel);
router.post("/hotelRooms", fetchRoomInHotel);

// ================= PAYMENT =================
router.post("/razorpay-nonseamless/callback", rzpCallback);
router.get("/redirect/pg", bookingpayment);
router.post("/callback", callback);
router.get("/callback", callback);

// ================= BOOKING =================
router.post("/bookRoom", authenticateUser, bookRoom);
router.get("/myBookings", authenticateUser, myBookingController);
router.post("/mySingleBooking", authenticateUser, mySingleBooking);

export default router;