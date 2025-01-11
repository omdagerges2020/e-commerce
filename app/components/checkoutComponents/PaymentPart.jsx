import React from "react";
import PaymentForm from "./PaymentForm";

const PaymentPart = () => {
  return (
    <div className="flex flex-col w-full justify-start mt-[2em]">
      <div clasName="flex flex-col justify-center">
        <h1 className="font-bold text-lg">Payment</h1>
        <span>All transactions are secure and encrypted.</span>
      </div>
      <PaymentForm/>

    </div>
  );
};

export default PaymentPart;
