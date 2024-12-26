"use client";
import React from "react";
import LayoutCart from "../components/layout/LayoutCart";
import CartHeader from "../components/CartHeader";
import { Button } from "@material-tailwind/react";
const page = () => {
  return (
    <LayoutCart>
      <CartHeader />
      {/* 
      <div className="flex flex-col w-full justify-center items-center h-screen gap-[1em]">
        <h1 className="text-xl font-thin">Your cart is empty</h1>
        <p className="text-[#595959]">Spend 200 KD more and get free shipping!</p>
        <Button className="text-white tracking-widest	text-md font-thin rounded-none">SHOP OUR PRODUCTS</Button>
      </div>
      <hr className="w-full"/>
      <div>
        <h1>Recently viewed</h1>
        
      </div> */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="p-6 w-full max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">CART</h1>
          <p className="text-center text-gray-600 mb-6">
            You are eligible for free shipping!
          </p>
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm font-medium text-gray-500 border-b">
                  <th className="py-3 text-left">PRODUCT</th>
                  <th className="py-3 text-center">QUANTITY</th>
                  <th className="py-3 text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 flex items-center">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Product Image"
                      className="w-20 h-20 rounded-lg mr-4"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        Flow Runner Low-Top Sneakers
                      </p>
                      <p className="text-sm text-gray-500">White / EU 36</p>
                      <p className="text-sm font-semibold">205 KD</p>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex justify-center items-center">
                      <button
                        className="w-8 h-8 border rounded-md flex items-center justify-center"
                        // onClick={handleDecrease}
                      >
                        -
                      </button>
                      <span className="w-10 text-center"></span>
                      <button
                        className="w-8 h-8 border rounded-md flex items-center justify-center"
                        // onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>
                    <button className="text-gray-500 text-sm mt-2  hover:underline transition-all">
                      REMOVE
                    </button>
                  </td>
                  <td className="py-4 text-right font-semibold">4234 KD</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Add Order Note */}
          <div className="mt-6 flex items-center justify-between md:flex-row gap-4">
            <div className="flex flex-col items-start justify-center">
              <label
                htmlFor="order-note"
                className="block text-base  text-gray-600 mb-2"
              >
                Add Order Note
              </label>
              <textarea
                id="order-note"
                rows="4"
                className="w-full border rounded-md p-2"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            {/* Total Section */}
            <div className="flex flex-col items-end justify-start gap-4">
              <div className="flex justify-start gap-4 flex-col items-end mt-6 pt-4">
                <p className="text-lg font-medium">TOTAL: 34234 KD</p>
                <p className="text-sm text-gray-500">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              {/* Checkout Button */}
              <button class="relative px-8 py-2 rounded-md bg-black isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[black] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:black inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>

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

export default page;
