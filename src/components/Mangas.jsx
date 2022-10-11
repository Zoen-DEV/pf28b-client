import React from "react";
import Filters from "./Filters";
import MangaList from "./MangaList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  orderByChapters,
  orderByTitle,
} from "../redux/Actions/actions";
import Loader from "./Loader";

const Mangas = () => {
  const dispatch = useDispatch();
  const mangas = useSelector((state) => state.mangas);

  function handleGenre(e) {
    console.log(e.target.value);
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
    <div className="all_products">
      <h1>MANGAS</h1>
      <article className="mangas_container">
        <Filters
          byTitle={handleTitle}
          byGenre={handleGenre}
          byChapters={handleChapters}
          product={mangas}
        />
        {mangas.length > 0 ? (
          <MangaList mangas={mangas}></MangaList>
        ) : (
          <Loader />
        )}
      </article>
    </div>
  );
};

export default Mangas;
