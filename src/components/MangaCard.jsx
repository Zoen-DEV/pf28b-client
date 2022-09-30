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
}) => {
  return (
    <Link to={`/details/${id}`}>
      <h3>Title: {title}</h3>
      <img src={image} alt="mangaPic" />
      <h5>Score: {score}</h5>
      <h5>Popularity: {popularity}</h5>
      <h5>Synopsis: {synopsis}</h5>
      <h5>Genre: {genres}</h5>
    </Link>
  );
};

export default MangaCard;
