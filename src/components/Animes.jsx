import React from "react";
import Filters from "./Filters";
import AnimeList from "./AnimeList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  orderByChapters,
  orderByTitle,
} from "../redux/Actions/actions";

const Animes = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);

  function handleGenre(e) {
    dispatch(filterByGenre(e.target.value));
    // setAllMangas(mangas);
  }

  function handleChapters(e) {
    e.preventDefault();
    dispatch(orderByChapters(e.target.value));
    // setAllMangas(mangas);
  }

  function handleTitle(e) {
    e.preventDefault();
    dispatch(orderByTitle(e.target.value));
    // setAllMangas(mangas);
  }
  
  return (
    <article className="mangas_container">
      <Filters
        byTitle={handleTitle}
        byGenre={handleGenre}
        byChapters={handleChapters}
      />
      {animes.length > 0 ? (
        <AnimeList animes={animes}></AnimeList>
      ) : (
        <p>loading</p>
      )}
    </article>
  );
};

export default Animes;
