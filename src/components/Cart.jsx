import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import Loader from "./Loader";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <article className="cart_container">
      <div className="products_container">
        <div className="products_cart_title">
          <h2>Products in the cart</h2>
        </div>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <li key={item.id}>
                  <CartCard
                    image={item.image}
                    title={item.title}
                    producers={item.producers}
                    price={item.price}
                    id={item.id}
                  />
                </li>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </article>
  );
};

export default Cart;
