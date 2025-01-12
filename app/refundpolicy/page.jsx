import React from "react";

const Refund = () => {
  return (
    <div className="mt-[13em] flex justify-center items-center flex-col w-full border-b-[1px]">
      <h1 className="text-xl font-bold uppercase tracking-wider">
        Refund policy
      </h1>

      <div className="flex flex-col max-w-[50%] mt-5">
        <p>
          Refund for successfully returned items will be processed and credited
          to the payment method used to make the original purchase.
        </p>
      </div>

      <div className="flex flex-col max-w-[50%] mt-5 mb-5">
        <p>
          Please note the following applicable charges will be deducted from the
          refund amount: KWD 10.000 shipping cost KWD 10.000 return shipping
          cost Approximately between KWD 30.000 50.000 subject to increase
          wherever applicable shipping cost for all Balenciaga products as well
          as boots Approximately between KWD 30.000 50.000 subject to increase
          wherever applicable return shipping cost for all Balenciaga products
          as well as boots All customs duties or taxes including those incurred
          when returned product is received. Successfully returned items that
          were purchased using a promo code will only be refunded original paid
          amount charged after the promotional discount was applied and used
          promo code will no longer be valid. Refunded amount may take up to 14
          days to reflect in your account depending on your bank's processing
          time. For payments made via cash on delivery' option, a non-refundable
          fee of 20 KWD will apply to all orders below 200 kd and 20% on all
          items above 200 KW
        </p>
      </div>
    </div>
  );
};

export default Refund;
