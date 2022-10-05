import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LOGOdemo from "../assets/LOGOdemo.png";
import SearchBar from "./SearchBar";
import { setCategory } from "../redux/Actions/actions";
import {
  getAnimes,
  getAnimesGenres,
  getTopAnimes,
} from "../redux/Actions/actions";
import { getMangas, getGenres, topMangas } from "../redux/Actions/actions";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const category = useSelector((state) => state.category);
  const [animeClicked, setAnimeCLicked] = useState(true);
  const [mangaClicked, setMangaCLicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const [toggleStyle, setToggleStyle] = useState({
  //   color: "#b82601",
  // });

  useEffect(() => {
    if (category.id === 1) {
      setAnimeCLicked(true);
      setMangaCLicked(false);
    } else {
      setAnimeCLicked(false);
      setMangaCLicked(true);
    }
    dispatch(topMangas());
    dispatch(getTopAnimes());
    dispatch(getAnimes());
    dispatch(getMangas());
    dispatch(getGenres());
    dispatch(getAnimesGenres());
  }, [dispatch, category.id]);

  const changeCategory = (e) => {
    switch (e.target.name) {
      case "anime":
        dispatch(setCategory({ id: 1, type: e.target.name }));
        break;
      case "manga":
        dispatch(setCategory({ id: 2, type: e.target.name }));
        break;
      default:
        break;
    }
    navigate("/home");
  };

  // const changeTheme = (e) => {
  //   if (toggleBtn) {
  //     setToggleBtn(false);
  //     setToggleStyle({
  //       color: "#e7dfdd",
  //     });
  //   } else {
  //     setToggleBtn(true);
  //     setToggleStyle({
  //       color: "#b82601",
  //     });
  //   }
  // };
  return (
    <nav className="navbar">
      <div className="links-container">
        <Link to="/home">
          <img src={LOGOdemo} alt="animercce" />
        </Link>
        <ul>
          <li>
            <button
              onClick={changeCategory}
              name="anime"
              style={
                animeClicked
                  ? { color: "#7688E5", cursor: "default" }
                  : { color: "#fdfdfd", cursor: "pointer" }
              }
              className="link"
            >
              ANIME
            </button>
          </li>
          <li>
            <p className="link">/</p>
          </li>
          <li>
            <button
              onClick={changeCategory}
              name="manga"
              style={
                mangaClicked
                  ? { color: "#7688E5", cursor: "default" }
                  : { color: "#fdfdfd", cursor: "pointer" }
              }
              className="link"
            >
              MANGAS
            </button>
          </li>
        </ul>
      </div>
      <div className="btns-container">
        {/* <button className="themeBtn" onClick={changeTheme} style={toggleStyle}>
          {toggleBtn ? (
            <i className="bi bi-brightness-high"></i>
          ) : (
            <i className="bi bi-moon"></i>
          )}
        </button> */}
        <SearchBar />
        {/* <Link className="link" to="cart">
          <i className="bi bi-cart"></i>
        </Link> */}
        <button className="profileBtn">
          <i className="bi bi-person-fill"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
