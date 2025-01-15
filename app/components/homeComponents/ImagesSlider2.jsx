"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

const ImagesSlider2 = ({ newProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to 4

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

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextSlide = () => {
    const nextIndex =
      currentIndex + cardsToShow >= newProducts?.data && newProducts?.data?.newProducts.length
        ? 0
        : currentIndex + cardsToShow;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - cardsToShow < 0
        ? newProducts?.data && newProducts?.data?.newProducts.length - cardsToShow
        : currentIndex - cardsToShow;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-[3em]">
      <div className="flex items-center justify-between">
        <button
          className="bg-white shadow-md bg-opacity-50 text-black p-3 rounded-full w-[50px] h-[50px]"
          onClick={prevSlide}
        >
          {"<"}
        </button>

        {/* الكاردات */}
        <div className="flex space-x-4 w-full">
          {newProducts?.data?.featuredproducts
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((card, index) => (
              <LazyLoad key={index} className={`w-1/${cardsToShow} p-2 w-full`}>
                <Link
                  href={`/collections/${card.category_id}/${card?.product_id}`}
                  className="border-none rounded-lg overflow-hidden"
                >
                  <div className="w-full h-48 relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${card?.image}`}
                      alt={card?.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-md">{card?.model}</h3>
                    <p className="text-sm font-thin">{`${card?.price}`}</p>
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

export default ImagesSlider2;
