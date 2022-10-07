import React from "react";
import Filters from "./Filters";
import AnimeList from "./AnimeList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAnimeByGenre,
  orderAnimeByChapters,
  orderAnimeByTitle,
} from "../redux/Actions/actions";
import Loader from "./Loader";

const Animes = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);

  function handleAnimeGenre(e) {
    dispatch(filterAnimeByGenre(e.target.value));
    // setAllMangas(mangas);
  }

  function handleAnimeChapters(e) {
    e.preventDefault();
    dispatch(orderAnimeByChapters(e.target.value));
    // setAllMangas(mangas);
  }

  function handleAnimeTitle(e) {
    e.preventDefault();
    dispatch(orderAnimeByTitle(e.target.value));
    // setAllMangas(mangas);
  }

  return (
    <article className="mangas_container">
      <Filters
        byTitle={handleAnimeTitle}
        byGenre={handleAnimeGenre}
        byChapters={handleAnimeChapters}
      />
      {animes.length > 0 ? <AnimeList animes={animes}></AnimeList> : <Loader />}
    </article>
  );
};

export default Animes;