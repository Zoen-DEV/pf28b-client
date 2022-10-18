import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  // PaymentElement,
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
// import axios from "axios";
// import { useSelect } from "@mui/base";
// const url = "https://localhost:3000/payment";
const stripePromise = loadStripe(
  "pk_test_51Ls8AVH3eAzBxjrCdmB23smtLOd0cTqhqHKYQ2eYMvA6yoQhEBKyd7GxPofzGS39TL2uM2vogL5XcPJDy6AimbDU00bvlY5EZC"
);

// const price = JSON.parse(localStorage.getItem("cart"));
// const totalPrice =
//   price
//     .map((d) => d.totalPrice)
//     .reduce((a, b) => a + b)
//     .toPrecision(4) * 100;
// console.log({ totalPrice });

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const amount = useSelect((state) => state.amount);
  // console.log(amount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
      // const { id } = paymentMethod;
      try {
        // const { data } = await axios.post(url, { id, totalPrice });
        // console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Buy</button>
    </form>
  );
};

const Payments = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payments;
