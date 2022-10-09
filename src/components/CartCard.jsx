import React from "react";

const CartCard = ({ title, price, id, image, amount }) => {
  return (
    <div className="cart_card_container">
      <img src={image} alt={id} />
      <div className="cart_card_info">
        <h1>{title}</h1>
        <p>
          <span>Price by unit: </span>
           {price}
        </p>
        <p><span>Total price: </span> {price * amount}</p>
        <p><span>Amount: </span> {amount}</p>
      </div>
    </div>
  );
};

export default CartCard;
