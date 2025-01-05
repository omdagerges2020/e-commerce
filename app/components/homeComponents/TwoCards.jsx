'use client'
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from 'react-lazyload';


const TwoCards = () => {
  const {
    newProducts: { data },
  } = useSelector((state) => state.newProductsData);

  return (
    <div className="flex flex-col lg:flex-row md:flex-col justify-center gap-5">
      {data?.homePageCategory.slice(0, 2).map(({ image, name, category_id }, index) => (
        <LazyLoad className="flex justify-center flex-col items-center" key={index}>
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${image}`}
            alt="picture"
            className="w-full h-[500px]"
          />
          <div className="flex justify-center items-center flex-col w-full gap-4 mt-[1em]">
            <h1 className="text-xl text-center tracking-widest">
              {name}
            </h1>
            <div className="flex justify-center flex-col items-center">
              <Link href={`/collections/${category_id}`} className="underline">
                Shop Now
              </Link>
            </div>
          </div>
        </LazyLoad>
      ))}

      {/* <div className="flex justify-center flex-col items-center">
        <Image
          width={450}
          height={300}
          src="https://thahab.com/cdn/shop/files/WhatsApp_Image_2024-12-11_at_5.30.31_PM_1_750x.jpg?v=1733930496"
          alt="picture"
        />
        <div className="flex justify-center gap-4 items-center flex-col w-full mt-[1em]">
          <h1 className="text-xl text-center tracking-widest">YOUR PLUS ONE</h1>
          <div className="flex justify-center flex-col items-center">
            <Link href="/" >
              Arm Candy Made To Dazzle
            </Link>
            <Link href="/" className="underline">
              Shop Evening Bags
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TwoCards;
