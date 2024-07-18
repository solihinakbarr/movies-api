import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar/NavbarComp";
import Homepage from "./pages/Home/Homepage";
import MovieDetail from "./pages/Details/MovieDetail";
import Soonpage from "./pages/Soon/Soonpage";
import Rated from "./pages/Rated/Rated";
import FooterComp from "./components/Footer/FooterComp";

const App = () => {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/cooming" element={<Soonpage />} />
        <Route path="/toprate" element={<Rated />} />
      </Routes>
      <FooterComp />
    </Router>
  );
};

export default App;
