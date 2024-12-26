import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import Image from "next/image";

const countries = [
  {
    name: "Kuwit-KWD",
    flage:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.3/flags/4x3/kw.svg",
  },
  {
    name: "Saudi-SAR",
    flage:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.3/flags/4x3/sa.svg",
  },
  {
    name: "Qatar-QAR",
    flage:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.3/flags/4x3/qa.svg",
  },
  {
    name: "United Arab Emirates-AED",
    flage:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.3/flags/4x3/ae.svg",
  },
];

const MenuWithSearchInput = () => {
  return (
    <>
      <Menu
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <Button className="flex gap-3 bg-transparent shadow-none text-lg font-thin justify-center items-center">
            <Image
              src={countries[0].flage}
              alt="county-flage"
              width={20}
              height={20}
            />
            {countries[0].name}
          </Button>
        </MenuHandler>
        <MenuList>
          <Input
            label="Search"
            containerProps={{
              className: "mb-4",
            }}
          />
          {countries.map((country, index)=>(
             <MenuItem key={index}>{country.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuWithSearchInput;
