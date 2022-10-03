import React from "react";
import { Link } from "react-router-dom";

const MangaCard = ({
  title,
  image,
  score,
  popularity,
  synopsis,
  genres,
  id,
  price
}) => {
  return (
    <Link className="manga_card_container" to={`/details/${id}`}>
      <img src={image} alt="mangaPic" />
      <div className="card_info">
        <h3>{title}</h3>
        <p>
          <span>Score: </span>
          {score}
        </p>
        <p>
          <span>Popularity: </span>
          {popularity}
        </p>
        <p>
          <span>Synopsis: </span>
          {!synopsis ? 'No synopsis available.' : synopsis.substr(0, 300)}
        </p>
        <p>
          <span>Genre: </span>
          {genres}
        </p>
        <p className="price">${price}</p>
      </div>
    </Link>
  );
};

export default MangaCard;
