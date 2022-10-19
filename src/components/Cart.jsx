import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

  // let localCart;

  useEffect(() => {
    dispatch(getCart(user.id));
  }, [dispatch, user.id]);

  if (cartItems.length > 0) {
    return (
      <article className="cart_container">
        {animes.length > 0 && mangas.length > 0 ? (
          <CartProducts cartItems={cartItems} animes={animes} mangas={mangas} />
        ) : (
          <Loader />
        )}
      </article>
    );
  } else {
    return (
      <article className="cart_container_wo_products">
        <h1>You have no products in the cart</h1>
        <div className="links_container">
          <Link className="link" to="/animes">
            Go to see the catalog of Animes
          </Link>
          <Link className="link" to="/mangas">
            Go to see the catalog of Mangas
          </Link>
        </div>
      </article>
    );
  }
};

export default Cart;
