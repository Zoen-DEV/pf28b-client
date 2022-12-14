import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../redux/Actions/actions";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectCategory = (e) => {
    switch (e.target.name) {
      case "anime":
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 1, type: e.target.name })
        );
        let categoryA = localStorage.getItem('category')
        dispatch(setCategory(JSON.parse(categoryA)));
        break;
      case "manga":
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 2, type: e.target.name })
        );
        let categoryM = localStorage.getItem('category')
        dispatch(setCategory(JSON.parse(categoryM)));
        break;
      default:
        break;
    }
    navigate("/home");
  };

  return (
    <article className="landing_container">
      <div className="welcome_container">
        <h1>
          Welcome to{" "}
          <span>
            ANIME<span>RCCE</span>
          </span>
        </h1>
        <p>
          Here you can find a wide catalog of manga and anime at the best price
        </p>
      </div>
      <div className="links_container">
        <button className="manga_btn" onClick={selectCategory} name="manga">
          MANGA
        </button>
        <button className="anime_btn" onClick={selectCategory} name="anime">
          ANIME
        </button>
      </div>
    </article>
  );
};

export default Landing;
