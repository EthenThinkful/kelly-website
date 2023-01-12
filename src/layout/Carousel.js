import beforeCup from "../Assets/project-pictures/API Pullers/before-cup.jpg";
import afterCup from "../Assets/project-pictures/API Pullers/after-cup.jpg";
import beforeCuttingBoard from "../Assets/project-pictures/API Pullers/before-cutttingboard.jpg";
import afterCuttingBoard from "../Assets/project-pictures/API Pullers/after-cuttingboard.jpg";
import beforePictureFrame from "../Assets/project-pictures/API Pullers/before-picture-frame.jpg";
import afterPictureFrame from "../Assets/project-pictures/API Pullers/after-picture-frame.jpg";
import beforeSpoon from "../Assets/project-pictures/API Pullers/before-spoon.jpg";
import afterSpoon from "../Assets/project-pictures/API Pullers/after-spoon.jpg";
import beforeVase from "../Assets/project-pictures/API Pullers/before-vase.jpg";
import afterVase from "../Assets/project-pictures/API Pullers/after-vase.jpg";

import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const photoData = [
  beforeCup,
  afterCup,
  beforeCuttingBoard,
  afterCuttingBoard,
  beforePictureFrame,
  afterPictureFrame,
  beforeSpoon,
  afterSpoon,
  beforeVase,
  afterVase,
];

function Carousel() {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      navigation
      //pagination={{clickable: true}}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-12"
    >
      {photoData.map((photo) => (
        <SwiperSlide>
          {
            <img
              src={photo}
              alt="before&afterPhotos"
              className="w-70 h-70 py-16 px-12"
            ></img>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
