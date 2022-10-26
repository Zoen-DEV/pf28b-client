import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LOGOdemo from "../assets/LOGOdemo.png";
import SearchBar from "./SearchBar";
import { setCategory } from "../redux/Actions/actions";
import { logOut } from "../redux/Actions/actions";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const userSaved = localStorage.getItem("user");
  const user = JSON.parse(userSaved);
  const category = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  // const isLogin = useSelector((state) => state.isLogin);
  const [animeClicked, setAnimeCLicked] = useState(false);
  const [mangaClicked, setMangaCLicked] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lsCart = localStorage.getItem("cart");
  let { page } = useParams()
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const [toggleStyle, setToggleStyle] = useState({
  //   color: "#b82601",
  // });

  useEffect(() => {
    // if (lsCart) {
    //   dispatch(updateCart(JSON.parse(lsCart)));
    // }
    setShowSlide(false)
    let localStorageCategory = localStorage.getItem("category");
    if (localStorageCategory) {
      dispatch(setCategory(JSON.parse(localStorageCategory)));
    }
    if (category.id === 1) {
      setAnimeCLicked(true);
      setMangaCLicked(false);
    } else if (category.id === 2) {
      setAnimeCLicked(false);
      setMangaCLicked(true);
    }
  }, [dispatch, category.id, lsCart, page]);

  const changeCategory = (e) => {
    switch (e.target.name) {
      case "anime":
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 1, type: e.target.name })
        );
        let categoryA = localStorage.getItem("category");
        dispatch(setCategory(JSON.parse(categoryA)));
        break;
      case "manga":
        localStorage.removeItem("category");
        localStorage.setItem(
          "category",
          JSON.stringify({ id: 2, type: e.target.name })
        );
        let categoryM = localStorage.getItem("category");
        dispatch(setCategory(JSON.parse(categoryM)));
        break;
      default:
        break;
    }
    // navigate("/home");
    navigate(`/${e.target.name}s`);
  };

  // const changeTheme = (e) => {
  //   if (toggleBtn) {
  //     setToggleBtn(false);
  //     setToggleStyle({
  //       color: "#e7dfdd",
  //     });
  //   } else {
  //     setToggleBtn(true);
  //     setToggleStyle({
  //       color: "#b82601",
  //     });
  //   }
  // };
  return (
    <nav className="navbar">
      <div className="links-container">
        <Link to="/home">
          <img src={LOGOdemo} alt="animercce" />
        </Link>
        <ul>
          <li>
            <button
              onClick={changeCategory}
              name="anime"
              style={animeClicked ? { color: "#fdfdfd" } : { color: "#7688E5" }}
              className="link"
            >
              ANIME
            </button>
            <div
              style={mangaClicked ? { display: "none" } : { display: "block" }}
              className="border_bottom"
            ></div>
          </li>
          <li>
            <button
              onClick={changeCategory}
              name="manga"
              style={mangaClicked ? { color: "#fdfdfd" } : { color: "#7688E5" }}
              className="link"
            >
              MANGAS
            </button>
            <div
              style={mangaClicked ? { display: "block" } : { display: "none" }}
              className="border_bottom"
            ></div>
          </li>
        </ul>
      </div>
      <div className="btns-container">
        {/* <button className="themeBtn" onClick={changeTheme} style={toggleStyle}>
          {toggleBtn ? (
            <i className="bi bi-brightness-high"></i>
          ) : (
            <i className="bi bi-moon"></i>
          )}
        </button> */}

        {/* ***********Link to admin page******** */}
        {/* {user ? (
          user.isAdmin ? (
            <Link to="admin">
              <button className="profileBtn">
                <ion-icon name="lock-open-outline"></ion-icon>
              </button>
            </Link>
          ) : null
        ) : null} */}

        <SearchBar />
        <Link className="link2" to={`/${category.type}s`}>
          List of {category.type}s
        </Link>
        <div className="cart_icon">
          {cart.length > 0 ? (
            <div className="cart_count">
              {cart.length > 9 ? "9+" : cart.length}
            </div>
          ) : (
            <div></div>
          )}
          <Link className="cart_link" to="/cart">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
        <button
          onClick={() => {
            if (showSlide) {
              setShowSlide(false);
            } else {
              setShowSlide(true);
            }
          }}
          className="profileBtn"
        >
          <i className="bi bi-person-fill"></i>
        </button>
        {/* {!isLogin 
         {user ? (
           user.google ? (
            <Link to={"login2"}> 
               <button className="profileBtn">
                 <i className="bi bi-person-fill"></i>
               </button> 
               <input type="image" src={user.image} alt={user.username} width='50px'/>

         *******comprobation to implemeny image of google profile********  */}
        {!user ? (
          <div
            style={showSlide ? { display: "flex" } : { display: "none" }}
            className="links_slide"
          >
            <Link className="link" to="/login">
              LOGIN
            </Link>
            <Link className="link" to="/signup">
              SIGNUP
            </Link>
            <i
              onClick={() => {
                setShowSlide(false);
              }}
              className="bi bi-caret-up"
            ></i>
          </div>
        ) : (
          <div
            style={showSlide ? { display: "flex" } : { display: "none" }}
            className="links_slide"
          >
            <Link className="link" to="/profile">
              PROFILE
            </Link>
            <Link className="link" to="/favorites">
              FAVORITES
            </Link>
            {user.isAdmin ? (
              <Link style={{ color: "red" }} className="link" to="admin">
                ADMIN
              </Link>
            ) : null}
            <Link
              className="link"
              onClick={() => {
                dispatch(logOut());
              }}
              to="/login"
            >
              LOG OUT
            </Link>
            <i
              onClick={() => {
                setShowSlide(false);
              }}
              className="bi bi-caret-up"
            ></i>
          </div>
        )}
        {/* <Link to={'login2'}>
        <button className="profileBtn">
          <i className="bi bi-person-fill"></i>
        </button>
        </Link> */}
      </div>
    </nav>
  );
};

export default Nav;
