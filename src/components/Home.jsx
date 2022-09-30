import React, { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { topMangas } from "../redux/Actions/actions";

const Home = () => {
  const [glide, setGlide] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const fourMangas = useSelector((state) => state.topFourMangas);
  useEffect(() => {
    dispatch(topMangas());
  }, [dispatch]);

  const changeSlide = (e) => {
    switch (e.target.name) {
      case "left":
        if (slideIndex === 0) {
          setSlideIndex(fourMangas.length - 1);
        } else {
          setSlideIndex(slideIndex - 1);
        }
        break;
      case "right":
        if (slideIndex === 3) {
          setSlideIndex(0);
        } else {
          setSlideIndex(slideIndex + 1);
        }
        break;
      case "dot":
        setSlideIndex(Number(e.target.value));
        break;
      default:
        break;
    }
  };
  return (
    <div className="home">
      <div className="slides-container">
        <button
          className="bi bi-arrow-down-left-square-fill btn-left"
          onClick={changeSlide}
          name="left"
        ></button>
        {fourMangas.length > 0 ? (
          <div className="slide-content">
            <h1>{fourMangas[slideIndex].title}</h1>
            <p>{fourMangas[slideIndex].genres}</p>
            <p>{fourMangas[slideIndex].synopsis.substr(0, 300)}</p>
            <ul>
              {fourMangas?.map((item, index) => {
                let color = {
                  background: "#7688E5",
                };
                if (slideIndex === index) {
                  color = {
                    background: "#c83611",
                  };
                }
                return (
                  <li key={index}>
                    <button
                      style={color}
                      name="dot"
                      value={index}
                      onClick={changeSlide}
                    ></button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>loading</p>
        )}
        <button
          className="bi bi-arrow-up-right-square-fill btn-right"
          onClick={changeSlide}
          name="right"
        ></button>
      </div>
      <div className="tops-container">
        <div className="tops-title">
          <h2>Tops animes</h2>
        </div>
        <div className="container">
          <Glider
            hasArrows
            slidesToShow={4}
            slidesToScroll={2}
            duration={2}
            draggable
            dragVelocity={1}
          >
            {glide?.map((item, index) => {
              return (
                <li key={index}>
                  <div className="slide">{item}</div>
                </li>
              );
            })}
          </Glider>
        </div>
      </div>
      <div className="tops-container">
        <div className="tops-title">
          <h2>Recommended</h2>
        </div>
        <div className="container">
          <Glider
            hasArrows
            slidesToShow={3}
            slidesToScroll={3}
            duration={2}
            draggable
            dragVelocity={1}
          >
            {glide?.map((item, index) => {
              return (
                <li key={index}>
                  <div className="slide">{item}</div>
                </li>
              );
            })}
          </Glider>
        </div>
      </div>
      <div className="tops-container">
        <div className="tops-title">
          <h2>Favorites</h2>
        </div>
        <div className="container">
          <Glider
            hasArrows
            slidesToShow={3}
            slidesToScroll={3}
            duration={2}
            draggable
            dragVelocity={1}
          >
            {glide?.map((item, index) => {
              return (
                <li key={index}>
                  <div className="slide">{item}</div>
                </li>
              );
            })}
          </Glider>
        </div>
      </div>
    </div>
  );
};

export default Home;
