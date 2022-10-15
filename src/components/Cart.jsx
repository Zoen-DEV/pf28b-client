import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import Loader from "./Loader";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  let total = 0;
  return (
    <article className="cart_container">
      <div className="products_container">
        <div className="products_cart_title">
          <h2>Products in the cart</h2>
        </div>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              // setTotal(item.totalPrice + total)
              return (
                <li key={index}>
                  <CartCard
                    image={item.product.image}
                    title={item.product.title}
                    producers={item.product.producers}
                    price={item.product.price}
                    id={item.product.id}
                    cartId={item.id}
                    amount={item.amount}
                  />
                </li>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
      <div className="summary_cart">
        <div className="products_cart_title">
          <h2>Summary</h2>
        </div>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return (
                <li key={index}>
                  <p>
                    ${item.product.price} x {item.amount} ={" "}
                    <span>${item.totalPrice}</span>
                  </p>
                </li>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
        <p>
          <span>Total: </span>
          {cartItems.forEach((item) => {
            total += item.totalPrice;
          })}
          ${total.toString().substring(0, 5)}
        </p>
        <Link to="/payments">
          <button>Checkout</button>
        </Link>
      </div>
    </article>
  );
};

export default Cart;
