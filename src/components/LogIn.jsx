import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import eyeOn from "../assets/eyeOn.png";
import eyeOff from "../assets/eyeOff.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, validateUser } from "../redux/Actions/actions";

function LogIn() {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [password, setPassword] = useState("password");
  const [clickbtn, setClickbtn] = useState("");
  const dispatch = useDispatch();
  const user1 = useSelector((state) => state.user);

  function onChange(e) {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setClickbtn("click");
    setTimeout(async () => {
      const data = {
        email: input.email,
        password: input.password,
      };
      dispatch(validateUser(data)).then(() => {
        // localStorage.removeItem("token");
        if (localStorage.getItem("token")) {
          setTimeout(() => navigate("/home"), 1000);
        }
        setClickbtn("");
      });
      // const token = await user1.token;
      // console.log(await token);
      // localStorage.setItem("token", await token);
      // console.log(user1.token);
      // if (user1.token) {
      //   localStorage.setItem("token", user1.token);
      // }

      // const users = (await axios.get("http://localhost:3000/login/users")).data;
      // const user_email = users.find((u) => u.email === data.email && u.password !== data.password);
      // const user = users.find((u) => u.email === data.email && u.password === data.password);

      // if (user_email)
      //   setError((state) => ({
      //     email: "",
      //     password: "Incorrect password. Please try again.",
      //   }));
      // else if (!user)
      //   setError((state) => ({
      //     email: "The account doesn't exist. Please try again.",
      //     password: " ",
      //   }));
      // else {
      //   // disptach(getUsers(user.email));
      //   navigate("/");
      // }
    }, 1000);
  }

  return (
    <div className="form_container">
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
          <h2>
            Not registered? <Link to="/signup">Create an Account</Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
