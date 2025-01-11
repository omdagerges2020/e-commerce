"use client";
import { Input, Typography } from "@material-tailwind/react";
import CountrySelector from "./CountrySelector";
import CitySelector from "./CitySelector";
import { RiQuestionLine } from "react-icons/ri";

const DeliveryForm = () => {
  return (
    <form className="mt-5 mb-2 ">
      <div className="mb-1 flex flex-col gap-6">
        {/* country selector */}
        <CountrySelector />
        {/* first name and last name inputs */}
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <Input
            size="lg"
            placeholder="First name"
            className="!border !border-gray-300 focus:!border-black bg-white text-gray-900  placeholder:text-gray-500 placeholder:opacity-100 "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            size="lg"
            placeholder="Last name"
            className="!border !border-gray-300 focus:!border-black bg-white text-gray-900  placeholder:text-gray-500 placeholder:opacity-100 "
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        {/* addresss input */}
        <div className="w-full">
          <Input
            placeholder="Address"
            className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-black"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </div>
        {/* postal code and city inputs */}
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <Input
            type="number"
            size="lg"
            placeholder="Postal code (optional)"
            className="!border !border-gray-300 focus:!border-black bg-white text-gray-900  placeholder:text-gray-500 placeholder:opacity-100 "
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            size="lg"
            placeholder="City"
            className="!border !border-gray-300 focus:!border-black bg-white text-gray-900  placeholder:text-gray-500 placeholder:opacity-100 "
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        {/* governorate */}
        <CitySelector />
        {/* phone number */}
        <div className="w-full relative">
          <Input
            placeholder="Phone"
            icon={
              <div className="relative group">
                <RiQuestionLine className="cursor-pointer" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-3 py-1 w-[100px] text-center transition-opacity">
                  In case we need to contact you about your order
                </span>
              </div>
            }
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
            className="!border !focus:border-t-0 !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
          />
        </div>
      </div>
    </form>
  );
};

export default DeliveryForm;
