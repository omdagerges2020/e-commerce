'use client'
import React from "react";
import DeliveryForm from "./DeliveryForm";
import { Input } from "@material-tailwind/react";

const DeliveryPart = () => {
  return (
    <div className="flex flex-col w-full justify-start mt-[2em]">
      <h1 className="font-bold text-lg">Delivery</h1>
      <DeliveryForm />
      {/* Shipping method input disapled */}
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold text-md">Shipping method</h1>
        <div className="w-full">
          <Input
            disabled
            placeholder="Standard -  Free"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
            className="!border !focus:border-t-0 !border-gray-300 bg-gray-500 text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPart;
