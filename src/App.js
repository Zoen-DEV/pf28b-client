import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route index element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
