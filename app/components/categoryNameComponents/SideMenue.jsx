"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const SideMenue = ({ categories }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div className="hidden lg:block lg:w-[300px]">
      {categories &&
        categories?.data?.categories.map((cat, index) => (
          <Accordion key={index} open={open === index} icon={<Icon id={index} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(index)}>
              {cat?.category_description?.name}
            </AccordionHeader>
            <AccordionBody className="text-md text-black max-h-[100px] overflow-y-scroll">
              {cat?.children.map((child, index)=>(
                <ul key={index} className="flex flex-col">
                  <Link href={`/collections/${child?.category_id}`}>{child?.category_description?.name}</Link>
                </ul>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
    </div>
  );
};

export default SideMenue;
