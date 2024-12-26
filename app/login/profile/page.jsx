import React from "react";
import LayoutProfile from "./../../components/layout/LayoutProfile";
import { FaPencilAlt } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import Link from "next/link";


const page = () => {
  return (
    <LayoutProfile>
      <div className="bg-[#FAFAFA] w-full flex flex-col gap-[3em] h-screen px-[3em] mt-[4em]">
        <h1 className="text-xl font-bold">profile</h1>
        <div className="bg-white w-full p-3 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
          <h1 className="text-[#707070]">Name</h1>
          <FaPencilAlt />
          </div>
          <div>
            <h1 className="text-[#707070]">Email</h1>
            <span>omdagerges1988@gmail.com</span> 
          </div>
        </div>

        <div className="bg-white w-full p-3 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
          <h1 className="text-black">Addresses</h1>
          <Link href="/">+ Add</Link>
          </div>
          <div className="flex bg-[#FAFAFA] items-center p-4">
            <TbExclamationMark className="rounded-full w-[20px] h-[20px] border-[1px] border-black"/>
            <span>No addresses added</span>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
};

export default page;
