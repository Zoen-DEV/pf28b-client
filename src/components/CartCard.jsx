import React from "react";

const CartCard = ({ title, price, id, image }) => {
  return (
    <div className="cart_card_container">
      <img src={image} alt={id} />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default CartCard;
