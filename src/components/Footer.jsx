import React from "react";
import { Link } from "react-router-dom";
import LOGOdemo from "../assets/LOGOdemo.png";

const Footer = () => {
  return (
    <footer>
      <Link className="link" to="/about">
        ABOUT
      </Link>
      <Link to="/">
        <img src={LOGOdemo} alt="animercce" />
      </Link>
      <Link className="link" to="/contactus">
        CONTACT US
      </Link>
    </footer>
  );
};

export default Footer;
