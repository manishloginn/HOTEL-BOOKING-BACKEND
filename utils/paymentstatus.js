import axios from "axios";

export const getPaymentStatus = async (order_id) => {
  try {
    const { data } = await axios.get(
      `${process.env.RAZORPAY_URL}/v1/orders/${order_id}/payments`,
      {
        auth: {
          username: process.env.RAZORPAY_KEY_ID,
          password: process.env.RAZORPAY_KEY_SECRET,
        },
      }
    );

    const items = data.items || [];

    const captured = items.find(
      (item) => item.status === "captured"
    );

    return !!captured;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};