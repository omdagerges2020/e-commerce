"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';


const ImagesSlider = ({ newProducts }) => {
  console.log(newProducts?.data?.newProducts);

  // const cards = Array.from({ length: 36 }, (_, index) => ({
  //   id: index + 1,
  //   title: `RENE `,
  //   mainPrice: 362.0,
  //   afterDiscount: 217.0,
  //   image: "https://cdn.shopify.com/s/files/1/0521/9926/0341/products/CE0124_20AX191_2080999_20B_600x.jpg?v=1680696656",
  // }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to 4

  // تحديث عدد الكروت بناءً على عرض الشاشة
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // شاشات صغيرة
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3); // شاشات متوسطة
      } else {
        setCardsToShow(4); // شاشات كبيرة
      }
    };

    // استدعاء عند التحميل وعند تغيير الحجم
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextSlide = () => {
    const nextIndex =
      currentIndex + cardsToShow >= newProducts?.data?.newProducts.length
        ? 0
        : currentIndex + cardsToShow;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - cardsToShow < 0
        ? newProducts?.data?.newProducts.length - cardsToShow
        : currentIndex - cardsToShow;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-[3em]">
      <div className="flex items-center justify-between">
        {/* زر "السابق" */}
        <button
          className="bg-white shadow-md bg-opacity-50 text-black p-3 rounded-full w-[50px] h-[50px]"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        {/* الكاردات */}
        <div className="flex space-x-4 w-full">
          {newProducts?.data?.newProducts
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((card, index) => (
              <LazyLoad key={index} className={`w-1/${cardsToShow} p-2 w-full`}>
                <Link
                  href={`/collections/${card.category_id}/${card.id}`}
                  className="border-none rounded-lg overflow-hidden"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${card?.image}`}
                    alt={card?.model}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-md">{card.model}</h3>
                    <div className="flex gap-2">
                      <p className={`text-sm font-thin ${card?.special !== null && "line-through"}`}>{`${card?.price}`}</p>
                      {card?.special !== null && (
                        <p className="text-red-500 text-sm font-thin">{`${card?.special?.price}`}</p>
                      )}
                    </div>
                    {card?.special !== null && (
                      <div className="flex flex-col">
                        <span>Start Date: {card?.special?.start_date}</span>
                        <span>End Date: {card?.special?.end_date}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </LazyLoad>
            ))}
        </div>

        {/* زر "التالي" */}
        <button
          className="bg-white shadow-md bg-opacity-50 text-black p-3 rounded-full w-[50px] h-[50px]"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
