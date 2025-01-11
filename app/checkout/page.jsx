import React from "react";
import LayoutCheckout from "../components/layout/LayoutCheckout";
import CheckoutHeader from "../components/CheckoutHeader";
import DeliveryAndPayment from "../components/checkoutComponents/DeliveryAndPayment";
import CartDetails from "../components/checkoutComponents/CartDetails";

const Checkout = () => {
  return (
    <LayoutCheckout>
      <CheckoutHeader/>
      <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center md:justify-center lg:justify-between">
        <DeliveryAndPayment/>
        <CartDetails/>
      </div>
    </LayoutCheckout>
  );
};

export default Checkout;
