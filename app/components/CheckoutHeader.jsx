"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";

const CheckoutHeader = () => {

  return (
      <Navbar className="mx-auto max-w-screen-xl px-6 py-5 rounded-none w-full flex justify-end">
        <div className="flex items-center justify-between text-black w-full lg:w-[60%]">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 tracking-[.2em] lg:tracking-[.5em] font-bold text-[2xl] lg:text-4xl"
          >
            DETAYLAR
          </Typography>
          <Link href={`/cart`} className="text-md"><MdOutlineShoppingBag /></Link>
        </div>
      </Navbar>
  );
};

export default CheckoutHeader;
