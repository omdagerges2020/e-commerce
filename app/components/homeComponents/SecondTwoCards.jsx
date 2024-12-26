import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondTwoCards = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-col justify-center gap-5">
      <div className="flex justify-center flex-col items-center">
        <Image
          width={500}
          height={300}
          src="https://thahab.com/cdn/shop/files/WhatsApp_Image_2024-12-11_at_5.30.32_PM_750x.jpg?v=1733930508"
          alt="picture"
        />
        <div className="flex justify-center items-center flex-col w-full gap-4 mt-[1em]">
          <h1 className="text-xl text-center tracking-widest">RARE FINDS</h1>
          <div className="flex justify-center flex-col items-center">
            <Link href="/">
            Hermès, Loro Piana, Chanel and More Investment Pieces
            </Link>
            <Link href="/" className="underline">
              Discover Now
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <Image
          width={500}
          height={300}
          src="https://thahab.com/cdn/shop/files/WhatsApp_Image_2024-12-11_at_5.30.30_PM_750x.jpg?v=1733930517"
          alt="picture"
        />
        <div className="flex justify-center gap-4 items-center flex-col w-full mt-[1em]">
          <h1 className="text-xl text-center tracking-widest">WISHLIST GIFTS</h1>
          <div className="flex justify-center flex-col items-center">
            <Link href="/" >
              With love, From You
            </Link>
            <Link href="/" className="underline">
              Shop Gifts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTwoCards;
