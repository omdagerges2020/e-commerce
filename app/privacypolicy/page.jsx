import React from 'react'

const Privacy = () => {
  return (
    <div className="mt-[13em] flex justify-center items-center flex-col w-full border-b-[1px]">
    <h1 className="text-xl font-bold uppercase tracking-wider">Privacy policy</h1>
    {/* Privacy Policy*/}
    <div className="flex flex-col max-w-[50%] mt-5">
      <h1 className="font-bold text-lg uppercase tracking-wider">Privacy Policy</h1>
      <p>At DETAYLAR, we respect the privacy of our users and our detailed privacy policy states how we use, collect, store and share the data provided by you. By visiting the website or supplying personal information toDETAYLAR you agree to the terms listed under the privacy & cookie policy of this website. We update this policy from time to time and it is your responsibility to check on the updates to be in the know of the latest policy applicable to you.</p>
    </div>

    {/*Data Collected By Us*/}
    <div className="flex flex-col max-w-[50%] mt-5">
      <h1 className="font-bold text-lg uppercase tracking-wider">Data Collected By Us</h1>
      <p>Your personal information is collected byDETAYLAR when you interact with us in any way. This information may originate from anywhere ranging from placing an order on the website to clicking on an advertisement we posted somewhere. You are subject to the terms documented under the website's privacy policy when you engage with us on any media. We may also receive information about you from third party sources with whom we have a business relationship.</p>
    </div>

    {/* How safe is my data */}
    <div className="flex flex-col max-w-[50%] mt-5 mb-7">
      <h1 className="font-bold text-lg uppercase tracking-wider">How safe is my data</h1>
      <p>Every piece of information received byDETAYLAR is encrypted with secure socket layer ssl which encrypts your information while it is being delivered to us, to prevent unauthorized use of your information. We keep our security system updated and strive hard to safeguard your data at all levels. However, since data transmission on the internet is never absolutely secure we dont guarantee the security of the data transmitted by you on our website.</p>
    </div>
</div>
  )
}

export default Privacy;