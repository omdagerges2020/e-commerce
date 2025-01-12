import React from "react";

const Terms = () => {
  return (
    <div className="mt-[13em] flex justify-center items-center flex-col w-full border-b-[1px]">
      <h1 className="text-xl font-bold uppercase tracking-wider">
        Terms of service
      </h1>
      {/* Intro */}
      <div className="flex flex-col max-w-[50%] mt-5">
        <h1 className="font-bold text-lg uppercase tracking-wider">Intro</h1>
        <p>
          Welcome to DETAYLAR.Com, your online portal to all things luxury &
          lifestyle. We hope you enjoy shopping on our website. DETAYLAR is
          owned and operated by DETAYLAR.Com co. Wll and DETAYLAR for the trade
          of jewelry, precious stones and metals co. Wll, for its own benefit
          and the benefit of its affiliates and subsidiaries.
        </p>
      </div>
      {/* Eligibility*/}
      <div className="flex flex-col max-w-[50%] mt-5">
        <h1 className="font-bold text-lg uppercase tracking-wider">
          Eligibility
        </h1>
        <p>
          DETAYLAR is free for use to anyone who is at least 18 years of age,
          can make a payment through one of our accepted payment methods and
          agrees to the terms & conditions listed on the site. DETAYLAR website
          and services are for personal and gifting use only and their use for
          commercial purposes is not permitted. DETAYLAR reserves the right to
          refuse services if it suspects commercial or illegal use.
        </p>
      </div>
      {/* Shoes */}
      <div className="flex flex-col max-w-[50%] mt-5 mb-7">
        <h1 className="font-bold text-lg uppercase tracking-wider">Shoes</h1>
        <p>
          Shoes should be tried on a carpeted surface and be returned in their
          original condition. There shouldn't be any damage to the sole of the
          shoe or the box of the shoe. Return requests for shoes must be placed
          within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Terms;
