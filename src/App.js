import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/details/:id" element={<Details></Details>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
