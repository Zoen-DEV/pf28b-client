import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMangaByTitle, getAnimeByTitle } from "../redux/Actions/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
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
        setTitle("");
        // setOrder(`Sorted: ${e.target.value}`);
        navigate("/animes");
      } else {
        dispatch(getMangaByTitle(title));
        setTitle("");
        // setOrder(`Sorted: ${e.target.value}`);
        navigate("/mangas");
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
