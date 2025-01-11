"use client";
import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import RefundPolicyDialog from "./RefundPolicyDialog";
import ShippingPolicyDialog from "./ShippingPolicyDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import TermsOfserviceDialog from "./TermsOfserviceDialog";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

const PaymentForm = () => {
  const { countries } = useCountries();
  //   const [type, setType] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpires, setCardExpires] = useState("");
//   refund state
  const [openRefund, setOpenRefund] = useState(false);
  const handleOpenRefund = () => setOpenRefund(!openRefund);
//   shipping state
  const [openShipping, setOpenShipping] = useState(false);
  const handleOpenShipping = () => setOpenShipping(!openShipping);
//   privacy state
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const handleOpenPrivacy = () => setOpenPrivacy(!openPrivacy);
//   terms&&services state
  const [openTerms, setOpenTerms] = useState(false);
  const handleOpenTerms = () => setOpenTerms(!openTerms);

  return (
    <Card className="w-full mb-4">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="mb-4 h-20 p-6 text-white flex flex-col justify-center">
          <Image
            width={100}
            height={50}
            alt="paymob"
            src="/assets/images/paymob.png"
          />
          <div className="flex gap-1">
            <FaCcVisa />
            <FaCcMastercard />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <form className="mt-12 flex flex-col gap-4">
          <div className="my-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium "
            >
              Card Details
            </Typography>

            <Input
              maxLength={19}
              value={formatCardNumber(cardNumber)}
              onChange={(event) => setCardNumber(event.target.value)}
              icon={
                <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
              }
              placeholder="0000 0000 0000 0000"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="my-4 flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  Expires
                </Typography>
                <Input
                  maxLength={5}
                  value={formatExpires(cardExpires)}
                  onChange={(event) => setCardExpires(event.target.value)}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="00/00"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  CVC
                </Typography>
                <Input
                  maxLength={4}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="000"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Holder Name
            </Typography>
            <Input
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button size="lg">Pay Now</Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
          >
            <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are secure
            and encrypted
          </Typography>
        </form>
        {/* <Tabs className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="card">
              Pay with Paymob
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              Pay with MoPay
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0 border-b-2">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                  >
                    Card Details
                  </Typography>
 
                  <Input
                    maxLength={19}
                    value={formatCardNumber(cardNumber)}
                    onChange={(event) => setCardNumber(event.target.value)}
                    icon={
                      <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                    }
                    placeholder="0000 0000 0000 0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <div className="my-4 flex items-center gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Expires
                      </Typography>
                      <Input
                        maxLength={5}
                        value={formatExpires(cardExpires)}
                        onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="00/00"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        CVC
                      </Typography>
                      <Input
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Holder Name
                  </Typography>
                  <Input
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button size="lg">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="paypal" className="p-0 border-b-2">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Billing Address
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Country
                  </Typography>
                  <Select
                    placeholder="USA"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    menuProps={{ className: "h-48" }}
                  >
                    {countries.map(({ name, flags }) => (
                      <Option key={name} value={name}>
                        <div className="flex items-center gap-x-2">
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-4 -mb-2 font-medium"
                  >
                    Postal Code
                  </Typography>
                  <Input
                    placeholder="0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{ className: "mt-4" }}
                  />
                </div>
                <Button size="lg">pay with Mopay</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs> */}
      </CardBody>
      {/* buttons for policy */}
      <div classsName="flex gap-2 w-full px-2">
        <Button onClick={handleOpenRefund} className="underline capitalize p-1 shadow-none hover:shadow-none bg-transparent text-black text-sm font-bold">
          Refund Policy
        </Button>
        <RefundPolicyDialog handleOpenRefund={handleOpenRefund} openRefund={openRefund}/>

        <Button onClick={handleOpenShipping} className="underline capitalize p-1 shadow-none hover:shadow-none bg-transparent text-black text-sm font-bold">
          Shipping Policy
        </Button>
        <ShippingPolicyDialog handleOpenShipping={handleOpenShipping} openShipping={openShipping}/>

        <Button onClick={handleOpenPrivacy} className="underline capitalize p-1 shadow-none hover:shadow-none bg-transparent text-black text-sm font-bold">
          Privacy Policy
        </Button>
        <PrivacyPolicyDialog openPrivacy={openPrivacy} handleOpenPrivacy={handleOpenPrivacy}/>

        <Button onClick={handleOpenTerms} className="underline capitalize p-1 shadow-none hover:shadow-none bg-transparent text-black text-sm font-bold">
          Terms Of Service
        </Button>
        <TermsOfserviceDialog openTerms={openTerms} handleOpenTerms={handleOpenTerms}/>

      </div>
    </Card>
  );
};

export default PaymentForm;
