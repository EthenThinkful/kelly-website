import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./layout/HomePage";
import Gallery from "./layout/Gallery";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Carousel from "./layout/Carousel";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto mb-8 px-12">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Carousel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
