import axios from "axios";
import bookingschema from "../models/bookingschema.js";

export const createOrder = async (bookingid, price) => {
    try {
    
      const totalPaise = Math.round(price * 100);
      const data = {
        amount: totalPaise,
        currency: 'INR',
        receipt: bookingid.toString(),
      };

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.RAZORPAY_URL}/v1/orders`,
        headers: { 'Content-Type': 'application/json' },
        auth: {
          username: process.env.RAZORPAY_KEY_ID,
          password: process.env.RAZORPAY_KEY_SECRET,
        },
        data,
      };

      const { data: rpRes } = await axios.request(config);
      console.log(rpRes, "rpRes")
      if (rpRes.status !== 'created') {
        throw new Error('Failed to create Razorpay order');
      }

      const Booking = await bookingschema.findByIdAndUpdate(bookingid, { order_id: rpRes.id }, { new: true });

      return {
        url: `${process.env.URL}/redirect/pg?collect_id=${Booking._id}&amount=${Booking.totalPrice}`,
        collect_req: Booking,
      };
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    //   throw new Error(error.response?.data || error.message);
    }
  }