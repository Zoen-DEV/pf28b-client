import React, { useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

const Home = () => {
  const [slides, setSlides] = useState([1, 2, 3, 4]);
  const [glide, setGlide] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (e) => {
    switch (e.target.name) {
      case "left":
        if (slideIndex === 0) {
          setSlideIndex(slides.length - 1);
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
        <button className="btn-left" onClick={changeSlide} name="left">
          <div></div>
        </button>
        <div className="slide-content">
          <h1>aca va el title {slides[slideIndex]}</h1>
          <p>mas info y de fondo algun banner</p>
          <ul>
            {slides?.map((item, index) => {
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
        <button className="btn-right" onClick={changeSlide} name="right">
          <div></div>
        </button>
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
