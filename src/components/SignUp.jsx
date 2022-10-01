import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/components/signUp.scss";
import validate from "./validate";
import eyeOn from "../assets/eyeOn.png";
import eyeOff from "../assets/eyeOff.png";

function SignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [password, setPassword] = useState("password");
  const [cpassword, setCpassword] = useState("password");
  const [submit, setSubmit] = useState(true);
  const [clickbtn, setClickbtn] = useState("");

  function onChange(e) {
    if (e.target.name === "password") {
      if (e.target.value !== input.cpassword) {
        setError((state) => ({
          ...state,
          cpassword: "The passwords you entered do not match",
        }));
      } else
        setError((state) => ({
          ...state,
          cpassword: "",
        }));
    }
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setError((state) => {
      const err = {
        ...state,
        [e.target.name]: validate(e.target.name, e.target.value, input.password),
      };
      if (err.username === "" && err.password === "" && err.cpassword === "" && err.email === "" && err.date === "") {
        setSubmit(false);
      } else setSubmit(true);
      return err;
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="sign-up-container">
      <h1>Get started with Animmerce!</h1>
      <form className="sign-up" onSubmit={onSubmit}>
        <div>
          <label htmlFor="username" className={error.username ? "label-error" : ""}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={input.username || ""}
            onChange={onChange}
            className={error.username ? "input-error" : ""}
          />
          {!error.username ? <div>&nbsp;</div> : <div className="validate">{error.username}</div>}
        </div>
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
          {!error.password ? <div>&nbsp;</div> : <div className="validate">{error.password}</div>}
          <img
            src={password === "password" ? eyeOff : eyeOn}
            alt="on"
            height="25"
            onClick={() => setPassword(password === "password" ? "text" : "password")}
          />
        </div>
        <div style={{ position: "relative" }}>
          <label htmlFor="cpassword" className={error.cpassword ? "label-error" : ""}>
            Confirm password:
          </label>
          <input
            type={cpassword}
            id="cpassword"
            name="cpassword"
            value={input.cpassword || ""}
            onChange={onChange}
            className={error.cpassword ? "input-error" : ""}
          />
          {!error.cpassword ? <div>&nbsp;</div> : <div className="validate">{error.cpassword}</div>}
          <img
            src={cpassword === "password" ? eyeOff : eyeOn}
            alt="on"
            height="25"
            onClick={() => setCpassword(cpassword === "password" ? "text" : "password")}
          />
        </div>
        <div>
          <label htmlFor="date">Date of birth:</label>
          <input type="date" id="date" name="date" value={input.date || ""} onChange={onChange} />
        </div>
        <button type="submit" disabled={submit} className={clickbtn} onClick={() => setClickbtn("click")}>
          Sign Up
        </button>
        <div className="terms">By continuing, you accept our standard terms and conditions and our privacy policy.</div>
      </form>
    </div>
  );
}

export default SignUp;
