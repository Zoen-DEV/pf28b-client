import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import MangaList from "./MangaList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  getMangas,
  orderByChapters,
  orderByTitle,
} from "../redux/Actions/actions";

const Mangas = () => {
  const dispatch = useDispatch();
  const mangas = useSelector((state) => state.mangas);

  function handleGenre(e) {
    dispatch(filterByGenre(e.target.value));
  }

  function handleChapters(e) {
    e.preventDefault();
    dispatch(orderByChapters(e.target.value));
  }

  function handleTitle(e) {
    e.preventDefault();
    dispatch(orderByTitle(e.target.value));
  }

  return (
    <div>
      <div>
        <Filters
          byTitle={handleTitle}
          byGenre={handleGenre}
          byChapters={handleChapters}
        />
      </div>
      {mangas.length > 0 ? (
        <MangaList mangas={mangas}></MangaList>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Mangas;
