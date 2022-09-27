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
      <Link to="/">
        <img src={LOGOdemo} alt="animercce" />
      </Link>
      <ul>
        <li>
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="link" to="/series">
            SERIES
          </Link>
        </li>
        <li>
          <Link className="link" to="/movies">
            MOVIES
          </Link>
        </li>
      </ul>
      <div>
        <button className="themeBtn" onClick={changeTheme} style={toggleStyle}>
          {toggleBtn ? (
            <i class="bi bi-brightness-high"></i>
          ) : (
            <i class="bi bi-moon"></i>
          )}
        </button>
        <button className="profileBtn">
          <i className="bi bi-person-fill"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
