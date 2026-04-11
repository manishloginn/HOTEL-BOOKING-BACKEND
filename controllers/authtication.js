import JWT from "jsonwebtoken";

import hotelschema from "../models/hotelschema.js";
import userschema from "../models/userschema.js";
import roomschema from "../models/roomschema.js";

import {
  registrationValidator,
  addHotelValidator,
  validateAdmin
} from "../utils/registraionvalidator.js";


// ================= HOTEL REGISTRATION =================
export const hotelRegistration = async (req, res) => {
  const { name, location, description, amenities, images, createdAt, email, password } = req.body;

  try {
    await addHotelValidator({ name, location, description, amenities, images, createdAt, email });

    const data = new hotelschema({
      name,
      location,
      description,
      amenities,
      images,
      createdAt,
      email,
      password,
      role: "admin" // ✅ important
    });

    await data.save();

    res.status(200).json({
      message: "Hotel Data saved"
    });

  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ message: "Error while adding hotel" });
  }
};


// ================= ADMIN LOGIN =================
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    validateAdmin({ email, password });

    const findadmin = await hotelschema.findOne({ email });

    if (!findadmin) {
      return res.status(401).json({
        message: "Admin not found"
      });
    }

    const isMatch = findadmin.password === password;

    if (!isMatch) {
      return res.status(401).json({
        message: "Password not match"
      });
    }

    const token = JWT.sign(
      { id: findadmin._id, email: findadmin.email, role: findadmin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000,
    });

    return res.status(200).json({
      message: "Admin login successful",
      data: findadmin
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= ROOM ADD =================
export const roomAdd = async (req, res) => {
  const { roomtype, price, availability, capacity, amenities } = req.body;

  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = JWT.verify(token, process.env.JWT_SECRET);

    const hotelId = admin.id;

    const data = new roomschema({
      hotelId,
      roomtype,
      price,
      availability,
      capacity,
      amenities
    });

    await data.save();

    res.status(201).json({
      message: "Room added successfully",
      data
    });

  } catch (error) {
    console.error("Error adding room:", error);
    res.status(500).json({ message: "Error adding room" });
  }
};


// ================= USER REGISTRATION =================
export const userRegistration = async (req, res) => {
  const { username, password, email, role } = req.body;

  try {
    await registrationValidator({ username, password, email, role });

    const findindb = await userschema.findOne({ email });

    if (findindb) {
      return res.status(401).json({
        message: "User already exists"
      });
    }

    const data = new userschema({
      username,
      password,
      email,
      role
    });

    await data.save();

    res.status(201).json({
      message: "User registered successfully",
      data
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};


// ================= USER LOGIN =================
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await userschema.findOne({ email });

    if (!findUser) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    const isMatch = findUser.password === password;

    if (!isMatch) {
      return res.status(401).json({
        message: "Password is incorrect"
      });
    }

    const token = JWT.sign(
      {
        id: findUser._id,
        user: findUser.username,
        email: findUser.email,
        role: findUser.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "10h" }
    );

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 86400000,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      data: findUser
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};