"use client";
import React, { useCallback, useEffect } from "react";
// import LayoutCart from "../components/layout/LayoutCart";
// import CartHeader from "../components/CartHeader";
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
import Image from "next/image";
import LayoutCart from "@/app/components/layout/LayoutCart";
import CartHeader from "@/app/components/CartHeader";

const Cart = () => {
  const { cartProducts, cartLoading } = useSelector(
    (state) => state.cartDataProducts
  );

  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    (prod) => dispatch(increment(prod)),
    [dispatch]
  );

  const handleDecrement = useCallback(
    (prod) => dispatch(decrement(prod)),
    [dispatch]
  );

  const handleDelete = useCallback(
    (prod) => dispatch(deleteProduct(prod)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  if (cartLoading) {
    return <Loading />;
  }

  return (
    <LayoutCart>
      <CartHeader />
      {cartProducts && cartProducts?.cartData.length > 0 ? (
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
                      key={prod?.id}
                      className="flex flex-col justify-center md:table-row md:flex-row md:items-center"
                    >
                      <td className="py-4 flex items-center  md:table-cell ">
                        <div className="flex gap-3 ">
                          <Image
                            width={80}
                            height={112}
                            src={`${
                              process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                            }/${prod?.image?.replace(/ /g, "%20")}`}
                            alt="Product Image"
                            className="mr-4"
                            priority 
                            style={{ width: "auto", height: "auto" }}
                          />
                          <div className="flex flex-col">
                            <span>{prod?.name}</span>
                            {prod?.option !== null && (
                              <span>
                                {prod?.option?.color} {prod?.option?.size}
                              </span>
                            )}
                            <p className="text-sm font-semibold">
                              {prod?.price} EG
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 lg:pt-0 text-center flex flex-row justify-between items-start  md:table-cell md:flex-row md:justify-center md:items-center">
                        <div className="flex justify-center items-center">
                          <button
                            className="w-8 h-8 border rounded-md flex items-center justify-center"
                            onClick={() => (handleDecrement(prod))}
                          >
                            -
                          </button>
                          <span className="w-10 text-center">
                            {prod?.quantity}
                          </span>
                          <button
                            className="w-8 h-8 border rounded-md flex items-center justify-center"
                            onClick={() => (handleIncrement(prod))}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => (handleDelete(prod))}
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
                    TOTAL:
                    {cartProducts &&
                      cartProducts?.cartData.length > 0 &&
                      cartProducts?.cartData
                        .map((prod) => prod?.totalPrice)
                        .reduce((x, y) => x + y)}
                    EG
                  </p>
                  <p className="text-sm text-gray-500">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                {/* Checkout Button */}
                <Link href={`./checkout`}>
                  <button className="bg-black text-white hover:bg-white hover:text-black p-3 font-thin tracking-widest">
                    CHECKOUT
                  </button>
                </Link>
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
        </>
      )}
    </LayoutCart>
  );
};

export default Cart;
