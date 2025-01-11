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

const PrivacyPolicyDialog = ({ handleOpenPrivacy, openPrivacy }) => {
  return (
    <>
      <Dialog open={openPrivacy} handler={handleOpenPrivacy}>
        <DialogHeader>Privacy Policy</DialogHeader>
        <DialogBody className="max-h-[25rem] overflow-scroll">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-md">Privacy Policy</h1>
            <p>
              At DETAYLAR, we respect the privacy of our users and our detailed
              privacy policy states how we use, collect, store and share the
              data provided by you. By visiting the website or supplying
              personal information toDETAYLAR you agree to the terms listed
              under the privacy & cookie policy of this website. We update this
              policy from time to time and it is your responsibility to check on
              the updates to be in the know of the latest policy applicable to
              you.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[2em]">
            <h1 className="font-bold text-md">Data Collected By Us</h1>
            <p>
              Your personal information is collected byDETAYLAR when you interact
              with us in any way. This information may originate from anywhere
              ranging from placing an order on the website to clicking on an
              advertisement we posted somewhere. You are subject to the terms
              documented under the website privacy policy when you engage with
              us on any media. We may also receive information about you from
              third party sources with whom we have a business relationship.
            </p>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="gradient" color="black" onClick={handleOpenPrivacy}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default PrivacyPolicyDialog;
