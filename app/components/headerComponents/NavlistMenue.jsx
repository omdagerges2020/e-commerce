'use client'
import { Collapse, ListItem, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavlistMenue = ({
  categoryName,
  categoryId,
  categoryImg,
  categoryChildren,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navListMenuItems = [
    {
      title: "CATEGORY NAME",
      title2: "All ",
    },
  ];

  const renderItems = navListMenuItems.map(({ title, title2 }, key) => (
    <MenuItem className="flex items-center gap-5 rounded-lg" key={key}>
      <div>
        <div className="flex items-center text-lg font-bold">{title}</div>
        <div className="flex items-center text-lg font-bold">
          {title2} {categoryName}
        </div>
        <div className="text-xs !font-medium text-blue-gray-500">
          <ul className="text-xl font-thin flex flex-col">
            {categoryChildren?.map((sub, index) => (
              <li key={index}>
                <Link
                  className="cursor-pointer text-black"
                  href={`/collections/${sub?.category_id}`}
                  passHref
                >
                  {sub?.category_description?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MenuItem>
  ));
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 0 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium flex">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:border-b-[2px] hover:border-b-black"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Link href={`/collections/${categoryId}`} passHref>
                <span className="block w-full">{categoryName}</span>
              </Link>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-none lg:flex w-full h-[70vh] gap-[5em] px-[3em] transition-all duration-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
          <ul className="grid grid-cols-3 gap-y-2 gap-x-[6em] outline-none outline-0">
            {renderItems}
          </ul>
          <div className="text-xs !font-medium text-blue-gray-500 hover:border-none">
            <Image
              src={`${
                process.env.NEXT_PUBLIC_IMAGE_DOMAIN
              }/${categoryImg.replace(/ /g, "%20")}`}
              width={300}
              height={50}
              alt="shop-picture"
            />
            <div className="flex flex-col justify-center items-center">
              <Link
                href={`/collections/${categoryId}`}
                className="font-thin text-sm"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </div>
  );
};

export default NavlistMenue;
