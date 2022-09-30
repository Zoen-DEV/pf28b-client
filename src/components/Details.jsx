import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteDetails, getDetails } from "../redux/Actions/actions";

const Details = () => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const { title, score, image, chapters, synopsis, genres } = useSelector(
    (state) => state.details
  );
  const id = useParams().id;
  const [allChapters, setAllChapters] = useState(
    Array.from(Array(chapters).keys())
  );

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(deleteDetails());
    };
  }, [dispatch]);

  return (
    <article className="details_component">
      <div className="details_container">
        <img src={image} alt="" />
        <div className="detail_content">
          <div className="title_container">
            <h1>
              {title}
              <span> ⭐{score}</span>
            </h1>
            <p>
              <span>Genres: </span>
              {genres}
            </p>
            <p>
              <span>Synopsis: </span>
              {synopsis}
            </p>
            <p>
              <span>Number of chapters: </span>
              {chapters}
            </p>
            <p>
              <span>Price: </span>${Math.floor(Math.random() * 20)}.
              {Math.floor(Math.random() * 10)}0
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
            <button className="bi bi-cart-plus add"> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="chapters_container">
        <div className="chapters_titles">
          <h2>Chapters</h2>
        </div>
        <ul>
          {allChapters?.map((item) => {
            return <li>Chapter {item+1}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Details;
