import Booking from "../models/bookingschema.js";

export const bookingpayment = async (req, res) => {
  try {
    const bookingId = req.query.collect_id;
    const amount = req.query.amount;
    const collect_id = bookingId;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("booking not found");
    }
     const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: 'INR',
        // name: additional_data?.student_details?.student_name || 'Fees Payment',
        description: 'Fees Payment',
        order_id: booking.order_id,
        callback_url: `${process.env.URL}/callback?collect_id=${collect_id}`,
        handler: function (response) {
          console.log('Payment successful:', response);
          // You can perform an AJAX call here to your server to verify the payment
          // and update the payment status in your database
          // alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          window.location.href = `${process.env.URL}/cancel?collect_id=${collect_id}`;
        },
        prefill: {
          name: "test hotel" || '',
          email: "test@gmail.com",
          contact: "9999999999",
        },
        notes: {
          bookingId: bookingId,
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: function () {
            window.location.href = `${process.env.URL}/razorpay-nonseamless/cancel?collect_id=${collect_id}`;
          },
        },
      };
      return res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Razorpay Payment</title>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </head>
    <body>
      <script>
        window.onload = function () {
          const options = {
            ...${JSON.stringify(options)},
            modal: {
              ondismiss: function () {
                // Redirect when Razorpay popup is closed
                window.location.href = "${process.env.URL
        }/razorpay-nonseamless/callback?collect_id=${collect_id}";
              }
            }
          };

          const rzp = new Razorpay(options);
          rzp.open();
        };
      </script>
    </body>
  </html>
`)
  } catch (error) {
    console.log(error);
  }
};