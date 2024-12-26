
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CardCarousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={4}
        spaceBetween={50}
        breakpoints={{
          340: {
            slidesPerView: 1, // عرض كارت واحد للشاشات الصغيرة
            spaceBetween: 10, // تقليل المسافة
          },
          640: {
            slidesPerView: 1, // عرض كارت واحد للشاشات الصغيرة
            spaceBetween: 10, // تقليل المسافة
          },
          768: {
            slidesPerView: 2, // عرض كارتين للشاشات المتوسطة
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // عرض 4 كروت للشاشات الكبيرة
            spaceBetween: 5,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="/collections/shoes/2"
            className=" bg-white shadow-none rounded-lg"
          >
            <div className="relative h-64">
              <img
                src="/assets/images/img-1.png"
                alt="Shoe 1"
                className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
              />
              <img
                src="/assets/images/img-2.png"
                alt="Shoe 1 Hover"
                className="w-full h-full object-cover rounded-t-lg opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold">LOEWE</p>
              <p className="text-gray-600">FLOW RUNNER LOW-TOP</p>
              <p className="text-gray-600">SNEAKERS</p>
              <div>
                <span className="text-gray-600">287 KD</span>
                <span className="text-red-500">395 KD</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardCarousel;
