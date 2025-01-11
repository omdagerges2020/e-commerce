import React from "react";
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from "next/link";


const Banner = ({newProducts}) => {
  // console.log(newProducts?.data?.banners[0]?.images[0]?.image);
  
  return (
    <>
      <div className="mx-auto gap-3 flex flex-col justify-center items-center mt-[5em]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/api/${newProducts?.data?.banners[0]?.images[0]?.image}`}
          width={1000}
          height={750}
          alt="picture"
        />
        <h1 className="text-2xl tracking-widest">LADY IN BLACK</h1>
        <p className="tracking-widest font-thin">
          FROM SHOWSTOPPER DRESSES TO STRONG SUITING
        </p>
        <Link href={`/collections/categoryname`} className="bg-black text-white text-md tracking-widest font-thin rounded-none p-4">
          EXPLORE THE EDIT
        </Link>
        <hr className="text-black w-full mt-6" />
      </div>
    </>
  );
};

export default Banner;
