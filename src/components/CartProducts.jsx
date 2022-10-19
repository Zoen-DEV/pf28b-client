import React, { useState } from "react";
import CartCard from "./CartCard";
import Loader from "./Loader";

const CartProducts = ({ animes, mangas, cartItems }) => {
  console.log(cartItems)
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
  );
};

export default CartProducts;
