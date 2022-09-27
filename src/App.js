import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav"
import { getAllAnimes } from "./redux/actions";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllAnimes())
  }, [dispatch])
  

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
