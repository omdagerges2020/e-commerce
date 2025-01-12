import React from "react";

const Return = () => {
  return (
    <div className="mt-[13em] flex justify-center items-center flex-col w-full border-b-[1px]">
      <h1 className="text-xl font-bold uppercase tracking-wider">
        Return Policy
      </h1>

      <div className="flex flex-col max-w-[50%] mt-5">
        <p>
          If you're dissatisfied with your purchase please place a return
          request via email at concierge@detaylar.com. All returns should be
          requested via email before you ship the item's back to us. This allows
          us to process your return request quickly. If you send us your item's
          without placing a return request to us via email and receiving our
          approval to review the return request and send the product to us, we
          will be obliged to ship the item's back to you at your own expense and
          your return request will automatically be rejected.
        </p>
      </div>

      <div className="flex flex-col max-w-[50%] mt-5">
        <p>
          All items should be returned in their original packaging in perfect
          condition. Return items and all their packaging items should be
          unused, unaltered and in pristine condition with all tags attached.
          Returns that are damaged, soiled, used or returned without their
          original tags and packaging will not be accepted and will be shipped
          back to you at your own expense. You will also be responsible to cover
          the cost of the return shipping to us that was consumed to send us the
          item as well as any associated taxes, duties and/or other fees. Most
          items can be returned within 14 days, however, there are exceptions
          mentioned below.
        </p>
      </div>

      <div className="flex flex-col max-w-[50%] mt-5 mb-7">
        <h1 className="font-bold text-lg uppercase tracking-wider">SHOES</h1>
        <p>
          Shoes should be tried on a carpeted surface and be returned in their
          original condition. There shouldn't be any damage to the sole of the
          shoe or the box of the shoe.
        </p>
      </div>
    </div>
  );
};

export default Return;
