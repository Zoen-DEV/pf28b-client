import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav"

function App() {
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
