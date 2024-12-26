import React from 'react'
import CardCarousel from './carosel'

const RecentlyViewed = () => {
  return (
    <div className="mt-[3em] flex justify-center items-center flex-col">
        <h1 className="text-2xl tracking-widest mb-[3em]">Recently Viewed</h1>
        <CardCarousel/>
        <hr className="w-full mt-[2em]"/>
    </div>
  )
}

export default RecentlyViewed