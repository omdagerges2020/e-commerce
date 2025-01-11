'use client'
import { Button, Input, Typography } from "@material-tailwind/react";
import { CiInstagram } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  {
    name: "ENGLISH",
  },
  {
    name: "العربية",
  },
];

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState("ENGLISH");

  return (
    <footer className="relative w-full mt-[2em]">
      <div className="mx-auto w-full max-w-7xl px-[3em]">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full py-12 gap-8">
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase opacity-50 text-[#000000]"
            >
              DETAYLAR
            </Typography>
            <ul className="flex flex-col gap-3">
              <Typography as="li" className="font-normal">
                <p className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61]">
                  The most coveted drops of the world's best brands and
                  boutiques.
                </p>
              </Typography>
              <a href="https://www.instagram.com/thahabworld/" target="_blank">
                <CiInstagram />
              </a>
              <div className="flex gap-2">
                <a
                  href="https://apps.apple.com/us/app/thahab-luxury-shopping/id1471324539"
                  target="_blank"
                >
                  <img src="https://thahab.com/cdn/shop/files/appstore_120x.png?v=1733916214" />
                </a>
                <a
                  href="https://thahab.com/cdn/shop/files/gplay_d7d984a9-2c97-47b9-819b-81c38bcac265_120x.png?v=1733917218"
                  target="_blank"
                >
                  <img src="https://thahab.com/cdn/shop/files/gplay_d7d984a9-2c97-47b9-819b-81c38bcac265_120x.png?v=1733917218" />
                </a>
              </div>
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase opacity-50 text-[#000000]"
            >
              DETAYLAR
            </Typography>
            <ul className="flex flex-col">
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  Search
                </a>
              </Typography>
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  About Us
                </a>
              </Typography>
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  Terms & Conditions
                </a>
              </Typography>
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  Refund Policy
                </a>
              </Typography>
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  Return Policy
                </a>
              </Typography>
              <Typography as="li" className="font-normal">
                <a className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  Privacy Policy
                </a>
              </Typography>
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase opacity-50 text-[#000000]"
            >
              Contact Us
            </Typography>
            <ul className="flex flex-col">
              <Typography as="li" className="font-normal">
                <p className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                  +965 97357777
                </p>
              </Typography>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase opacity-50 text-[#000000]"
            >
              Newsletter
            </Typography>
            <Typography as="li" className="font-normal">
              <p className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#5C5C61] cursor-pointer">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
            </Typography>
            <div className="w-72">
              <Input label="Enter Your Email Address" />
            </div>
            <Button
              color="black"
              className="text-white shadow-none hover:shadow-none"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className="px-[5em] py-4">
        <Menu open={openMenu} handler={setOpenMenu} className="hidden lg:block">
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
        <div className="font-thin tracking-widest text-sm">
          <p>&copy; DETAYLAR </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
