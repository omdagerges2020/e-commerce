import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GitTheLook = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-[4em]">
      <h1 className="mb-4 text-2xl tracking-wider">GET THE LOOK</h1>
      <div className="flex flex-col lg:flex-row gap-[3em] items-start">
        <div className="flex-1">
          <Image
            src="https://thahab.com/cdn/shop/files/shop_the_lookkk_400x.progressive.jpg?v=1733930811"
            width={500}
            height={400}
            alt="picture"
          />
        </div>
        <Button className="bg-black border-none text-white font-thin tracking-widest w-full lg:hidden text-md">
            <Link href={`/collections`}>VIEW THIS PRODUCT</Link>
        </Button>
        <div className="hidden lg:flex lg:flex-col gap-2 lg:flex-shrink justify-center items-center">
          <Image
            src="https://thahab.com/cdn/shop/files/STEVIE-100-PAT-BLACK-A_400x.jpg?v=1733820946"
            width={300}
            height={100}
            style={{width: "300px", height: "400px"}}
            alt="picture"
          />
          <div className="flex flex-col max-w-56">
            <span>Stevie 100 Crystal-Embellished Pumps in Patent Leather</span>
            <span>421 KD</span>
          </div>
          <Button className="bg-black border-none text-white font-thin tracking-widest w-full text-md">
            <Link href={`/collections`}>VIEW THIS PRODUCT</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GitTheLook;
