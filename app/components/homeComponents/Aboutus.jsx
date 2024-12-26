import React from "react";

const Aboutus = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/aboutus.png')" }}
      className="w-full h-[70vh] gap-[2em] bg-cover mt-[5em] flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl">ABOUT US</h1>
      <div className="flex justify-center w-[25em] items-center">
        <span className="text-center">
          THAHAB is a global online luxury e-commerce platform carrying the most
          coveted drops of a tight edit of 400+ of the world’s best boutiques &
          brands.
        </span>
      </div>
    </div>
  );
};

export default Aboutus;
