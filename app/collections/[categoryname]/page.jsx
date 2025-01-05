"use client";
import { useEffect, useState } from "react";
import HeadingPart from "@/app/components/productComponents/HeadingPart";
import Pagination from "@/app/components/productComponents/Paignation";
import SideMenue from "@/app/components/categoryNameComponents/SideMenue";
import Cards from "@/app/components/categoryNameComponents/Cards";
import RecentlyViewed from "@/app/components/categoryNameComponents/RecentlyViewed";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "@/app/redux-system/slices/categoryProductsSlice";
import Loading from "@/app/components/Loading";

// import { useSearchParams } from 'next/navigation';

export default function Home({ params }) {
  const { categoryDataProducts, categoryProductsLoading } = useSelector(
    (state) => state.categoryProductsData
  );
  const [pageHeight, setPageHeight] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setPageHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryProducts(params?.categoryname));
  }, []);

if(categoryProductsLoading){
  return <Loading />
}

  return (
    <div className="mt-[12em] w-full flex flex-col mb-[2em]">
      <HeadingPart headerName={categoryDataProducts?.categoryData?.category_description?.name}/>
      <div className="w-full mt-[3em] flex gap-[3em] px-3 py-2">
        <SideMenue />
        <Cards products={categoryDataProducts?.productsList} />
      </div>
      <Pagination />
      <hr className="w-full mt-4" />
      {/* <RecentlyViewed /> */}
    </div>
  );
}
