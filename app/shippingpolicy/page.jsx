import React from 'react'

const ShippingPolicy = () => {
  return (
    <div className="mt-[13em] flex justify-center items-center flex-col w-full border-b-[1px]">
        <h1 className="text-xl font-bold uppercase tracking-wider">Shipping Policy</h1>
        {/* Delivery policy */}
        <div className="flex flex-col max-w-[50%] mt-5">
          <h1 className="font-bold text-lg uppercase tracking-wider">Delivery policy</h1>
          <p>At DETAYLAR, we strive to deliver your purchases in excellent condition as seamlessly and quickly as possible. Same day delivery is available for some products for Egypt residents provided that the orders are placed before 4pm on a business day. Orders will be processed the next business day if placed after 4pm. We deliver to gcc countries within 2-4 days of order confirmation and to the rest of the world within 5-7 days. Dhl is our shipping partner for international destinations.</p>
        </div>
        {/* Delivery information*/}
        <div className="flex flex-col max-w-[50%] mt-5">
          <h1 className="font-bold text-lg uppercase tracking-wider">Delivery information</h1>
          <p>We request that you provide accurate addresses and appropriate landmarks for successful delivery to your location. You are also requested to collect your order and sign for it or have someone do it for you after its reception on the designated delivery day.</p>
        </div>
        {/* Insurance */}
        <div className="flex flex-col max-w-[50%] mt-5 mb-7">
          <h1 className="font-bold text-lg uppercase tracking-wider">Insurance</h1>
          <p>DETAYLAR takes responsibility of your order up to the time it has been delivered to the mentioned address. After the order is delivered, the responsibility passes on to you or to the recipient to whom the package has been delivered in case of gifting.</p>
        </div>
    </div>
  )
}

export default ShippingPolicy;