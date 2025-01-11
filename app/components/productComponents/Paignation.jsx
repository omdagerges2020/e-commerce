"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {
  productsPaginationFirst,
  productsPaginationLast,
  productsPaginationNext,
  productsPaginationPrev,
} from "@/app/redux-system/slices/paignationSlice";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Pagination = ({ productsBtnsNumber }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 xs:gap-1 items-center lg:gap-4 justify-center mt-[4em] mb-6">
      <Button
        variant="text"
        className="flex items-center gap-1 xs:px-[.5rem]"
        onClick={() => dispatch(productsPaginationFirst())}
        disabled={productsBtnsNumber === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> First
      </Button>
      <Button
        className="xs:text-[10px]"
        onClick={() => dispatch(productsPaginationPrev())}
        disabled={productsBtnsNumber === 1}
      >
        Prev
      </Button>
      <div className="flex items-center gap-2">
        <IconButton>{productsBtnsNumber}</IconButton>
      </div>
      <Button
        className="xs:text-[10px]"
        onClick={() => dispatch(productsPaginationNext())}
        disabled={productsBtnsNumber === 50}
      >
        Next
      </Button>
      <Button
        variant="text"
        className="flex items-center gap-1 xs:px-[.5rem]"
        onClick={() => dispatch(productsPaginationLast())}
        disabled={productsBtnsNumber === 50}
      >
        Last
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
