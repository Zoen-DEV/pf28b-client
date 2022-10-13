import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Actions/actions";
import CartCard from "./CartCard";
import Loader from "./Loader";

const Cart = () => {
  const animes = useSelector((state) => state.allAnimes);
  const mangas = useSelector((state) => state.allMangas);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const [total, setTotal] = useState(0);
  let localCart;

  useEffect(() => {
    if (user) {
      dispatch(getCart(user.id));
    } else {
      localCart = localStorage.getItem("cart");
    }
  }, [dispatch]);

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
  if (cart.length>0) {
    console.log(cart[0].product);
    return (
      <article className="cart_container">
        <div className="products_container">
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
                      cartId={item.id}
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
            {cart.length > 0 ? (
              cart.map((item, index) => {
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
            {cart.forEach((item) => {
              setTotal(total + item.totalPrice);
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
