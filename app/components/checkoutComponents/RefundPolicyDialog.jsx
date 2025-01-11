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

const RefundPolicyDialog = ({ handleOpenRefund, openRefund }) => {
  return (
    <>
      <Dialog open={openRefund} handler={handleOpenRefund}>
        <DialogHeader>Refund Policy</DialogHeader>
        <DialogBody className="max-h-[30rem] overflow-scroll">
          <Typography className="font-normal">
            Refund for successfully returned items will be processed and
            credited to the payment method used to make the original purchase.
          </Typography>
          <Typography className="font-normal">
            Please note the following applicable charges will be deducted from
            the refund amount: EGP 10.000  shipping cost  EGP 10.000 
            return shipping cost  Approximately between EGP 30.000  50.000
            subject to increase wherever applicable shipping cost for all
            Balenciaga products as well as boots Approximately between EGP
            30.000 50.000 subject to increase wherever applicable return
            shipping cost for all Balenciaga products as well as boots All
            customs duties or taxes including those incurred when returned
            product is received. Successfully returned items that were purchased
            using a promo code will only be refunded original paid amount
            amount charged after the promotional discount was applied and used
            promo code will no longer be valid. Refunded amount may take up to
            14 days to reflect in your account depending on your bank
            processing time. For payments made via cash on delivery option,
            a non-refundable fee of 20 EGP will apply to all orders below 200 kd
            and 20% on all items above 200 KW
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="black" onClick={handleOpenRefund}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default RefundPolicyDialog;
