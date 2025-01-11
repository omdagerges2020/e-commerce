import React from 'react'
import AccordionCheckout from './AccordionCheckout'
import DeliveryPart from './DeliveryPart'
import PaymentPart from './PaymentPart'

const DeliveryAndPayment = () => {
  return (
    <div className="w-full md:w-full lg:w-[50%] mt-[2em] border-r-2 bg-white pl-[4em] pr-[2em] flex flex-col h-screen overflow-y-scroll">
        <AccordionCheckout/>
        <DeliveryPart/>
        <PaymentPart/>
    </div>
  )
}

export default DeliveryAndPayment