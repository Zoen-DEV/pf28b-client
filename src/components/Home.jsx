import React, { useEffect, useRef, useState } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTopMangas, topMangas } from "../redux/Actions/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const top25Mangas = useSelector((state) => state.topFourMangas);
  const fourMangas = top25Mangas.slice(0, 4);
  const tenMangas = top25Mangas.slice(5, 15);
  const recomended = top25Mangas.slice(15, 25);
  useEffect(() => {
    dispatch(topMangas());
    // return (()=>{
    //   dispatch(deleteTopMangas())
    // })
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
      {top25Mangas.length > 0 ? (
        <div className="slides-container">
          <button className="bi bi-arrow-down-left-square-fill btn-left" onClick={changeSlide} name="left"></button>
          <div className="slide-content">
            <Link className="link" to={`/details/${fourMangas[slideIndex].id}`}>
              <img src={fourMangas[slideIndex].image} alt="" />
              <div className="manga_info">
                <h1>{fourMangas[slideIndex].title}</h1>
                <p>{fourMangas[slideIndex].synopsis.substr(0, 300)}...</p>
              </div>
            </Link>
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
                    <button style={color} name="dot" value={index} onClick={changeSlide}></button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="bi bi-arrow-up-right-square-fill btn-right" onClick={changeSlide} name="right"></button>
        </div>
      ) : (
        <p>loading</p>
      )}
      <div className="tops-container">
        <div className="tops-title">
          <h2>Top mangas</h2>
        </div>
        <div className="container">
          <Glider
            exactWidth
            slidesToShow={3}
            slidesToScroll={3}
            duration={2}
            draggable
            dragVelocity={1}
            resizeLock
            className="ul_slide"
          >
            {tenMangas?.map((item, index) => {
              return (
                <Link className="link" to={`/details/${item.id}`} key={index}>
                  <img src={item.image} alt="" />
                </Link>
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
            exactWidth
            resizeLock
            slidesToShow={3}
            slidesToScroll={3}
            duration={2}
            draggable
            dragVelocity={1}
            className="ul_slide"
          >
            {recomended?.map((item, index) => {
              return (
                <Link className="link" to={`/details/${item.id}`} key={index}>
                  <img src={item.image} alt="" />
                </Link>
              );
            })}
          </Glider>
        </div>
      </div>
      {/* <div className="tops-container">
        <div className="tops-title">
          <h2>Favorites</h2>
        </div>
        {/* <div className="container">
          <Glider hasArrows slidesToShow={3} slidesToScroll={3} duration={2} draggable dragVelocity={1}>
            {glide?.map((item, index) => {
              return (
                <li key={index}>
                  <div className="slide">{item}</div>
                </li>
              );
            })}
          </Glider>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
