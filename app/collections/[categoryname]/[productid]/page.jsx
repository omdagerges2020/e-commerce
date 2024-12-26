"use client";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TbRuler2 } from "react-icons/tb";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import CardCarousel from "@/app/components/categoryNameComponents/carosel";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "@/app/redux-system/slices/productDetailsSlice";
import ProductGallery from "@/app/components/productDetailsComponents/ProductGallery";

// const ProductGallery = ({ params }) => {
//   const {productDetails} = useSelector(state => state.productDetailsData);

//   console.log(params.productid);

//   console.log(productDetails);
//   const dispatch = useDispatch()

//     useEffect(()=>{
//       dispatch((getProductDetails(params.productid)));
//     },[])

//   const imageRefs = useRef([]);

//   const [openCategory, setOpenCategory] = useState({
//     description: false,
//     size: false,
//     color: false,
//     policy: false,
//   });

//   const scrollToImage = (index) => {
//     if (imageRefs.current[index]) {
//       imageRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const toggleCategory = (category) => {
//     setOpenCategory({
//       ...openCategory,
//       [category]: !openCategory[category],
//     });
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="flex justify-center items-start gap-[4em] mt-8">
//         {/* Small Pictures */}
//         <div className="flex flex-col space-y-4">
//           {productDetails?.data?.productImages.map((image, index) => (
//             <img
//               key={index}
//               src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.image.replace(/ /g, "%20")}`}
//               alt={`Thumbnail ${index}`}
//               onClick={() => scrollToImage(index)} // التنقل للصورة الكبيرة
//               className="w-20 h-24 object-cover cursor-pointer	focus:ring-4 focus:ring-black"
//             />
//           ))}
//         </div>

//         {/* Large Pictures */}
//         <div
//           className="flex flex-col space-y-4 h-[70vh] overflow-scroll"
//           style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
//         >
//           {productDetails?.data?.productImages.map((image, index) => (
//             <div
//               key={index}
//               ref={(el) => (imageRefs.current[index] = el)}
//               className="flex justify-center"
//             >
//               <img
//                 src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.image.replace(/ /g, "%20")}`}
//                 alt={`Large Image ${index}`}
//                 className="w-[500px] h-auto object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-[5em]">
//         <ul className="space-y-4">
//           {/* Category  */}
//           <li className="border-b-[1px] border-t-[1px]	pb-[2em] pt-[2em]">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleCategory("description")}
//             >
//               <h3 className="font-thin text-lg">Description</h3>
//               {openCategory.description ? <FaMinus /> : <FaPlus />}
//             </div>
//             {openCategory.description && (
//               <div className="ml-4 mt-2 space-y-2 h-[250px]">
//                 <ul className="pl-5 list-disc mt-[.5em]">
//                   <li>Material: 100% satin</li>
//                   <li>Open round toe</li>
//                   <li>Double straps</li>
//                   <li>Spring around the ankle</li>
//                   <li>Snake-head finish</li>
//                   <li>Embellished rhinestones and pendants</li>
//                   <li>Made in Italy</li>
//                   <li>This is an evening heel</li>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li className="border-b-[1px] 	pb-[2em] pt-[2em]">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleCategory("size")}
//             >
//               <h3 className="font-thin text-lg">SIZE & FIT</h3>
//               {openCategory.size ? <FaMinus /> : <FaPlus />}
//             </div>
//             {openCategory.size && (
//               <div className="ml-4 mt-2 space-y-2 h-[250px]">
//                 <ul className="pl-5 list-disc mt-[.5em]">
//                   <li>IT/EU sizing</li>
//                   <li>Fits true to size, take your regular size</li>
//                   <li>Heel height: 10.5 cm</li>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li className="border-b-[1px]	pb-[2em] pt-[2em]">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleCategory("policy")}
//             >
//               <h3 className="font-thin text-lg">RETURN POLICY</h3>
//               {openCategory.policy ? <FaMinus /> : <FaPlus />}
//             </div>
//             {openCategory.policy && (
//               <div className="ml-4 mt-2 space-y-2 h-[250px]">
//                 {/* <ul className="pl-5 list-disc mt-[.5em]">
//                   <li>Material: 100% satin</li>
//                   <li>Open round toe</li>
//                   <li>Double straps</li>
//                   <li>Spring around the ankle</li>
//                   <li>Snake-head finish</li>
//                   <li>Embellished rhinestones and pendants</li>
//                   <li>Made in Italy</li>
//                   <li>This is an evening heel</li>
//                 </ul> */}
//                 <span>
//                   PLEASE READ OUR RETURNS POLICY, WHICH IS LOCATED IN OUR TERMS
//                   & CONDITIONS PAGE, CAREFULLY BEFORE ORDERING.
//                 </span>
//                 <span>
//                   YOU CAN RETURN MOST BUT NOT ALL PRODUCTS WITHIN 14 DAYS OF
//                   RECEIVING THEM PROVIDED THAT ALL ITEMS ARE IN PERFECT AND
//                   UNUSED CONDITION WITH ALL THE ORIGINAL TAGS ATTACHED.
//                 </span>
//                 <span>
//                   PLEASE NOTE THAT THE RETURN REQUEST FOR CATEGORIES SUCH AS
//                   EVENING WEAR, SHOES, JEWELRY MUST BE PLACED WITHIN 24 HOURS OF
//                   RECEIVING THE ITEMS.
//                 </span>
//                 <span>
//                   UNDERGARMENTS, SWIMMING SUITS, FRAGRANCES, BEAUTY ITEMS CANNOT
//                   BE RETURNED. SPECIAL ORDER OR PERSONALIZED ITEMS CANNOT BE
//                   RETURNED.
//                 </span>
//                 <span>
//                   SHOES SHOULD BE RETURNED UNMARKED ALONG WITH THE PACKAGING IN
//                   PERFECT CONDITION.
//                 </span>
//                 <span>
//                   ITEMS THAT ARE USED, DAMAGED, SOILED OR RETURNED WITHOUT THE
//                   CORRECT PACKAGING, LABELS AND DESIGNER AUTHENTICITY CARDS IN
//                   PERFECT CONDITION MAY NOT BE ACCEPTED AND WILL BE SENT BACK TO
//                   THE CLIENT AT THE CLIENT'S EXPENSE.
//                 </span>
//                 <span>
//                   PLEASE NOTE THAT REFUNDS WILL BE MADE AFTER DEDUCTING THE COST
//                   OF SHIPPING BOTH WAYS AND ANY ASSOCIATED CUSTOMS.
//                 </span>
//                 <span>
//                   PLEASE REFER TO THE RETURNS SECTION OF OUR TERMS & CONDITIONS
//                   FOR MORE DETAILS.
//                 </span>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// images
const images = [
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-1_800x.jpg?v=1699195418",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-2_800x.jpg?v=1699195417",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST_800x.jpg?v=1699195417",
];

export default function ProductPage({ params }) {
  const { productDetails } = useSelector((state) => state.productDetailsData);

  console.log(params.productid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(params.productid));
  }, []);

  // const {productDetails} = useSelector(state => state.productDetailsData);

  // console.log(productDetails);

  // const dispatch = useDispatch()

  //   useEffect(()=>{
  //     dispatch((getProductDetails(params.productid)));
  // const ProductGallery = ({ params }) => {
  //   const {productDetails} = useSelector(state => state.productDetailsData);

  //   console.log(params.productid);

  //   console.log(productDetails);
  //   const dispatch = useDispatch()

  //     useEffect(()=>{
  //       dispatch((getProductDetails(params.productid)));
  //     },[])

  //   const imageRefs = useRef([]);

  //   const [openCategory, setOpenCategory] = useState({
  //     description: false,
  //     size: false,
  //     color: false,
  //     policy: false,
  //   });

  //   const scrollToImage = (index) => {
  //     if (imageRefs.current[index]) {
  //       imageRefs.current[index].scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   };

  //   const toggleCategory = (category) => {
  //     setOpenCategory({
  //       ...openCategory,
  //       [category]: !openCategory[category],
  //     });
  //   };

  //   return (
  //     <div className="flex flex-col">
  //       <div className="flex justify-center items-start gap-[4em] mt-8">
  //         {/* Small Pictures */}
  //         <div className="flex flex-col space-y-4">
  //           {productDetails?.data?.productImages.map((image, index) => (
  //             <img
  //               key={index}
  //               src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.image.replace(/ /g, "%20")}`}
  //               alt={`Thumbnail ${index}`}
  //               onClick={() => scrollToImage(index)} // التنقل للصورة الكبيرة
  //               className="w-20 h-24 object-cover cursor-pointer	focus:ring-4 focus:ring-black"
  //             />
  //           ))}
  //         </div>

  //         {/* Large Pictures */}
  //         <div
  //           className="flex flex-col space-y-4 h-[70vh] overflow-scroll"
  //           style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
  //         >
  //           {productDetails?.data?.productImages.map((image, index) => (
  //             <div
  //               key={index}
  //               ref={(el) => (imageRefs.current[index] = el)}
  //               className="flex justify-center"
  //             >
  //               <img
  //                 src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.image.replace(/ /g, "%20")}`}
  //                 alt={`Large Image ${index}`}
  //                 className="w-[500px] h-auto object-cover"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       <div className="mt-[5em]">
  //         <ul className="space-y-4">
  //           {/* Category  */}
  //           <li className="border-b-[1px] border-t-[1px]	pb-[2em] pt-[2em]">
  //             <div
  //               className="flex justify-between items-center cursor-pointer"
  //               onClick={() => toggleCategory("description")}
  //             >
  //               <h3 className="font-thin text-lg">Description</h3>
  //               {openCategory.description ? <FaMinus /> : <FaPlus />}
  //             </div>
  //             {openCategory.description && (
  //               <div className="ml-4 mt-2 space-y-2 h-[250px]">
  //                 <ul className="pl-5 list-disc mt-[.5em]">
  //                   <li>Material: 100% satin</li>
  //                   <li>Open round toe</li>
  //                   <li>Double straps</li>
  //                   <li>Spring around the ankle</li>
  //                   <li>Snake-head finish</li>
  //                   <li>Embellished rhinestones and pendants</li>
  //                   <li>Made in Italy</li>
  //                   <li>This is an evening heel</li>
  //                 </ul>
  //               </div>
  //             )}
  //           </li>
  //           <li className="border-b-[1px] 	pb-[2em] pt-[2em]">
  //             <div
  //               className="flex justify-between items-center cursor-pointer"
  //               onClick={() => toggleCategory("size")}
  //             >
  //               <h3 className="font-thin text-lg">SIZE & FIT</h3>
  //               {openCategory.size ? <FaMinus /> : <FaPlus />}
  //             </div>
  //             {openCategory.size && (
  //               <div className="ml-4 mt-2 space-y-2 h-[250px]">
  //                 <ul className="pl-5 list-disc mt-[.5em]">
  //                   <li>IT/EU sizing</li>
  //                   <li>Fits true to size, take your regular size</li>
  //                   <li>Heel height: 10.5 cm</li>
  //                 </ul>
  //               </div>
  //             )}
  //           </li>
  //           <li className="border-b-[1px]	pb-[2em] pt-[2em]">
  //             <div
  //               className="flex justify-between items-center cursor-pointer"
  //               onClick={() => toggleCategory("policy")}
  //             >
  //               <h3 className="font-thin text-lg">RETURN POLICY</h3>
  //               {openCategory.policy ? <FaMinus /> : <FaPlus />}
  //             </div>
  //             {openCategory.policy && (
  //               <div className="ml-4 mt-2 space-y-2 h-[250px]">
  //                 {/* <ul className="pl-5 list-disc mt-[.5em]">
  //                   <li>Material: 100% satin</li>
  //                   <li>Open round toe</li>
  //                   <li>Double straps</li>
  //                   <li>Spring around the ankle</li>
  //                   <li>Snake-head finish</li>
  //                   <li>Embellished rhinestones and pendants</li>
  //                   <li>Made in Italy</li>
  //                   <li>This is an evening heel</li>
  //                 </ul> */}
  //                 <span>
  //                   PLEASE READ OUR RETURNS POLICY, WHICH IS LOCATED IN OUR TERMS
  //                   & CONDITIONS PAGE, CAREFULLY BEFORE ORDERING.
  //                 </span>
  //                 <span>
  //                   YOU CAN RETURN MOST BUT NOT ALL PRODUCTS WITHIN 14 DAYS OF
  //                   RECEIVING THEM PROVIDED THAT ALL ITEMS ARE IN PERFECT AND
  //                   UNUSED CONDITION WITH ALL THE ORIGINAL TAGS ATTACHED.
  //                 </span>
  //                 <span>
  //                   PLEASE NOTE THAT THE RETURN REQUEST FOR CATEGORIES SUCH AS
  //                   EVENING WEAR, SHOES, JEWELRY MUST BE PLACED WITHIN 24 HOURS OF
  //                   RECEIVING THE ITEMS.
  //                 </span>
  //                 <span>
  //                   UNDERGARMENTS, SWIMMING SUITS, FRAGRANCES, BEAUTY ITEMS CANNOT
  //                   BE RETURNED. SPECIAL ORDER OR PERSONALIZED ITEMS CANNOT BE
  //                   RETURNED.
  //                 </span>
  //                 <span>
  //                   SHOES SHOULD BE RETURNED UNMARKED ALONG WITH THE PACKAGING IN
  //                   PERFECT CONDITION.
  //                 </span>
  //                 <span>
  //                   ITEMS THAT ARE USED, DAMAGED, SOILED OR RETURNED WITHOUT THE
  //                   CORRECT PACKAGING, LABELS AND DESIGNER AUTHENTICITY CARDS IN
  //                   PERFECT CONDITION MAY NOT BE ACCEPTED AND WILL BE SENT BACK TO
  //                   THE CLIENT AT THE CLIENT'S EXPENSE.
  //                 </span>
  //                 <span>
  //                   PLEASE NOTE THAT REFUNDS WILL BE MADE AFTER DEDUCTING THE COST
  //                   OF SHIPPING BOTH WAYS AND ANY ASSOCIATED CUSTOMS.
  //                 </span>
  //                 <span>
  //                   PLEASE REFER TO THE RETURNS SECTION OF OUR TERMS & CONDITIONS
  //                   FOR MORE DETAILS.
  //                 </span>
  //               </div>
  //             )}
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };
  //   },[])

  console.log(params.productid);

  const [count, setCount] = useState(1);

  return (
    <>
      <div className="p-10 grid gird-cols-1 lg:grid-cols-2 gap-[4em] bg-white mt-[10em] w-full">
        <ProductGallery images={images} prodId={params.productid} />
        <div className="mt-8 lg:max-w-[410px]">
          <h3 className="mb-4">Title Of Product</h3>
          <h1 className="text-2xl mb-4  tracking-[.2em]">
            {productDetails?.data?.data?.product_description?.name}
          </h1>
          <span className="text-[#686868] text-md mb-2">510 KD</span>
          <p className="bg-[#F7F7F7] text-[#686868]">
            Includes all taxes & duties if shipping to USA, Kuwait or KSA; You
            will not pay anything else upon delivery Read more{" "}
            <a href="./" target="_blank" className="underline">
              here
            </a>
            .
          </p>
          <div className="flex flex-col gap-2 justify-center items-center px-3 mt-4 border-2 border-[#EEEEEE] p-5">
            <div className="flex gap-3">
              <img
                src="https://shapp.thahab.com/storage/eta/icons/R1J8bfkEGfugobwwv7Zqg0Ok6L4zTlyUyNWz0DzY.jpg"
                alt="plane"
                className="w-[60px]"
              />
              <span className="text-[#666666]">Shipped within 4 days</span>
            </div>
            <div className="flex flex-col justify-center items-center text-[#828282]">
              <h1 className="text-sm">
                This estimate is not guaranteed. For more details refer to
              </h1>
              <a href="./" className="underline ml-4">
                shipping policy
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <TbRuler2 className="text-[30px] text-gray-400" />
            <Link href={`./`} className="underline">
              Size Chart
            </Link>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <h1 className="text-[#959595]">Color:</h1>
            <button className="border-[1px] p-2 text-[#959595]">Ivory</button>
          </div>
          <Menu placement="left">
            <MenuHandler>
              <Button className="w-full text-start bg-transparent border-[1px] rounded-none mt-3 shadow-none hover:shadow-none text-[#7D7D7D] text-md font-thin">
                Size: EU 37
              </Button>
            </MenuHandler>
            <MenuList className="h-96 overflow-y-auto">
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex justify-between items-center px-5 py-3 w-[300px] text-[#676767] text-md tracking-widest">
                  <h1>EU 36.5</h1>
                  <p>ONLY 1 LEFT</p>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <div className="flex items-center justify-start gap-4 border-[1px] w-fit mt-4 font-thin">
            {/* min buttton */}
            <button
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              className="px-4  text-2xl rounded-sm"
            >
              -
            </button>

            {/* number */}
            <span className="text-xl font-thin">{count}</span>

            {/* plus button  */}
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 text-black text-xl rounded-md"
            >
              +
            </button>
          </div>
          <Button className="bg-white mt-4 w-full shadow-none border-[1px] tracking-widest hover:bg-black text-[#8A8A8A] hover:text-white transition-all duration-500 ease-out relative overflow-hidden">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-black transition-all duration-500 ease-out hover:left-0"></span>
            ADD TO CART
          </Button>

          <Link
            href="/"
            className="flex w-full justify-start items-center p-3 mt-4 text-white bg-black"
          >
            <IoIosHeartEmpty />
            <div className="flex justify-center w-full">ADD TO WHISHLIST</div>
          </Link>

          <div className="w-full flex gap-[4em] border-[1px] p-4 mt-4 rounded-md">
            <p>
              4 interest-free payments of <span>KWD</span> <span>127.500</span>.
              No fees. Shariah-compliant.{" "}
              <a href="/" className="underline" target="_blank">
                Learn more
              </a>
            </p>
            <Image
              src="/app/images/taddy.jpg"
              width={20}
              height={20}
              alt="picture"
            />
          </div>

          <Link
            href="/"
            className="flex w-full justify-between items-center p-3 mt-4 font-thin border-y-[1px] text-black bg-transparent"
          >
            <div>VIEW IMAGES</div>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
      <hr className="w-full mt-[1em]" />
      <div className="mt-[2em] flex flex-col items-center justify-center w-full">
        {productDetails?.data?.reletedProducts.length > 0 && (
          <>
            <h1 className="text-2xl">YOU MAY LIKE ALSO</h1>
            <div className="flex gap-3">
              {productDetails?.data?.reletedProducts.map((prod, index) => (
                <Link
                  key={index}
                  href="/collections/shoes/2"
                  className="card w-[100px] md:w-[350px] lg:w-[230px] bg-white shadow-none rounded-lg"
                >
                  <div className="relative h-64">
                    <img
                      src={`${
                        process.env.NEXT_PUBLIC_API_BASE_URL
                      }${prod?.image.replace(/ /g, "%20")}`}
                      alt="Shoe 1"
                      className="w-full h-full object-cover rounded-t-lg hover:opacity-0"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xl font-semibold">
                      {prod?.product_description?.name}
                    </p>
                    <p className="text-gray-600">SANDALS</p>
                    <div>
                      <span className="text-gray-600">{prod?.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <hr className="w-full mt-[2em] mb-[2em]" />
        <CardCarousel />
        <hr className="w-full mt-[1em]" />
      </div>
    </>
  );
}
