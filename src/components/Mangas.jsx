import React, { useState } from "react";
import Filters from "./Filters";
import MangaList from "./MangaList";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenre,
  orderByChapters,
  orderByTitle,
} from "../redux/Actions/actions";

const Mangas = () => {
  const dispatch = useDispatch();
  const mangas = useSelector((state) => state.mangas);
  const [allMangas, setAllMangas] = useState(mangas);

  function handleGenre(e) {
    dispatch(filterByGenre(e.target.value));
    setAllMangas(mangas);
  }

  function handleChapters(e) {
    e.preventDefault();
    dispatch(orderByChapters(e.target.value));
    setAllMangas(mangas);
  }

  function handleTitle(e) {
    e.preventDefault();
    dispatch(orderByTitle(e.target.value));
    setAllMangas(mangas);
  }
  console.log(allMangas);
  return (
    <article className="mangas_container">
      <Filters
        byTitle={handleTitle}
        byGenre={handleGenre}
        byChapters={handleChapters}
      />
      {mangas.length > 0 ? (
        <MangaList mangas={mangas}></MangaList>
      ) : (
        <p>loading</p>
      )}
    </article>
  );
};

export default Mangas;
