"use client";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";

const SearchDialog = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => setOpenSearch(!openSearch);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      dispatch(getSearchData(value)); // استدعاء الدالة لجلب النتائج
    }
  };

  return (
    <Dialog
      open={openSearch}
      handler={handleOpenSearch}
      size="xl"
      className="max-h-[500px] absolute top-[13px] backdrop-blur-none"
    >
      <DialogBody className="overflow-y-auto w-full flex gap-2">
        <div className="relative w-[90%] justify-center">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg placeholder:text-xl focus:outline-none"
          />
          <IoSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <Button
          variant="text"
          onClick={handleOpenSearch}
          className="mr-1 hover:bg-transparent"
        >
          <IoMdClose className="text-lg hover:bg-transparent" />
        </Button>
      </DialogBody>
      {query && searchResult?.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50 mt-2">
          {searchResult.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() =>
                handleSelectProduct({
                  prodId: product?.id,
                  prodName: product?.product_description?.name,
                })
              }
            >
              {product?.image && (
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                  }/${product?.image?.replace(/ /g, "%20")}`}
                  alt={product?.product_description?.name}
                  width={50}
                  height={50}
                  className="w-10 h-10 object-cover rounded"
                />
              )}
              <span>{product?.product_description?.name}</span>
            </li>
          ))}
        </ul>
      )}
    </Dialog>
  );
};

export default SearchDialog;
