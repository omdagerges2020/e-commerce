"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Drawer,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Collapse, List, ListItem } from "@material-tailwind/react";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoClose } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import MenuWithSearchInput from "./headerComponents/CountriesMenues";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux-system/slices/categoriesSlice";
import { getHeaderCategories } from "../redux-system/slices/categoriesHeaderSlice";

const languages = [
  {
    name: "ENGLISH",
  },
  {
    name: "العربية",
  },
];

const navListMenuItems = [
  {
    title: "CATEGORY NAME",
  },
  {
    title: "FEATURED DESIGNERS",
  },
  {
    title: "SHOP BY",
  },
];

function NavListMenu({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-5 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <div
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {/* sub categories */}
            <ul className="text-xl font-thin">
              <li>ALL CLOTHES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
              <li>DRESSES</li>
            </ul>
          </div>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
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
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:border-b-[2px]	hover:border-b-black	
                 hover:shadow-none hover:rounded-none  after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                 after:w-0 after:bg-black after:transition-all after:duration-300 
                 hover:after:w-full"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {title}
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-none lg:flex w-full h-[70vh] gap-[5em] px-[3em] transition-all duration-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
            <ul className="grid grid-cols-3 gap-y-2 gap-x-[6em] outline-none outline-0">
              {renderItems}
            </ul>
            <div
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500 hover:border-none"
            >
              <Image
                src="https://thahab.com/cdn/shop/files/k_600x.jpg?v=1733927279"
                width={300}
                height={50}
                alt="shop-picture"
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-thin">VALENTINO</p>
                <Link href="/" className="font-thin text-sm">
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
    </React.Fragment>
  );
}

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <NavListMenu title="DESIGNERS" />
//       <NavListMenu title="CLOTHING" />
//       <NavListMenu title="SHOES" />
//       <NavListMenu title="BAGS" />
//       <NavListMenu title="ACCESSORIES" />
//       <NavListMenu title="BEAUTY" />
//       <NavListMenu title="JEWELRY" />
//       <NavListMenu title="SALE" />
//       <NavListMenu title="HOME" />
//       <NavListMenu title="KIDS" />
//       <NavListMenu title="GIFTS" />
//     </List>
//   );
// }

const Header = () => {
  const [activeGender, setActiveGender] = useState("WOMEN");
  const { headerCategories } = useSelector(
    (state) => state.headerCategoriesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeaderCategories());
  }, []);

  // console.log(categories?.data?.categories);

  // const navsLinksFilter = categories?.data?.categories.filter((name) => {
  //   return name.category_description !== "Men Fashion";
  // });

  // console.log(navsLinksFilter);

  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [changed, setChanged] = useState(false);
  const [header, setHeader] = useState(false);
  const [lang, setLang] = useState("ENGLISH");
  const [menuOpen, setMenuOpen] = useState(false); // لفتح القائمة عند الضغط على النقاط الثلاث

  const handleOpen = () => setOpen(!open);

  const handleClose = () => {
    setOpen(false);
  };

  // منع إغلاق المودال عند النقر داخل المودال
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

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

  const genderTab = [{ gender: "WOMEN" }, { gender: "MEN" }];

  return (
    <div className="w-full">
      {/* <div className="w-full text-center">
        <span className="text-[#353232] top-0 px-4 text-sm py-3 w-full font-thin	tracking-widest	 text-center uppercase">
          Free Express shipping Above $200
        </span>
      </div> */}
      <div
        className={
          header
            ? "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
            : "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
        }
      >
        <div className="bg-black w-full text-white px-3 flex justify-between items-center h-[42px]">
          <div>
            {genderTab.map((gender, index) => (
              <Link
                href={{ pathname: "/", query: { gender: gender?.gender } }}
                key={index}
              >
                <Button
                  onClick={() => setActiveGender(gender.gender)}
                  className={`${
                    activeGender === gender.gender
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } font-normal uppercase text-[12px] px-3 w-[80px] rounded-none`}
                >
                  {gender?.gender}
                </Button>
              </Link>
            ))}
          </div>
          {/* <div>
            <MenuWithSearchInput />
          </div> */}
        </div>

        {/* language selector and websiteName and icons*/}
        <div className="flex flex-col items-center  px-[2em]  bg-white  w-full">
          <div className=" flex justify-between w-full  mt-4 items-center">
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              className="hidden lg:block"
            >
              <MenuHandler>
                <Button
                  size="sm"
                  className="hidden hover:shadow-none text-[15px] font-thin	 border-none bg-transparent shadow-none text-black items-center gap-2 lg:flex"
                >
                  {lang}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden max-h-72 w-20 lg:block">
                {languages.map(({ name }, index) => (
                  <MenuItem
                    key={index}
                    className="flex items-center gap-2"
                    onClick={() => setLang(name)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <div className="lg:hidden block">
              <React.Fragment>
                <IconButton
                  variant="text"
                  className="lg:hidden"
                  onClick={openDrawer}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                  )}
                </IconButton>
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                  <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Material Tailwind
                    </Typography>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={closeDrawer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>
                  <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML
                    components, all written with Tailwind CSS classes and
                    Material Design guidelines.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                      Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                  </div>
                </Drawer>
              </React.Fragment>
            </div>

            {/* nav links */}
            <div className="flex flex-col justify-center items-center">
              <Image
                width={40}
                height={40}
                src={`/assets/images/logo.png`}
                alt="logo"
              />
              <h1 className="tracking-[.5em] font-[600] text-[30px]">
                DETAYLAR
              </h1>
            </div>
            {/* icons */}
            <div className="flex flex-col lg:flex-row text-[25px] font-bold gap-2">
              <VscAccount className="hidden lg:block" />
              <IoSearch />
              <MdOutlineShoppingBag
                onClick={openDrawerRight}
                className="cursor-pointer"
              />
              <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
                size="400px"
              >
                <div className="mb-6 flex items-center justify-between w-full">
                  <Typography variant="h5" color="blue-gray">
                    CART
                  </Typography>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                <Typography
                  color="gray"
                  className="mb-8 pr-4 font-normal border-y-[1px]"
                >
                  Spend 200 KD more and get free shipping!
                </Typography>
                <div className="flex gap-2 w-full h-screen">
                  <span>Your cart is empty</span>
                </div>
              </Drawer>
              <IoIosHeart onClick={handleOpen} className="cursor-pointer" />
              <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}
                onClick={handleStopPropagation}
                className="backdrop-none flex flex-col relative border-none rounded-none lg:min-w-[80%] lg:max-w-[90%] lg:max-h-[80vh] w-full h-screen"
              >
                <DialogFooter className="absolute w-full bg-[#434655] top-0 right-0">
                  <div className="flex gap-5 w-full justify-end items-center">
                    <div className="flex gap-3 items-center">
                      <Link href="/">
                        <TbUserQuestion className="text-white" />
                      </Link>
                      <Link
                        href="/"
                        className="border-none shadow-none text-white hover:border-none hover:shadow-none"
                      >
                        Guest Shopper
                      </Link>
                    </div>
                    <IoClose
                      className="cursor-pointer text-white"
                      onClick={handleClose} // إغلاق المودال عند النقر على الأيقونة
                    />
                  </div>
                </DialogFooter>
                <DialogBody className="mt-[4em]">
                  <div className="w-full px-[2em] flex flex-col p-3">
                    <div className="flex justify-between items-center font-thin text-black">
                      <h1 className="text-xl tracking-widest">My Wishlist</h1>
                      <Menu placement="left">
                        <MenuHandler>
                          <BsThreeDotsVertical />
                        </MenuHandler>
                        <MenuList
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default browser behavior
                            e.stopPropagation(); // Prevent the Dialog from closing when interacting with the Menu
                          }}
                        >
                          <MenuItem>Menu Item 1</MenuItem>
                          <MenuItem>Menu Item 2</MenuItem>
                          <MenuItem>Menu Item 3</MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                    <hr className="w-full mt-[2em]" />
                  </div>
                  <div className="mt-[6em] flex flex-col justify-center items-center mx-w-[300px] gap-4">
                    <h1 className="font-bold">Love It? Add to My Wishlist</h1>
                    <p>
                      My Wishlist allows you to keep track of all of your
                      favorites and shopping activity whether you're on your
                      computer, phone, or tablet. You won't have to waste time
                      searching all over again for that item you loved on your
                      phone the other day - it's all here in one place!
                    </p>
                    <Button className="bg-[#434655]">Continue Shopping</Button>
                  </div>
                </DialogBody>
              </Dialog>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around w-full font-light mt-3">
            {/* <NavList /> */}
            {/* {categories?.data?.categories.map((name, index) => (
              <List key={index}>
                <NavListMenu title={name.category_description.name} />
              </List>
            ))} */}

            <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row gap-6 lg:p-1">
              {activeGender === "WOMEN"
                ? headerCategories?.women?.map((li, index) => (
                    <NavListMenu
                      key={index}
                      title={li.category_description.name}
                    />
                  ))
                : headerCategories?.men?.map((li, index) => (
                    <NavListMenu
                      key={index}
                      title={li.category_description.name}
                    />
                  ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
