import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getMangaByTitle, getAnimeByTitle } from "../redux/Actions/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const animes = useSelector((state) => state.allAnimes);
  const mangas = useSelector((state) => state.allMangas);
  const category = useSelector((state) => state.category);
  const [title, setTitle] = useState("");
  //   const [order, setOrder] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title !== "") {
      if (category.id === 1) {
        dispatch(getAnimeByTitle(title));
        const animeByTitle = animes.filter((item) =>
          item.toLowerCase().includes(title.toLowerCase())
        );
        if (animeByTitle.length > 0) {
          // setOrder(`Sorted: ${e.target.value}`);
          navigate("/animes");
        } else {
          Swal.fire(`This Anime doesn't exist`);
        }
        setTitle("");
      } else {
        dispatch(getMangaByTitle(title));
        const mangaByTitle = mangas.filter((item) =>
          item.toLowerCase().includes(title.toLowerCase())
        );
        if (mangaByTitle.length > 0) {
          // setOrder(`Sorted: ${e.target.value}`);
          navigate("/mangas");
        } else {
          Swal.fire(`This Manga doesn't exist`);
        }
        setTitle("");
      }
    } else {
      if (category.id === 1) {
        alert("Please enter a anime title");
      } else {
        alert("Please enter a manga title");
      }
    }
  }

  return (
    <form className="searchbar_container">
      <input
        className="inputsearch"
        type="text"
        value={title}
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
      <button
        className="btnsearch"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
