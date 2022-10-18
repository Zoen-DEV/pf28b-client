import React, { useEffect, useState } from "react";
import "bootswatch/dist/lux/bootstrap.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getTotalPrice,
  setboughtItems,
} from "../redux/Actions/actions";
import axios from "axios";
import Swal from "sweetalert2";
import s from "./styles/Payments.module.css";

const url = "http://localhost:3000/payment";
const stripePromise = loadStripe(
  "pk_test_51Ls8AVH3eAzBxjrCdmB23smtLOd0cTqhqHKYQ2eYMvA6yoQhEBKyd7GxPofzGS39TL2uM2vogL5XcPJDy6AimbDU00bvlY5EZC"
);

const CheckoutForm = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    country: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const price = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice(userId));
  }, [dispatch, userId]);
  const stripe = useStripe();
  const elements = useElements();

  const totalPrice = price * 100;

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setForm({})
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      // console.log(paymentMethod);
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(url, { id, totalPrice });
        // console.log(data);
        Swal.fire(`Your payment for ${price} was successfully`);
        elements.getElement(CardElement).clear();
      } catch (error) {
        // console.log(error.response.data);
        Swal.fire(error.response.data);
      }
      setLoading(false);
    }
    setForm({
      email: "",
      name: "",
      address: "",
      address2: "",
      city: "",
      country: "",
      zip: "",
    });
    // dispatch(setboughtItems(userId));
    dispatch(getCart(userId));
  };

  return (
    <div className={s.formBoost}>
      <div className={s.form}>
        <form class="row g-3" onSubmit={handleSubmit}>
          <div className={s.cardElement}>
            <CardElement className={s.inputStripe} />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              value={form.email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="inputPassword4"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={form.address2}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Country
            </label>
            <select
              id="inputState"
              class="form-select"
              value={form.country}
              name="country"
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              <option value="Mexico">Mexico</option>
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Brasil">Brasil</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="inputZip"
              value={form.zip}
              name="zip"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-success" disabled={!stripe}>
            {loading ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "Buy"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const Payments = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className={s.container}>
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Payments;
