"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import LazyLoad from "react-lazyload";

const SliderHome = () => {
  const {
    newProducts: { data },
  } = useSelector((state) => state.newProductsData);

  return (
    <div className="mt-[12em] w-full flex justify-center items-center">
      <Carousel
        navigation={false}
        prevArrow={false}
        nextArrow={false}
        autoplayDelay={1000}
        autoplay={true}
        className="rounded-xl w-[90%] h-[400px]"
      >
        {/* {data?.homePageCategory.slice(0, 1).map(({ image }, index) => ( */}
          <LazyLoad>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${data?.homePageCategory[0].image}`}
              fill
              alt="image 1"
              className="bg-center"
            />
          </LazyLoad>
        {/* ))} */}
      </Carousel>
    </div>
  );
};

export default SliderHome;
