"use client";
import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

const CitySelector = () => {
  const { countries } = useCountries();
  const [selectedCity, setSelectedCity] = useState("Cairo");

  return (
    <div>
      <Select
        size="lg"
        label="Governorate"
        // selected={(element) =>
        //   element &&
        //   cloneElement(element, {
        //     disabled: true,
        //     className:
        //       "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
        //   })
        // }
        value={selectedCity}
      >
        {/* {countries.map(({ name, flags }) => ( */}
        <Option value={selectedCity} className="flex items-center gap-2">
          {/* <img
              src={flags.svg}
              alt={selectedCountry}
              className="h-5 w-5 rounded-full object-cover"
            /> */}
          {selectedCity}
        </Option>
        {/* ))} */}
      </Select>
    </div>
  );
};

export default CitySelector;
