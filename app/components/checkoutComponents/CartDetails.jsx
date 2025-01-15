"use client";
import { getCartProducts } from "@/app/redux-system/slices/cartSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const CartDetails = () => {
  const { cartProducts, cartLoading } = useSelector(
    (state) => state.cartDataProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  return (
    <div className="w-full md:w-full lg:w-[50%] h-screen bg-[#FAFAFA] pr-[4em] pl-[2em] flex flex-col">
      {cartProducts && cartProducts?.cartData.length > 0 &&
        cartProducts?.cartData.map((prod, index) => (
          <div
            key={index}
            className="mt-[2em] flex justify-between items-center"
          >
            <div className="flex gap-2 justify-center items-center">
              {/* image div */}
              <div className="relative w-[60px] h-[60px] rounded-md border flex justify-center">
                <Image
                  width={30}
                  height={0}
                  alt="prod image"
                  src={`${
                    process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                  }/${prod?.image?.replace(/ /g, "%20")}`}
                />
                <span className="absolute bottom-[2.8rem] right-[-5px] text-white rounded-full bg-[#6E6E6E] w-[20px] h-[20px] text-center">
                  {prod?.quantity}
                </span>
              </div>
              {/* name && size&color div */}
              <div className="flex flex-col justify-center">
                <h1>{prod?.name}</h1>
                {prod?.option !== null && (
                  <h1>
                    {prod?.option?.size !== null && prod?.option?.size}{" "}
                    {prod?.option?.color !== null && prod?.option?.color}
                  </h1>
                )}
              </div>
            </div>
            <h1>EGP {prod?.totalPrice}</h1>
          </div>
        ))}
      {/* subtotal */}
      <div className="flex flex-col justify-center mt-9 gap-5">
        <div className="flex justify-between items-center">
          <h1>Subtotal • {cartProducts?.cartCount} items</h1>
          <h1>EGP {cartProducts?.subTotal}</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h1>Delivery</h1>
            <RxQuestionMarkCircled />
          </div>
          <h1>FREE</h1>
        </div>
        <div className="flex justify-between items-center font-bold text-lg">
          <h1>Total</h1>
          <h1>EGP {cartProducts?.subTotal}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
