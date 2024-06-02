import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { getPaymentDetail } from "../../services/auth";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const hall = JSON.parse(localStorage.getItem("hall"));
  const bookingDateAndTime = JSON.parse(
    localStorage.getItem("bookingDateAndTime")
  );
  const [placeOrderData, setPlaceOrderData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPaymentDetail(
          user?._id,
          hall?._id,
          hall?.rentCharge
        );
        if (result.success) {
          setStripePromise(
            loadStripe(
              "pk_test_51PMv4eFjKd2J4rFytCBA0tKV3V14murSq5g5FAaDKxihyGXpXorHzRAbWw5XW7fPvMu0DxEipOm4soXhkWs4gK4H005y2xpCIe"
            )
          );
          setClientSecret(result?.paymentIntent.client_secret);
          setPlaceOrderData({
            paymentIntentId: result?.paymentIntent.stripe_intent_id,
            amount: result?.paymentIntent.amount,
            bookingDateAndTime,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [hall?._id, user?._id]);

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Checkout placeOrderData={placeOrderData} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
