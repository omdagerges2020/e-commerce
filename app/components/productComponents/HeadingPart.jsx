'use client'
import React, { useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const HeadingPart = () => {
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


  return (
    <div className="w-full flex flex-col mt-[4em]">
      <h1 className="text-center text-2xl font-thin tracking-widest">SHOES</h1>
      <div className="w-full flex justify-between px-3  border-y-[1px] mt-3">
        <div className="px-4 flex gap-2 justify-center items-center border-r-[1px] pr-[2em]">
          <IoGrid className="text-gray-500 text-lg"/>
          <BsFillGrid3X3GapFill className="text-lg"/>
        </div>
        <div className="border-l-[1px] border-inherit	pl-[2em] py-2">
          <Menu placement={header ? "bottom-end" : "top-start"}>
            <MenuHandler>
              <Button className="bg-transparent shadow-none text-md font-thin text-gray-500 hover:shadow-none">SORT</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="text-lg font-thin text-gray-500 tracking-widest">Recommended</MenuItem>
              <MenuItem className="text-lg font-thin text-gray-500 tracking-widest">NEW IN</MenuItem>
              <MenuItem className="text-lg font-thin text-gray-500 tracking-widest">BEST SELLING</MenuItem>
              <MenuItem className="text-lg font-thin text-gray-500 tracking-widest">PRICE HIGH TO LOW</MenuItem>
              <MenuItem className="text-lg font-thin text-gray-500 tracking-widest">PRICE LOW TO HEIG</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HeadingPart;
