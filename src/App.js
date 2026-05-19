import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Builds from "./pages/Builds";
import Tutorials from "./pages/Tutorials";
import BuildStone from "./pages/BuildStone";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/buildstone" element={<BuildStone />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;