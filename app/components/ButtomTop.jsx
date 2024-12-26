'use client'
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحقق من حالة الاسكرول
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // السكورل لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 rounded-none bg-black text-white shadow-lg hover:opacity-40 focus:outline-none  transition"
        >
          <IoIosArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
