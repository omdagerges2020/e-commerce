"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import MenuWithSearchInput from "./headerComponents/CountriesMenues";

const CartHeader = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
      () => window.innerWidth <= 960 && setChanged(true)
    );
  }, []);

  return (
    <div className="w-full">
      <div className="w-full text-center">
        <span
          className={
            header
              ? "text-[#353232]  top-0 px-4 text-sm py-3 w-full font-thin	tracking-widest	 text-center uppercase invisible"
              : "text-[#353232]  px-4 text-sm py-3 w-full font-thin	tracking-widest	 text-center uppercase"
          }
        >
          Free Express shipping Above $200
        </span>
      </div>
      <div
        className={
          header
            ? "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
            : "flex flex-col justify-center items-center w-full bg-white border-b-2"
        }
      >
        <div className="bg-black w-full text-white px-3 flex justify-between items-center h-[42px]">
          <div>
            <Button className="font-normal bg-transparent	 uppercase text-[12px] px-3 w-[80px] rounded-none	text-white">
              <Link href={`./`}>Women</Link>
            </Button>
            <Button className="font-normal bg-transparent	 uppercase text-[12px] px-3 w-[80px] rounded-none	text-white">
              <Link href={`./`}>Men</Link>
            </Button>
          </div>
          <div>
            <MenuWithSearchInput />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartHeader;
