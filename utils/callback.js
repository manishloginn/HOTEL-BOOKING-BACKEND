import bookingschema from "../models/bookingschema.js";
import axios from "axios";
import { getPaymentStatus } from "./paymentstatus.js";

export const callback = async (req, res) => {
  try {
    const bookingid = req.query.collect_id;
    const Booking = await bookingschema.findById(bookingid);
    if (!Booking) {
      return res.redirect(`${process.env.FRONTEND_URL}/book`);
    }
    const paymentStatus = await getPaymentStatus(Booking.order_id);
    if (paymentStatus) {
      Booking.status = "confirmed";
      await Booking.save();
      return res.redirect(
        `${process.env.FRONTEND_URL}/book`
      );
    } else {
      Booking.status = "failed";
      await Booking.save();

      // ❌ FAILED REDIRECT
      return res.redirect(
        `${process.env.FRONTEND_URL}/book`
      );
    }
  } catch (error) {
    console.log(error);

    return res.redirect(
      `${process.env.FRONTEND_URL}/payment-failed`
    );
  }
};

