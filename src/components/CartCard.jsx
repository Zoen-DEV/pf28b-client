import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteItemCart } from "../redux/Actions/actions";

const CartCard = ({ title, price, id, image, amount, cartId }) => {
  // const [count, setCount] = useState(1);
  let dots = ''
  const dispatch = useDispatch()
  if(title.length>15){
    dots = '...'
  }
  const deleteItemFromCart = (e, id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItemCart(id))
      }
    })
  }
  return (
    <div className="cart_card_container">
      <img src={image} alt={id} />
      <div className="cart_card_info">
        <h1>{title.substring(0, 15)}{dots}</h1>
        <p>
          <span>Price by unit: </span>
          {price}
        </p>
        <p>
          <span>Total price: </span> {price * amount}
        </p>
        <p>
          <span>Amount: </span> {amount}
        </p>
      </div>
      <div className="btns_container">
        {/* <div className="stock_container">
          <button
            onClick={(e) => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div> */}
        <button onClick={(e) => deleteItemFromCart(e, cartId)}>
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
