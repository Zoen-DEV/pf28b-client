import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import {
  deleteDetails,
  getAnimesDetails,
  getDetails,
  getProductReviews,
  refreshReviews,
  setCartItems,
  addFavorite
} from "../redux/Actions/actions";
import NewReview from "./NewReview";
import Reviews from "./Reviews";

const Details = () => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const id = useParams().id;
  const [count, setCount] = useState(1);
  const lsCategory = localStorage.getItem("category");
  const randomId = uuidv4();
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const reviews = useSelector((state) => state.reviews);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(lsCategory).id === 1) {
      dispatch(getAnimesDetails(id));
      dispatch(getProductReviews(id, "anime"));
    } else {
      dispatch(getDetails(id));
      dispatch(getProductReviews(id, "manga"));
    }
    return () => {
      dispatch(deleteDetails());
      dispatch(refreshReviews());
    };
  }, [dispatch, id, lsCategory]);

  const toCart = (e) => {
    if (user) {
      dispatch(
        setCartItems({
          id: randomId,
          productId: details.id,
          amount: count,
          totalPrice: details.price * count,
          UserId: user.id,
          category: JSON.parse(lsCategory).type,
        })
      );
      Swal.fire(
        `${count} product has been added to the cart`,
        `${details.title}`,
        "success"
      );
    } else {
      Swal.fire({
        title: "Error!",
        text: "You must be logged in to add a product on cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
    }
  };

  const toFavorites = (e) => {
    console.log('toFavorites');
    console.log(details);
    if (user) {
      dispatch(addFavorite({
          id: randomId,
          product: details,
          UserId: user.id,
          category: JSON.parse(lsCategory).type,
        }));
    } else {
      dispatch(addFavorite({
          id: randomId,
          productId: details.id,
          category: JSON.parse(lsCategory).type,
        }));
    }
  };

  if (JSON.parse(lsCategory).id === 1) {
    return (
      <article className="details_component">
        <h1>ANIME DETAILS</h1>
        <div className="details_container">
          <img src={details.image} alt="" />
          <div className="detail_content">
            <div className="title_container">
              <h1>
                {details.title}
                <span> ⭐{details.rating}</span>
              </h1>
              <p>
                <span>Genres: </span>
                {details.genres}
              </p>
              <p>
                <span>Release: </span>
                {details.release}
              </p>
              <p>
                <span>Produced by: </span>
                {details.producers}
              </p>
            </div>
            <div className="details_functions">
              <div className="stock_container">
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
              </div>
              <p>
                <span>$</span>
                {(details.price * count).toString().substring(0, 6)}
              </p>
              <div className="btns_container">
                <button
                  style={{ color: isFav ? "#b82601" : "#a2a2af" }}
                  onClick={() => {
                    toFavorites();
                    isFav ? setIsFav(false) : setIsFav(true);
                  }}
                  className="bi bi-heart-fill fav"
                ></button>
                <button onClick={toCart} className="bi bi-cart-plus add">
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
            {/* <div className="btns_container">
              <button
                style={{ color: isFav ? "#b82601" : "#a2a2af" }}
                onClick={() => {
                  isFav ? setIsFav(false) : setIsFav(true);
                }}
                className="bi bi-heart-fill fav"
              ></button>
              <button onClick={toCart} className="bi bi-cart-plus add">
                {" "}
                Add to cart
              </button>
            </div> */}
          </div>
        </div>
        <div className="description_container">
          <p>
            <span>Synopsis: </span>
            <br />
            {details.synopsis ? details.synopsis : details.description}
          </p>
        </div>
        <div className="reviews_container">
          {reviews.length > 0 ? (
            <Reviews reviews={reviews}></Reviews>
          ) : (
            <h3>Not reviews yet</h3>
          )}
          <div className="review_form">
            <NewReview></NewReview>
          </div>
        </div>
        {/* <div className="chapters_container">
        <div className="chapters_titles">
          <h2>Chapters</h2>
        </div>
      </div> */}
      </article>
    );
  } else {
    return (
      <article className="details_component">
        <h1>MANGA DETAILS</h1>
        <div className="details_container">
          <img src={details.image} alt="" />
          <div className="detail_content">
            <div className="title_container">
              <h1>
                {details.title}
                <span> ⭐{details.score}</span>
              </h1>
              <p>
                <span>Genres: </span>
                {details.genres}
              </p>
              <p>
                <span>Number of chapters: </span>
                {details.chapters}
              </p>
            </div>
            <div className="details_functions">
              <div className="stock_container">
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
              </div>
              <p>
                <span>$</span>
                {(details.price * count).toString().substring(0, 5)}
              </p>
              <div className="btns_container">
                {/* <button
                  style={{ color: isFav ? "#b82601" : "#a2a2af" }}
                  onClick={() => {
                    toFavorites();
                    isFav ? setIsFav(false) : setIsFav(true);
                  }}
                  className="bi bi-heart-fill fav"
                ></button> */}
                <button onClick={toCart} className="bi bi-cart-plus add">
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="description_container">
          <p>
            <span>Synopsis: </span>
            {details.synopsis ? details.synopsis : details.description}
          </p>
        </div>
        <div className="reviews_container">
          <div className="reviews_title">
            <h1>Reviews</h1>
          </div>
          {reviews.length > 0 ? (
            <Reviews reviews={reviews}></Reviews>
          ) : (
            <h3>Not reviews yet</h3>
          )}
          <div className="review_form">
            <NewReview></NewReview>
          </div>
        </div>
        {/* <div className="chapters_container">
        <div className="chapters_titles">
          <h2>Chapters</h2>
        </div>
      </div> */}
      </article>
    );
  }
};

export default Details;
