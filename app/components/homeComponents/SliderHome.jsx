import React from "react";
import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";


const SliderHome = () => {
  const {newProducts:{data}} = useSelector(state => state.newProductsData);
  
  return (
    <div className="mt-[12em] w-full flex justify-center items-center">
      <Carousel navigation={false} prevArrow={false} nextArrow={false} autoplayDelay={1000} autoplay={true} className="rounded-xl w-[90%] h-[400px]">
        {data?.homePageCategory.slice(0, 3).map(({image}, index)=>(
              <img
              key={index}
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${image}`}
              alt="image 1"
              className="h-full w-full object-cover"
            />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderHome;
