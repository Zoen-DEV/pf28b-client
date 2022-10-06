import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Mangas from "./components/Mangas";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Animes from "./components/Animes";
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Landing></Landing>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/mangas" element={<Mangas></Mangas>} />
        <Route path="/animes" element={<Animes></Animes>} />
        <Route path="/details/:id" element={<Details></Details>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
