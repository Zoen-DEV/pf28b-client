import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const top25Mangas = useSelector((state) => state.topMangas);
  const top25Animes = useSelector((state) => state.topAnimes);
  // top MANGAS
  const fourMangas = top25Mangas.slice(0, 4);
  const [showMoreTop, setShowMoreTop] = useState(8);
  const tenMangas = top25Mangas.slice(5, showMoreTop);
  const [showMoreRec, setShowMoreRec] = useState(18);
  const recomended = top25Mangas.slice(15, showMoreRec);
  // top ANIMES
  const fourAnimes = top25Animes.slice(0, 4);
  const [showMoreTopAnimes, setShowMoreTopAnimes] = useState(8);
  const tenAnimes = top25Animes.slice(5, showMoreTopAnimes);
  const [showMoreRecAnimes, setShowMoreRecAnimes] = useState(18);
  const recomendedAnimes = top25Animes.slice(15, showMoreRecAnimes);

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
  const showMore = (e) => {
    switch (e.target.name) {
      case "top":
        if (showMoreTop === 8) {
          setShowMoreTop(14);
        } else {
          setShowMoreTop(8);
          window.scroll(0, 1000);
        }
        break;
      case "recommended":
        if (showMoreRec === 18) {
          setShowMoreRec(24);
        } else {
          setShowMoreRec(18);
        }
        break;
      default:
        break;
    }
  };
  const showMoreAnimes = (e) => {
    switch (e.target.name) {
      case "top":
        if (showMoreTopAnimes === 8) {
          setShowMoreTopAnimes(14);
        } else {
          setShowMoreTopAnimes(8);
          window.scroll(0, 1000);
        }
        break;
      case "recommended":
        if (showMoreRecAnimes === 18) {
          setShowMoreRecAnimes(24);
        } else {
          setShowMoreRecAnimes(18);
        }
        break;
      default:
        break;
    }
  };
  if (category.length === 0) {
    return <p>loading</p>;
  } else {
    if (category.id === 1) {
      return (
        <div className="home">
          {top25Animes.length > 0 ? (
            <div className="slides-container">
              <button
                className="bi bi-arrow-down-left-square-fill btn-left"
                onClick={changeSlide}
                name="left"
              ></button>
              <div className="slide-content">
                <Link
                  className="link"
                  to={`/details/${fourAnimes[slideIndex].id}`}
                >
                  <img src={fourAnimes[slideIndex].image} alt="" />
                  <div className="manga_info">
                    <h1>{fourAnimes[slideIndex].title}</h1>
                    <p>{fourAnimes[slideIndex].description.substr(0, 300)}...</p>
                  </div>
                </Link>
                <ul>
                  {fourAnimes?.map((item, index) => {
                    let color = {
                      background: "#fdfdfd",
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
              <button
                className="bi bi-arrow-up-right-square-fill btn-right"
                onClick={changeSlide}
                name="right"
              ></button>
            </div>
          ) : (
            <p>loading</p>
          )}
          <div className="tops-container">
            <div className="tops-title">
              <h2>Top animes</h2>
            </div>
            <div className="container">
              <ul className="ul_slide">
                {tenAnimes?.map((item, index) => {
                  return (
                    <Link
                      className="link"
                      to={`/details/${item.id}`}
                      key={index}
                    >
                      <img src={item.image} alt="" />
                    </Link>
                  );
                })}
              </ul>
            </div>
            <button onClick={showMoreAnimes} className="show" name="top">
              {showMoreTopAnimes === 8 ? "Show more" : "Hide animes"}
            </button>
          </div>
          <div className="tops-container">
            <div className="tops-title">
              <h2>Recommended</h2>
            </div>
            <div className="container">
              <ul className="ul_slide">
                {recomendedAnimes?.map((item, index) => {
                  return (
                    <Link
                      className="link"
                      to={`/details/${item.id}`}
                      key={index}
                    >
                      <img src={item.image} alt="" />
                    </Link>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={showMoreAnimes}
              className="show"
              name="recommended"
            >
              {showMoreRecAnimes === 18 ? "Show more" : "Hide animes"}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="home">
          {top25Mangas.length > 0 ? (
            <div className="slides-container">
              <button
                className="bi bi-arrow-down-left-square-fill btn-left"
                onClick={changeSlide}
                name="left"
              ></button>
              <div className="slide-content">
                <Link
                  className="link"
                  to={`/details/${fourMangas[slideIndex].id}`}
                >
                  <img src={fourMangas[slideIndex].image} alt="" />
                  <div className="manga_info">
                    <h1>{fourMangas[slideIndex].title}</h1>
                    <p>{fourMangas[slideIndex].synopsis.substr(0, 300)}...</p>
                  </div>
                </Link>
                <ul>
                  {fourMangas?.map((item, index) => {
                    let color = {
                      background: "#fdfdfd",
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
              <button
                className="bi bi-arrow-up-right-square-fill btn-right"
                onClick={changeSlide}
                name="right"
              ></button>
            </div>
          ) : (
            <p>loading</p>
          )}
          <div className="tops-container">
            <div className="tops-title">
              <h2>Top mangas</h2>
            </div>
            <div className="container">
              <ul className="ul_slide">
                {tenMangas?.map((item, index) => {
                  return (
                    <Link
                      className="link"
                      to={`/details/${item.id}`}
                      key={index}
                    >
                      <img src={item.image} alt="" />
                    </Link>
                  );
                })}
              </ul>
            </div>
            <button onClick={showMore} className="show" name="top">
              {showMoreTop === 8 ? "Show more" : "Hide mangas"}
            </button>
          </div>
          <div className="tops-container">
            <div className="tops-title">
              <h2>Recommended</h2>
            </div>
            <div className="container">
              <ul className="ul_slide">
                {recomended?.map((item, index) => {
                  return (
                    <Link
                      className="link"
                      to={`/details/${item.id}`}
                      key={index}
                    >
                      <img src={item.image} alt="" />
                    </Link>
                  );
                })}
              </ul>
            </div>
            <button onClick={showMore} className="show" name="recommended">
              {showMoreRec === 18 ? "Show more" : "Hide mangas"}
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Home;
