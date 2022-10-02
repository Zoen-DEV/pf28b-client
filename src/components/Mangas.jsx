import React from "react";
import Filters from "./Filters";
import MangaList from "./MangaList";
import { useDispatch } from "react-redux";
import { filterByGenre, orderByChapters, orderByTitle } from "../redux/Actions/actions";

const Mangas = () => {

  const dispatch = useDispatch();

  function handleGenre(e){
    dispatch(filterByGenre(e.target.value))
  }

  function handleChapters(e){
    e.preventDefault()
    dispatch(orderByChapters(e.target.value))
  }

  function handleTitle(e){
    e.preventDefault()
    dispatch(orderByTitle(e.target.value))
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
      <MangaList />
    </div>
  );
};

export default Mangas;
