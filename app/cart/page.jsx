"use client";
import React, { useEffect } from "react";
import LayoutCart from "../components/layout/LayoutCart";
import CartHeader from "../components/CartHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteProduct,
  getCartProducts,
  increment,
} from "../redux-system/slices/cartSlice";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Loading from "../components/Loading";

const Cart = () => {
  const { cartProducts, cartLoading } = useSelector(
    (state) => state.cartDataProducts
  );

  console.log(cartProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  if (cartLoading) {
    return <Loading />;
  }

  return (
    <LayoutCart>
      <CartHeader />
      {cartProducts?.cartData.length > 0 ? (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center w-full">
          <div className="p-[3em] lg:p-[7em] w-full">
            <h1 className="text-center text-[2em] mt-[1.5em]">CART</h1>
            {/* Cart Table */}
            <div className="overflow-x-auto mt-[2em]">
              <table className="w-full border-collapse">
                <thead className="hidden md:table-header-group">
                  <tr className="text-sm font-medium text-gray-500 border-b">
                    <th className="py-3 text-left">PRODUCT</th>
                    <th className="py-3 text-center">QUANTITY</th>
                    <th className="py-3 text-right">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts?.cartData.map((prod, index) => (
                    <tr
                      key={index}
                      className="flex flex-col justify-center md:table-row md:flex-row md:items-center"
                    >
                      <td className="py-4 flex items-center  md:table-cell">
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                          }/${prod?.image.replace(/ /g, "%20")}`}
                          alt="Product Image"
                          className="w-20 h-28 mr-4"
                        />
                        <div>
                          {/* <Link href={`/collections/`} className="text-sm font-semibold">{prod?.name}</Link> */}
                          {/* <p className="text-sm text-gray-500">White / EU 36</p> */}
                          <p className="text-sm font-semibold">
                            {prod?.price} EG
                          </p>
                        </div>
                      </td>
                      <td className="py-4 lg:pt-0 text-center flex flex-row justify-between items-start  md:table-cell md:flex-row md:justify-center md:items-center">
                        <div className="flex justify-center items-center">
                          <button
                            className="w-8 h-8 border rounded-md flex items-center justify-center"
                            onClick={() => dispatch(decrement(prod && prod))}
                          >
                            -
                          </button>
                          <span className="w-10 text-center">
                            {prod?.quantity}
                          </span>
                          <button
                            className="w-8 h-8 border rounded-md flex items-center justify-center"
                            onClick={() => dispatch(increment(prod && prod))}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch(deleteProduct(prod && prod))}
                          className="text-gray-500 text-sm mt-2  hover:underline transition-all underline"
                        >
                          REMOVE
                        </button>
                      </td>
                      <td className="hidden md:block py-4 text-right font-semibold">
                        {prod?.totalPrice} EG
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Add Order Note */}
            <div className="mt-6 flex items-center justify-between md:flex-row gap-4">
              {/* Total Section */}
              <div className="flex flex-col items-end justify-start gap-4">
                <div className="flex justify-start gap-4 flex-col items-end mt-6 pt-4">
                  <p className="text-lg font-medium">
                    TOTAL:{" "}
                    {cartProducts?.cartData
                      .map((prod) => prod?.totalPrice)
                      .reduce((x, y) => x + y)}{" "}
                    EG
                  </p>
                  <p className="text-sm text-gray-500">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                {/* Checkout Button */}
                <button className="custom-btn font-thin tracking-widest">
                  <span>CHECKOUT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full justify-center items-center h-screen gap-[1em]">
            <h1 className="text-xl font-thin">Your cart is empty</h1>
            <Button className="text-white tracking-widest	text-md font-thin rounded-none">
              <Link href={`/collections`}>SHOP OUR PRODUCTS</Link>
            </Button>
          </div>
          <hr className="w-full" />
          {/* <div>
            <h1>Recently viewed</h1>
          </div> */}
        </>
      )}

      {/* shwon when there is any products added */}
      {/* <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-[10em]">
        <h2 className="text-2xl font-semibold text-center mb-4 tracking-widest">
          CART
        </h2>
        <p className="text-gray-500 text-center mb-6">
          You are eligible for free shipping!
        </p>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/120x150" // صورة المنتج
              alt="Product"
              className="w-28 h-auto object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-gray-800 font-medium mb-1">
                CHANDELIER 105 CRYSTAL-EMBELLISHED SAND…
              </h3>
              <p className="text-gray-500 text-sm">IVORY / EU 36.5</p>
              <p className="text-gray-500 text-sm mt-2">510 KD</p>
            </div>
          </div>

          <div className="flex items-center">
            <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              –
            </button>
            <span className="px-4">1</span>
            <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">
              +
            </button>
          </div>

          <p className="text-gray-800 font-semibold">510 KD</p>
        </div>

        <div className="flex justify-end items-center mt-4 space-x-8">
          <button className="text-gray-500 hover:underline">REMOVE</button>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            CHECKOUT
          </button>
        </div>
      </div> */}
    </LayoutCart>
  );
};

export default Cart;
