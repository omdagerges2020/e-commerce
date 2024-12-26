import React from "react";
import { Carousel } from "@material-tailwind/react";


const SliderHome = () => {
  return (
    <div className="mt-[12em] w-full flex justify-center items-center">
      <Carousel navigation={false} prevArrow={false} nextArrow={false} autoplayDelay={1000} autoplay={true} className="rounded-xl w-[90%] h-[400px]">
        <img
          src={`/assets/images/slider-1.png`}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={`/assets/images/slider-2.jpg`}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={`assets/images/slider-2.jpg`}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default SliderHome;
