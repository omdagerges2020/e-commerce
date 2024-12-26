import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-[4em]">
      <h1 className="mb-4 text-2xl tracking-wider">Gift Card</h1>
      <div className="flex lg:flex-row flex-col gap-[3em] items-start">
        <div className="lg:flex-1 w-full">
          <Image
            src="https://thahab.com/cdn/shop/files/GiftCard-01-01_600x.jpg?v=1702909040"
            width={400}
            height={300}
            alt="picture"
          />
        </div>
        <div className="flex flex-col gap-2 flex-shrink justify-center items-center">
          <div className="mt-9 lg:max-w-[410px]">
            <h1 className="text-2xl mb-4  tracking-[.2em]">
            THAHAB Gift Card
            </h1>
            <span className="text-[#686868] text-md mb-2">200 KD</span>
            <div className="flex flex-col gap-2 justify-center items-center px-3 mt-4 border-2 border-[#EEEEEE] p-5">
              <div className="flex gap-3">
                <img
                  src="https://shapp.thahab.com/storage/eta/icons/R1J8bfkEGfugobwwv7Zqg0Ok6L4zTlyUyNWz0DzY.jpg"
                  alt="plane"
                  className="w-[60px]"
                />
                <span className="text-[#666666]">Shipped within 4 days</span>
              </div>
              <div className="flex flex-col justify-center items-center text-[#828282]">
                <h1 className="text-sm">
                  This estimate is not guaranteed. For more details refer to
                </h1>
                <a href="./" className="underline ml-4">
                  shipping policy
                </a>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <Link href={`./`}>
                Size:
              </Link>
            </div>
            <button className="border-[1px] p-2 text-[#959595]">Onesize</button>

            <Button className="bg-white mt-4 w-full shadow-none border-[1px] tracking-widest hover:bg-black text-[#8A8A8A] hover:text-white transition-all duration-500 ease-out relative overflow-hidden">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-black transition-all duration-500 ease-out hover:left-0"></span>
              ADD TO CART
            </Button>

            <Link
              href="/"
              className="flex w-full justify-start items-center p-3 mt-4 text-white bg-black"
            >
              <div className="flex justify-center w-full">BUT IT NOW</div>
            </Link>

            <Link
              href="/"
              className="flex w-full justify-between items-center p-3 mt-4 font-thin underline text-black bg-transparent"
            >
              VIEW PRODUCT DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
