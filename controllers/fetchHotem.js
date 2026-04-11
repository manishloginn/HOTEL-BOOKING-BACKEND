import hotelschema from "../models/hotelschema.js";
import roomschema from "../models/roomschema.js";
import hotelIdValidator from "../utils/hotelIdValidator.js";

// ================= FETCH ALL HOTELS =================
export const fetchHotel = async (req, res) => {
    try {
        const hotelData = await hotelschema.find();

        if (hotelData.length === 0) {
            return res.status(404).json({
                message: "No hotels found"
            });
        }

        return res.status(200).json({
            message: "Hotels fetched successfully",
            data: hotelData
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


// ================= SELECT HOTEL =================
export const selectHotel = async (req, res) => {
    const { hotelId } = req.body;

    if (!hotelId) {
        return res.status(400).json({
            message: "hotelId not found"
        });
    }

    try {
        hotelIdValidator(hotelId);

        const findhotel = await roomschema.find({ hotelId });

        const hotelSearch = await hotelschema.findById(hotelId);

        if (!hotelSearch) {
            return res.status(404).json({
                message: "Hotel not found"
            });
        }

        if (findhotel.length === 0) {
            return res.status(404).json({
                message: "No rooms found"
            });
        }

        return res.status(200).json({
            message: "Please select room",
            data: findhotel,
            hotelDetail: hotelSearch
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


// ================= FETCH ROOMS =================
export const fetchRoomInHotel = async (req, res) => {
    const { hotelId } = req.body;

    if (!hotelId) {
        return res.status(400).json({
            message: "Please select valid hotel"
        });
    }

    try {
        const result = await roomschema.find({ hotelId });

        if (result.length === 0) {
            return res.status(404).json({
                message: "No rooms available"
            });
        }

        return res.status(200).json({
            message: "Rooms fetched successfully",
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};