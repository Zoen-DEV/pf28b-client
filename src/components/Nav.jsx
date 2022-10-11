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
  const cart = useSelector((state) => state.cart);
  const [animeClicked, setAnimeCLicked] = useState(false);
  const [mangaClicked, setMangaCLicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const [toggleStyle, setToggleStyle] = useState({
  //   color: "#b82601",
  // });

  useEffect(() => {
    // localStorage.removeItem('category')
    let localStorageCategory = localStorage.getItem("category");
    if (localStorageCategory) {
      dispatch(setCategory(JSON.parse(localStorageCategory)));
    }
    if (category.id === 1) {
      setAnimeCLicked(true);
      setMangaCLicked(false);
    } else if (category.id === 2) {
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
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 1, type: e.target.name })
        );
        let categoryA = localStorage.getItem("category");
        dispatch(setCategory(JSON.parse(categoryA)));
        break;
      case "manga":
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 2, type: e.target.name })
        );
        let categoryM = localStorage.getItem("category");
        dispatch(setCategory(JSON.parse(categoryM)));
        break;
      default:
        break;
    }
    // navigate("/home");
    navigate(`/${e.target.name}s`);
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
                  ? { color: "#fdfdfd", cursor: "default" }
                  : { color: "#7688E5", cursor: "pointer" }
              }
              className="link"
            >
              ANIME
            </button>
            <div
              style={mangaClicked ? { display: "none" } : { display: "block" }}
              className="border_bottom"
            ></div>
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
                  ? { color: "#fdfdfd", cursor: "default" }
                  : { color: "#7688E5", cursor: "pointer" }
              }
              className="link"
            >
              MANGAS
            </button>
            <div
              style={mangaClicked ? { display: "block" } : { display: "none" }}
              className="border_bottom"
            ></div>
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
        <Link className="link2" to={`/${category.type}s`}>
          List of {category.type}s
        </Link>
        <div className="cart_icon">
          {cart.length > 0 ? (
            <div className="cart_count">
              {cart.length > 9 ? "9+" : cart.length}
            </div>
          ) : (
            <div></div>
          )}
          <Link className="cart_link" to="/cart">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
        <button className="profileBtn">
          <i className="bi bi-person-fill"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
