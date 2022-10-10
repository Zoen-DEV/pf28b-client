import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ title, image, release, rating, description, genres, price, id }) => {
    return(
        <Link className="manga_card_container" to={`/details/${id}`}>
        <img src={image} alt="mangaPic" />
        <div className="card_info">
          <h3>{title}</h3>
          <p>
            <span>Rating: </span>
            {rating}
          </p>
          <p>
            <span>Release: </span>
            {release}
          </p>
          <p>
            <span>Synopsis: </span>
            {!description ? "No synopsis available." : description.substr(0, 300)}
          </p>
          <p>
            <span>Genre: </span>
            {genres}
          </p>
          <p className="price">
            ${!price ? "19.99" : price.toString().substr(0, 5)}
          </p>
        </div>
      </Link>
    )
}

export default AnimeCard;