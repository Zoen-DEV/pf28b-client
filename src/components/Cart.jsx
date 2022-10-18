
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Actions/actions";
import CartProducts from "./CartProducts";
import Loader from "./Loader";

const Cart = () => {
  const animes = useSelector((state) => state.allAnimes);
  const mangas = useSelector((state) => state.allMangas);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  // const [total, setTotal] = useState(total + item.totalPrice);
  let total = 0;
  // let localCart;

  useEffect(() => {
    dispatch(getCart(user.id));
  }, [dispatch]);

  if (cartItems.length > 0) {
    return (
      <article className="cart_container">
        <div className="products_container">
          <div className="products_cart_title">
            <h2>Products in the cart</h2>
          </div>
          {animes.length > 0 && mangas.length > 0 ? (
            <CartProducts
              cartItems={cartItems}
              animes={animes}
              mangas={mangas}
            />
          ) : (
            <Loader />
          )}
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
                      ${item.Product.totalPrice / item.Product.amount} x{" "}
                      {item.Product.amount} ={" "}
                      <span>${item.Product.totalPrice}</span>
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
            {cartItems?.forEach((item) => {
              total += item.Product.totalPrice;
            })}
            ${total.toString().substring(0, 5)}
          </p>
          <button>Checkout</button>
        </div>
      </article>
    );
  } else {
    return <Loader></Loader>;
  }

};

export default Cart;
