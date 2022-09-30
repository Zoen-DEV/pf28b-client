import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGOdemo from "../assets/LOGOdemo.png";

const Nav = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const [toggleStyle, setToggleStyle] = useState({
    color: "#b82601",
  });

  const changeTheme = (e) => {
    if (toggleBtn) {
      setToggleBtn(false);
      setToggleStyle({
        color: "#e7dfdd",
      });
    } else {
      setToggleBtn(true);
      setToggleStyle({
        color: "#b82601",
      });
    }
  };
  return (
    <nav className="navbar">
      <div className="links-container">
        <Link to="/">
          <img src={LOGOdemo} alt="animercce" />
        </Link>
        <ul>
          {/* <li>
            <Link className="link" to="/animes">
              ANIME
            </Link>
          </li> */}
          {/* <li>
            <p className="link">/</p>
          </li> */}
          <li>
            <Link className="link" to="/mangas">
              MANGAS
            </Link>
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
