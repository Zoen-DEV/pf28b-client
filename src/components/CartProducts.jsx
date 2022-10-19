import React from "react";
import CartCard from "./CartCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const CartProducts = ({ animes, mangas, cartItems }) => {
  let total = 0;
  const cart = cartItems.map((item) => {
    if (item.Product.AnimeId) {
      let anime = animes.find((j) => j.id === item.Product.AnimeId);
      return {
        product: anime,
        amount: item.Product.amount,
        totalPrice: item.Product.totalPrice,
        cartId: item.Product.id,
      };
    } else {
      let manga = mangas.find((j) => j.id === item.Product.MangaId);
      return {
        product: manga,
        amount: item.Product.amount,
        totalPrice: item.Product.totalPrice,
        cartId: item.Product.id,
      };
    }
  });
  return (
    <div className="products_container">
      <div>
        <div className="products_cart_title">
          <h2>Products in the cart</h2>
        </div>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => {
              // setTotal(item.totalPrice + total)
              return (
                <li key={index}>
                  <CartCard
                    image={item.product.image}
                    title={item.product.title}
                    producers={item.product.producers}
                    price={item.product.price}
                    id={item.product.id}
                    cartId={item.cartId}
                    amount={item.amount}
                    totalPrice={item.totalPrice}
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
              console.log(item.Product.totalPrice);
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
        <Link className="link" to="/payments">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartProducts;
