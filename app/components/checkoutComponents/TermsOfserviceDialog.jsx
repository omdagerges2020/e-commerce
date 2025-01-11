"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const TermsOfserviceDialog = ({ handleOpenTerms, openTerms }) => {
  return (
    <>
      <Dialog open={openTerms} handler={handleOpenTerms}>
        <DialogHeader>Terms of service</DialogHeader>
        <DialogBody className="max-h-[25rem] overflow-scroll">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-md">Intro</h1>
            <p>
              Welcome to DETAYLAR.Com, your online portal to all things luxury &
              lifestyle. We hope you enjoy shopping on our website. DETAYLAR is
              owned and operated by Thahab.Com co. Wll and THAHAB for the trade
              of jewelry, precious stones and metals co. Wll, for its own
              benefit and the benefit of its affiliates and subsidiaries. We
              recommend a perusal of the terms & conditions on DETAYLAR before
              the use of its services. The terms and conditions are subject to
              change from time to time without notification. We request that you
              check them often for updates. If you don't wish to comply with any
              of the listed terms, you may not use the website. Once you place
              an order on the website, you accept the latest terms and
              conditions listed on the site. Please note that changes made in
              the t&c after you have placed your order will not be applicable to
              your order unless the law enforces it.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[2em]">
            <h1 className="font-bold text-md">Eligibility</h1>
            <p>
              DETAYLAR is free for use to anyone who is at least 18 years of age,
              can make a payment through one of our accepted payment methods and
              agrees to the terms & conditions listed on the site. DETAYLAR
              website and services are for personal and gifting use only and
              their use for commercial purposes is not permitted. DETAYLAR
              reserves the right to refuse services if it suspects commercial or
              illegal use.
            </p>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="black" onClick={handleOpenTerms}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default TermsOfserviceDialog;
