'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Cards = ({products, typeGrid}) => {

  return (
    <div className="w-full flex justify-center lg:w-[calc(100% - 300px)]">
      <div
        className={`grid grid-cols-2 xs:grid-cols-1 ${typeGrid ? "md:grid-cols-3" : "md:grid-cols-2"} ${typeGrid ? "lg:grid-cols-3" : "lg:grid-cols-2"}  gap-[2em] overscroll-none lg:overflow-y-scroll lg:h-[70vh]`}
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {products && products?.productsList?.data.map((card) => (
          <Link
            href={`/collections/${card.model}/${card.id}`}
            key={card.id}
            className={`card w-[300px] xs:w-full ${typeGrid ? "md:w-[230px]" : "md:w-[300px]"} lg:w-[230px] bg-white shadow-none rounded-lg`}
          >
            <div className="relative w-full h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${card?.image}`}
                alt="Shoe 1"
                layout="fill"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-md font-semibold">{card?.model}</p>
              <p className="text-gray-600">{card?.product_description?.name}</p>
              {/* <p className="text-gray-600">{card.kind}</p> */}
              <div>
                <span
                  className={`text-gray-600 ${
                    card?.special !== null && "line-through	"
                  }`}
                >
                  {card.price}
                </span>
                <span className="text-red-500">{card?.special?.price}</span>
              </div>
              {card?.special !== null && (
                <div className="flex flex-col">
                  <span>Start Date: {card?.special?.start_date}</span>
                  <span>End Date: {card?.special?.end_date}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
