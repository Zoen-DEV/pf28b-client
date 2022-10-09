import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import Loader from "./Loader";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    if(cartItems.length>0){
      cartItems.forEach(item=>{
        setTotal(total + item.totalPrice)
      })
    }
  },[])
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
      <div className="prices">
        <div className="products_cart_title">
          <h2>Summary</h2>
        </div>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return (
                <li key={index}>
                  <p>
                    {item.product.price} x {item.amount} ={" "}
                    <span>{item.totalPrice}</span>
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
          {total}
        </p>
      </div>
    </article>
  );
};

export default Cart;
