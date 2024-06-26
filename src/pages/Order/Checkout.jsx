import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { bookHall } from "../../services/auth";
import { showToast } from "../../utils/showToast";

const CheckoutForm = ({ placeOrderData }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const hall = JSON.parse(localStorage.getItem("hall"));
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    setLoading(false);
    if (result.error) {
      showToast(result.error.message, "error", true);
      console.error(result.error.message);
      return;
    }
    const totalAmount = parseFloat(placeOrderData.amount);
    const response = await bookHall(user?._id, hall?._id, {
      bookingDateAndTime: placeOrderData.bookingDateAndTime,
      paymentIntentId: result.paymentIntent.id,
      amount: totalAmount,
    });
    if (response.success) {
      showToast("Hall Booked  Successfully", "success", true);
      navigate(`/halls`);
    } else {
      console.log("res, ", response);
      navigate(`/halls`);

      showToast(response.message, "error", false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md"
      >
        <PaymentElement className="p-2 mb-4 " />

        <button
          className="px-2 py-1 border border-black rounded-md hover:bg-blue-400 hover:text-white hover:border-none"
          type="submit"
          disabled={!stripe}
        >
          {loading ? "Submitting..." : `Pay RS ${placeOrderData?.amount + 10000}`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
