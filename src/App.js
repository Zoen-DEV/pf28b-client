import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Mangas from "./components/Mangas";
import SignUp from "./components/SignUp";
// import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Landing from "./components/Landing";
import Animes from "./components/Animes";
import Cart from "./components/Cart";
import Login2 from "./components/Login2";
import ShowUsers from "./components/ShowUsers";
import RequireAuth from "./components/RequireAuth";
import AlreadyAuth from "./components/AlreadyAuth";
import Admin from "./components/Admin";
import Payments from "./components/Payments";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../redux/Actions/actions";
import {
  getAnimes,
  getAnimesGenres,
  getTopAnimes,
  getMangas,
  getGenres,
  topMangas,
} from "./redux/Actions/actions";

function App() {
  const userJSON = localStorage.getItem("user");
  const user = JSON.parse(userJSON);
  const dispatch = useDispatch();
  useEffect(() => {
    // localStorage.clear()
    dispatch(topMangas());
    dispatch(getTopAnimes());
    dispatch(getAnimes());
    dispatch(getMangas());
    dispatch(getGenres());
    dispatch(getAnimesGenres());
    if (user !== null) {
      dispatch(getCart(user.id));
    }
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Landing></Landing>} />

        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<AlreadyAuth />}>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          <Route path="/login" element={<Login2 />} />
        </Route>

        <Route path="/home" element={<Home></Home>} />
        <Route path="/mangas" element={<Mangas></Mangas>} />
        <Route path="/animes" element={<Animes></Animes>} />
        <Route path="/details/:id" element={<Details></Details>} />
        <Route path="/users" element={<ShowUsers />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
