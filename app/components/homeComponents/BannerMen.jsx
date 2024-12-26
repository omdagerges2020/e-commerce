import React from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const BannerMen = () => {
  return (
    <>
      <div className="gap-7 flex flex-col lg:flex-row  justify-center items-center mt-[5em]">
        <Image
          src="/assets/images/men-banner.png"
          width={720}
          height={750}
          alt="picture"
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="tracking-widest font-thin">
            The Ultimate Seasonal Edit
          </p>
          <h1 className="text-xl tracking-widest">Winter Wardrobe</h1>
          <Link
            href={`/collections`}
            className="bg-black text-white text-md tracking-widest font-thin rounded-none p-4"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <hr className="text-black w-full mt-6" />
    </>
  );
};

export default BannerMen;
