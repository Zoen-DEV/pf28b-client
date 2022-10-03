import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";
import Mangas from "./components/Mangas";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/mangas" element={<Mangas></Mangas>} />
        <Route path="/details/:id" element={<Details></Details>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
