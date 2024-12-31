"use client";
import React from "react";
import LayoutProfile from "./../../components/layout/LayoutProfile";
import { FaPencilAlt } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/app/redux-system/slices/loginSlice";
import { Button } from "@material-tailwind/react";

const Page = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setLogout());
  };

  // console.log(user);

  return (
    <LayoutProfile>
      <div className="bg-[#FAFAFA] w-full flex flex-col gap-[3em] h-screen px-[3em] mt-[9em]">
        <h1 className="text-xl font-bold">profile</h1>
        <div className="bg-white w-full p-3 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-[#707070]">Name</h1>
            <FaPencilAlt />
          </div>
          <div>
            <h1 className="text-[#707070]">Email</h1>
            <span>{user?.data?.email}</span>
          </div>
        </div>

        <Button onClick={handleSignOut()} className="w-fit">
          <Link href="/">Sign Out</Link>
        </Button>

        <div className="bg-white w-full p-3 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-black">Addresses</h1>
            <Link href="/">+ Add</Link>
          </div>
          <div className="flex bg-[#FAFAFA] items-center p-4">
            <TbExclamationMark className="rounded-full w-[20px] h-[20px] border-[1px] border-black" />
            <span>No addresses added</span>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
};

export default Page;
