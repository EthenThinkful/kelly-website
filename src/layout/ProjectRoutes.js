import React from "react";
import { Routes, Route } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Intro from "./Intro";



import CardsContainer from "./CardsContainer";

//import NotFound from "./NotFound"

function ProjectRoutes() {
  return (
    <>
      <div className="container-intro mx-auto mb-8 px-8">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
        </Routes>
      </div>
      <div className="container-intro mx-auto mb-8 px-8">
        <Routes>
          <Route path="/" element={<CardsContainer />}></Route>
        </Routes>
      </div>
      <div className="container-carousel mx-auto mb-8 px-8">
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
        </Routes>
      </div>
      <div className="container-footer mx-auto mb-8 px-8">
          <Routes>
            <Route path="/" element={<Footer />}></Route>
          </Routes>
      </div>
    </>
  );
}

export default ProjectRoutes;
