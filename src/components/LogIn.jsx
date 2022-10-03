import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/LogIn.scss";
import eyeOn from "../assets/eyeOn.png";
import eyeOff from "../assets/eyeOff.png";

function LogIn() {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [password, setPassword] = useState("password");
  const [clickbtn, setClickbtn] = useState("");

  function onChange(e) {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setClickbtn("click");
    setTimeout(() => {
      const data = {
        email: input.email,
        password: input.password,
      };
      /* Mock up */
      const users = [
        { email: "casa@hotmail.com", password: "almacen21" },
        { email: "piedra@gmail.com", password: "javascript0" },
      ];
      const user_email = users.find((u) => u.email === data.email && u.password !== data.password);
      const user = users.find((u) => u.email === data.email && u.password === data.password);
      /***********/
      if (user_email)
        setError((state) => ({
          email: "",
          password: "Incorrect password. Please try again.",
        }));
      else if (!user)
        setError((state) => ({
          email: "The account doesn't exist. Please try again.",
          password: " ",
        }));
      else navigate("/");
      setClickbtn("");
    }, 1500);
  }

  return (
    <div className="log-in-container">
      <h1>Welcome back to Animmerce!</h1>
      <form className="log-in" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className={error.email ? "label-error" : ""}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email || ""}
            onChange={onChange}
            className={error.email ? "input-error" : ""}
          />
          {!error.email ? <div>&nbsp;</div> : <div className="validate">{error.email}</div>}
        </div>
        <div style={{ position: "relative" }}>
          <label htmlFor="password" className={error.password ? "label-error" : ""}>
            Password:
          </label>
          <input
            type={password}
            id="password"
            name="password"
            value={input.password || ""}
            onChange={onChange}
            className={error.password ? "input-error" : ""}
          />
          <img
            src={password === "password" ? eyeOff : eyeOn}
            alt="on"
            height="25"
            onClick={() => setPassword(password === "password" ? "text" : "password")}
          />
          {!error.password ? <div>&nbsp;</div> : <div className="validate">{error.password}</div>}
        </div>
        <button type="submit" className={clickbtn}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default LogIn;
