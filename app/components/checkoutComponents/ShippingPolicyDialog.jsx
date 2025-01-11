"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const ShippingPolicyDialog = ({ handleOpenShipping, openShipping }) => {
  return (
    <>
      <Dialog open={openShipping} handler={handleOpenShipping}>
        <DialogHeader>Shipping Policy</DialogHeader>
        <DialogBody className="max-h-[25rem] overflow-scroll">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-md">Delivery policy</h1>
            <p>
              At DETAYLAR, we strive to deliver your purchases in excellent
              condition as seamlessly and quickly as possible. Same day delivery
              is available for some products for Egypt residents provided that
              the orders are placed before 4pm on a business day. Orders will be
              processed the next business day if placed after 4pm. We deliver to
              gcc countries within 2-4 days of order confirmation and to the
              rest of the world within 5-7 days. Dhl is our shipping partner for
              international destinations.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[2em]">
            <h1 className="font-bold text-md">Delivery information</h1>
            <p>
              We request that you provide accurate addresses and appropriate
              landmarks for successful delivery to your location. You are also
              requested to collect your order and sign for it or have someone do
              it for you after its reception on the designated delivery day.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[2em]">
            <h1 className="font-bold text-md">Cancellations & Modifications</h1>
            <p>
              In case you choose to cancel your order before dispatch, we will
              refund the entire amount to the original source of payment. You
              can cancel a part of your order amount will be refunded or modify
              your order for size or shipping details before it is dispatched.
              Post-dispatch, you will not be able to cancel or modify your
              order. However, if you wish to return an order after receiving it,
              you can place a return request. Please note that returns are
              refunded excluding shipping and duties charges where applicable.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[2em]">
            <h1 className="font-bold text-md">Insurance</h1>
            <p>
              DETAYLAR takes responsibility of your order up to the time it has
              been delivered to the mentioned address. After the order is
              delivered, the responsibility passes on to you or to the recipient
              to whom the package has been delivered in case of gifting.
            </p>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="black" onClick={handleOpenShipping}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ShippingPolicyDialog;
