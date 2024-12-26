"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const disigners = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  title: `AEYDE`,
}));
const sizes = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  title: `EU 35`,
}));
const colors = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  title: `BEIGE`,
}));
const boots = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  title: `ANKLE BOOTS`,
}));

const SideMenue = () => {
  const [range, setRange] = useState([23, 1515]);
  const [openCategory, setOpenCategory] = useState({
    category: false,
    designers: false,
    size: false,
    color: false,
    hellheight: false,
    percentsale: false,
    price: false,
  });

  const [openSubCategory, setOpenSubCategory] = useState({
    boots: false,
    heels: false,
    sneakers: false,
  });

  const handleRangeChange = (index, value) => {
    const newRange = [...range];
    newRange[index] = Number(value);
    if (newRange[0] <= newRange[1]) setRange(newRange);
  };

  const toggleCategory = (category) => {
    setOpenCategory({
      ...openCategory,
      [category]: !openCategory[category],
    });
  };

  const toggleSubCategory = (subCategory) => {
    setOpenSubCategory({
      ...openSubCategory,
      [subCategory]: !openSubCategory[subCategory],
    });
  };

  return (
    <div className="hidden lg:block lg:w-[300px]">
      <div className="w-64  bg-white">
        <ul className="space-y-4">
          {/* Category  */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("category")}
            >
              <h3 className="font-thin text-lg">CATEGORY</h3>
              {openCategory.category ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.category && (
              <div className="ml-4 mt-2 space-y-2 ">
                {/* Sub-Link 1 */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubCategory("boots")}
                  >
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>BOOTS</span>
                    </label>
                    {openSubCategory.boots ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubCategory.boots && (
                    <div className="ml-4 mt-2 space-y-2 h-[200px] overflow-y-scroll">
                      {boots.map((boot) => (
                        <label
                          key={boot.id}
                          className="flex items-center space-x-2"
                        >
                          <input type="checkbox" />
                          <span>{boot.title}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                {/* Sub-Link 2 */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubCategory("heels")}
                  >
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>HEELS</span>
                    </label>
                    {openSubCategory.heels ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubCategory.heels && (
                    <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>BLOCK HEELS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>EVENING HEELS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>HEIGH HEELS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>LOW HEELS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>MID HEELS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>MULES</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>PLATFORMS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>PUMPS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>SANDLES</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>STILETTOS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>WEDGES</span>
                      </label>
                    </div>
                  )}
                </div>
                {/* Sub-Link 3 */}
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSubCategory("sneakers")}
                  >
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>SNEAKERS</span>
                    </label>
                    {openSubCategory.sneakers ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </div>
                  {openSubCategory.sneakers && (
                    <div className="ml-4 mt-2 space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>HEIG-TOP SNEAKERS</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          {/* DESIGNERS */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("designers")}
            >
              <h3 className="font-thin text-lg">DESIGNERS</h3>
              {openCategory.designers ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.designers && (
              <div className="mt-2 space-y-4">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="SEARCH OPTIONS"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                {/* Checkboxes */}
                <div className="space-y-2 h-[250px] overflow-y-scroll">
                  {disigners.map((designer) => (
                    <label
                      key={designer.id}
                      className="flex items-center space-x-2"
                    >
                      <input type="checkbox" />
                      <span>{designer.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* SIZE */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("size")}
            >
              <h3 className="font-thin text-lg">SIZE</h3>
              {openCategory.size ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.size && (
              <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                {sizes.map((size) => (
                  <label key={size.id} className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>{size.title}</span>
                  </label>
                ))}
              </div>
            )}
          </li>

          {/* COLOR */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("color")}
            >
              <h3 className="font-thin text-lg">COLOR</h3>
              {openCategory.color ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.color && (
              <div className="ml-4 mt-2 space-y-2 h-[250px] overflow-y-scroll">
                {colors.map((color) => (
                  <label key={color.id} className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>{color.title}</span>
                  </label>
                ))}
              </div>
            )}
          </li>
          {/* HEEL-HEIGHT */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("hellheight")}
            >
              <h3 className="font-thin text-lg">HEEL HEIGHT</h3>
              {openCategory.hellheight ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.hellheight && (
              <div className="ml-4 mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>LOW HEELS</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>MID HEELS</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>HIGH HEELS</span>
                </label>
              </div>
            )}
          </li>
          {/* PERCENT SALE */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("percentsale")}
            >
              <h3 className="font-thin text-lg">PERCENT SALE</h3>
              {openCategory.percentsale ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.percentsale && (
              <div className="ml-4 mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>ABOVE 70%</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>50% - 70%</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>30% - 50%</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>10% - 30%</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>UNDER 10%</span>
                </label>
              </div>
            )}
          </li>
          {/* PRICE */}
          <li className="border-b-[1px]	pb-[1em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("price")}
            >
              <h3 className="font-thin text-lg">PRICE</h3>
              {openCategory.price ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.price && (
              <div className="mt-2 space-y-2">
                <div className="flex flex-col items-center justify-center  max-w-md mx-auto">
                  {/* الحقول */}
                  <div className="flex justify-between items-center mb-4 gap-2">
                    <input
                      type="number"
                      value={range[0]}
                      onChange={(e) => handleRangeChange(0, e.target.value)}
                      className="w-20 border border-gray-300 rounded p-2 text-center"
                    />
                    <span className="text-lg font-medium">-</span>
                    <input
                      type="number"
                      value={range[1]}
                      onChange={(e) => handleRangeChange(1, e.target.value)}
                      className="w-20 border border-gray-300 rounded p-2 text-center"
                    />
                  </div>

                  {/* السلايدر */}
                  <div className="relative w-full h-2 bg-gray-300 rounded">
                    <input
                      type="range"
                      min="23"
                      max="1515"
                      value={range[0]}
                      onChange={(e) => handleRangeChange(0, e.target.value)}
                      className="absolute appearance-none w-full h-2 bg-transparent"
                      style={{ zIndex: 1 }}
                    />
                    <input
                      type="range"
                      min="23"
                      max="1515"
                      value={range[1]}
                      onChange={(e) => handleRangeChange(1, e.target.value)}
                      className="absolute appearance-none w-full h-2 bg-transparent"
                    />
                    <div
                      className="absolute h-2 bg-blue-500 rounded"
                      style={{
                        left: `${((range[0] - 23) / (1515 - 23)) * 100}%`,
                        right: `${
                          100 - ((range[1] - 23) / (1515 - 23)) * 100
                        }%`,
                      }}
                    />
                  </div>

                  {/* الأرقام تحت السلايدر */}
                  <div className="flex justify-between w-full mt-2">
                    <span>{range[0]}</span>
                    <span>{range[1]}</span>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenue;
