import React from "react";
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from "next/link";


const Banner = () => {
 
  return (
    <>
      <div className="mx-auto gap-3 flex flex-col justify-center items-center mt-[5em]">
        <Image
          src="https://thahab.com/cdn/shop/files/hh_1800x.jpg?v=1733926899"
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
