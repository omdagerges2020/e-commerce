'use client'
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import { useSelector } from "react-redux";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
const AccordionCheckout = () => {
  const { userToken } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="flex flex-col gap-2 justify-center">
            <span className="text-gray-700 font-thin text-sm">Account</span>
            <span  className="text-black font-bold text-sm">{`${userToken ? "omdagerges1988@gmail.com" : "Guest"}`}</span>
            </div>
        </AccordionHeader>
        <AccordionBody>
          <Link href={userToken ? "/" : "/login"} className="underline">{`${userToken ? "Logout" : "Login"}`}</Link>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionCheckout;