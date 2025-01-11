"use client";
import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

const CountrySelector = () => {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState("Egypt");

  return (
    <div>
      <Select
        size="lg"
        label="Country/Region"
        // selected={(element) =>
        //   element &&
        //   cloneElement(element, {
        //     disabled: true,
        //     className:
        //       "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
        //   })
        // }
        value={selectedCountry}
      >
        {/* {countries.map(({ name, flags }) => ( */}
        <Option value={selectedCountry} className="flex items-center gap-2">
          {/* <img
              src={flags.svg}
              alt={selectedCountry}
              className="h-5 w-5 rounded-full object-cover"
            /> */}
          {selectedCountry}
        </Option>
        {/* ))} */}
      </Select>
    </div>
  );
};

export default CountrySelector;
