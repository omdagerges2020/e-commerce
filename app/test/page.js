import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="mt-[10em]">
        <h1>test</h1>
        <Image src="/assets/images/img-1.png" width={100} height={100} alt='test img'/>
    </div>
  )
}

export default Page;