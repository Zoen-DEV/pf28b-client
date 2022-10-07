import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteDetails,
  getAnimesDetails,
  getDetails,
  setCartItems,
} from "../redux/Actions/actions";

const Details = () => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const id = useParams().id;
  const category = useSelector((state) => state.category);

  useEffect(() => {
    if(category.id===1){
      dispatch(getAnimesDetails(id));
    } else {
      dispatch(getDetails(id));
    }
    return () => {
      dispatch(deleteDetails());
    };
  }, [dispatch, id, category]);

  const toCart = (e) => {
    dispatch(setCartItems(details));
  };
  if (category.id === 1) {
    return (
      <article className="details_component">
        <h1>ANIME DETAILS</h1>
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
                <span>Synopsis: </span>
                {details.synopsis ? details.synopsis : details.description}
              </p>
              <p>
                <span>Number of chapters: </span>
                {details.chapters}
              </p>
              <p>
                <span>Price: </span>${details.price}
              </p>
            </div>
            <div className="btns_container">
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
            </div>
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
                <span>Synopsis: </span>
                {details.synopsis ? details.synopsis : details.description}
              </p>
              <p>
                <span>Number of chapters: </span>
                {details.chapters}
              </p>
              <p>
                <span>Price: </span>${details.price}
              </p>
            </div>
            <div className="btns_container">
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
            </div>
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
