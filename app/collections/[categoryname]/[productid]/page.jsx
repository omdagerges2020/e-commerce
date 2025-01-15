// "use client";
// import { Button, Option, Select } from "@material-tailwind/react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductDetails } from "@/app/redux-system/slices/productDetailsSlice";
// import ProductGallery from "@/app/components/productDetailsComponents/ProductGallery";
// import { addToCart } from "@/app/redux-system/slices/cartSlice";
// import {
//   addToWhite,
//   getWhiteProducts,
// } from "@/app/redux-system/slices/whitelistSlice";
// import {
//   Input,
//   Dialog,
//   IconButton,
//   Typography,
//   DialogBody,
//   DialogHeader,
//   DialogFooter,
// } from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// // images
// const images = [
//   "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-1_800x.jpg?v=1699195418",
//   "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-2_800x.jpg?v=1699195417",
//   "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST_800x.jpg?v=1699195417",
// ];

// export default function ProductPage({ params }) {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [open, setOpen] = useState(false);
//   const [isAdded, setIsAdded] = useState(false);
//   const { productDetails, productDetailsLoading } = useSelector(
//     (state) => state.productDetailsData
//   );
//   const { whiteProducts } = useSelector((state) => state.whitelistDataProducts);

//   // فانكشن لتغيير اللون
//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   // فانكشن لتغيير المقاس
//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleOpen = () => setOpen(!open);

//   useEffect(() => {
//     if (whiteProducts.length > 0) {
//       const isFavourit = whiteProducts?.data.some((prod) => {
//         prod?.id === params.productid;
//       });
//       if (isFavourit) {
//         setIsAdded(true);
//       } else {
//         setIsAdded(false);
//       }
//     }
//   }, [params.productid, whiteProducts?.data, whiteProducts?.length]);

//   useEffect(() => {
//     dispatch(getWhiteProducts());
//   }, []);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProductDetails(params.productid));
//   }, []);

//   const [count, setCount] = useState(1);

//   return (
//     <>
//       <div className="p-10 grid gird-cols-1 lg:grid-cols-2 gap-[4em] bg-white mt-[10em] w-full">
//         <ProductGallery
//           images={images}
//           prodId={params.productid}
//           productDetailsLoading={productDetailsLoading}
//           selectedColor={selectedColor}
//           selectedSize={selectedSize}
//         />
//         <div className="mt-8 lg:max-w-[410px]">
//           <h3 className="mb-4" id="imagesview">
//             Name Of Product
//           </h3>
//           <h1 className="text-2xl mb-4  tracking-[.2em]">
//             {productDetails?.data?.data?.product_description?.name}
//           </h1>
//           {/* price and special price if found */}
//           <div className="flex gap-2">
//             {productDetails?.data?.productSpecial !== null && (
//               <span className="text-red-500 text-md mb-2">
//                 {productDetails?.data?.productSpecial?.price} EG
//               </span>
//             )}
//             <span
//               className={`text-[#686868] ${
//                 productDetails?.data?.productSpecial !== null && "line-through"
//               } text-md mb-2`}
//             >
//               {productDetails?.data?.data?.price} EG
//             </span>
//           </div>
//           <p className="bg-[#F7F7F7] text-[#686868]">
//             Includes all taxes & duties if shipping to USA, Kuwait or KSA; You
//             will not pay anything else upon delivery Read more{" "}
//             <Link href="/shippingpolicy" className="underline">
//               here
//             </Link>
//             .
//           </p>
//           <div className="flex flex-col gap-2 justify-center items-center px-3 mt-4 border-2 border-[#EEEEEE] p-5">
//             <div className="flex gap-3">
//               <img
//                 src="https://shapp.thahab.com/storage/eta/icons/R1J8bfkEGfugobwwv7Zqg0Ok6L4zTlyUyNWz0DzY.jpg"
//                 alt="plane"
//                 className="w-[60px]"
//               />
//               <span className="text-[#666666]">Shipped within 4 days</span>
//             </div>
//             <div className="flex flex-col justify-center items-center text-[#828282]">
//               <h1 className="text-sm">
//                 This estimate is not guaranteed. For more details refer to
//               </h1>
//               <Link href="/shippingpolicy" className="underline ml-4">
//                 shipping policy
//               </Link>
//             </div>
//           </div>
//           {/* <div className="flex items-center mt-3">
//             <TbRuler2 className="text-[30px] text-gray-400" />
//             <Link href={`./`} className="underline">
//               Size Chart
//             </Link>
//           </div> */}
//           {!Array.isArray(productDetails?.data?.productOptions) && (
//             <div className="flex items-center mt-4 gap-2 mb-3">
//               <h1 className="text-[#959595]">Color:</h1>
//               <Select
//                 label="Choose color"
//                 size="sm"
//                 arrow={false}
//                 onChange={(value) => handleColorSelect(value)}
//               >
//                 {productDetails?.data?.productOptions?.Color?.length > 0 ? (
//                   productDetails.data.productOptions.Color.map(
//                     (color, index) => (
//                       <Option key={index} value={color?.color_code}>
//                         {color?.color_code}
//                       </Option>
//                     )
//                   )
//                 ) : (
//                   <Option disabled>No colors available</Option>
//                 )}
//               </Select>
//             </div>
//           )}

//           {/* selector for sizes */}
//           {!Array.isArray(productDetails?.data?.productOptions) && (
//             <div className="flex items-center mt-4 gap-2 mb-3">
//               <h1 className="text-[#959595]">Size</h1>
//               <Select
//                 label={
//                   productDetails?.data?.productOptions?.Size?.length === 0
//                     ? "no size available"
//                     : "Choose size"
//                 }
//                 size="sm"
//                 arrow={false}
//                 onChange={(value) => handleSizeSelect(value)}
//               >
//                 {productDetails?.data?.productOptions?.Size?.length > 0 ? (
//                   productDetails.data.productOptions.Size.map((size, index) => (
//                     <Option key={index} value={size?.label}>
//                       {size?.label}
//                     </Option>
//                   ))
//                 ) : (
//                   <Option disabled>No sizes available</Option>
//                 )}
//               </Select>
//             </div>
//           )}

//           <div className="flex items-center justify-start gap-4 border-[1px] w-fit mt-4 font-thin">
//             {/* min buttton */}
//             <button
//               onClick={() => setCount(count > 0 ? count - 1 : 0)}
//               className="px-4  text-2xl rounded-sm"
//             >
//               -
//             </button>

//             {/* number */}
//             <span className="text-xl font-thin">{count}</span>

//             {/* plus button  */}
//             <button
//               onClick={() => setCount(count + 1)}
//               className="px-4 text-black text-xl rounded-md"
//             >
//               +
//             </button>
//           </div>
//           <Button
//             onClick={() =>
//               dispatch(
//                 addToCart({
//                   productDetails,
//                   count,
//                   selectedColor,
//                   selectedSize,
//                 })
//               )
//             }
//             className="bg-white mt-4 w-full shadow-none border-[1px] tracking-widest hover:bg-black text-[#8A8A8A] hover:text-white transition-all duration-500 ease-out relative overflow-hidden"
//           >
//             <span className="absolute top-0 left-[-100%] w-full h-full bg-black transition-all duration-500 ease-out hover:left-0"></span>
//             ADD TO CART
//           </Button>

//           <Button
//             onClick={() =>
//               dispatch(addToWhite(productDetails && productDetails))
//             }
//             disabled={isAdded}
//             className="flex w-full justify-start items-center p-3 mt-4 text-white bg-black"
//           >
//             <IoIosHeartEmpty />
//             <div className="flex justify-center w-full">ADD TO WHISHLIST</div>
//           </Button>

//           {/* payment modal */}
//           <div className="w-full flex gap-[4em] border-[1px] p-4 mt-4 rounded-md">
//             <Button
//               className="bg-transparent text-black shadow-none hover:shadow-none"
//               onClick={handleOpen}
//             >
//               4 interest-free payments of <span>EGP</span> <span>127.500</span>.
//               No fees. Egypt.{" "}
//               <span className="underline text-black bg-transparent shadow-none hover:shadow-none">
//                 Learn more
//               </span>
//             </Button>
//             <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
//               <DialogHeader className="relative m-0 block">
//                 <Typography variant="h4" color="blue-gray">
//                   Link Payment Card
//                 </Typography>
//                 <Typography className="mt-1 font-normal text-gray-600">
//                   Complete the form below with your card details to link your
//                   card.
//                 </Typography>
//                 <IconButton
//                   size="sm"
//                   variant="text"
//                   className="!absolute right-3.5 top-3.5"
//                   onClick={handleOpen}
//                 >
//                   <XMarkIcon className="h-4 w-4 stroke-2" />
//                 </IconButton>
//               </DialogHeader>
//               <DialogBody className="space-y-4 pb-6">
//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   className="h-12 border-blue-500 focus:ring-blue-100/50"
//                 >
//                   <img
//                     src="/assets/images/paymob.png"
//                     className="mx-auto grid h-12 w-16 -translate-y-4 place-items-center"
//                     alt="mopay"
//                   />
//                 </Button>
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 text-left font-medium"
//                   >
//                     Cardholder Name
//                   </Typography>
//                   <Input
//                     color="gray"
//                     size="lg"
//                     placeholder="e.g., John Doe"
//                     name="name"
//                     className="placeholder:opacity-100 focus:!border-t-gray-900"
//                     containerProps={{
//                       className: "!min-w-full",
//                     }}
//                     labelProps={{
//                       className: "hidden",
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 text-left font-medium"
//                   >
//                     Card Number
//                   </Typography>
//                   <Input
//                     color="gray"
//                     size="lg"
//                     placeholder="1234 5678 9012 3456"
//                     name="number"
//                     className="placeholder:opacity-100 focus:!border-t-gray-900"
//                     containerProps={{
//                       className: "!min-w-full",
//                     }}
//                     labelProps={{
//                       className: "hidden",
//                     }}
//                   />
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="w-full">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="mb-2 text-left font-medium"
//                     >
//                       Expiration Date
//                     </Typography>
//                     <Input
//                       color="gray"
//                       size="lg"
//                       placeholder="MM/YY"
//                       name="date"
//                       className="placeholder:opacity-100 focus:!border-t-gray-900"
//                       containerProps={{
//                         className: "!min-w-full",
//                       }}
//                       labelProps={{
//                         className: "hidden",
//                       }}
//                     />
//                   </div>
//                   <div className="w-full">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="mb-2 text-left font-medium"
//                     >
//                       CVV
//                     </Typography>
//                     <Input
//                       color="gray"
//                       size="lg"
//                       placeholder="123"
//                       name="CVV"
//                       className="placeholder:opacity-100 focus:!border-t-gray-900"
//                       containerProps={{
//                         className: "!min-w-full",
//                       }}
//                       labelProps={{
//                         className: "hidden",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </DialogBody>
//               <DialogFooter>
//                 <Button className="ml-auto" onClick={handleOpen}>
//                   submit
//                 </Button>
//               </DialogFooter>
//             </Dialog>
//             <Image
//               src="/assets/images/paymob.png"
//               width={80}
//               height={0}
//               alt="picture"
//             />
//           </div>

//           <Link
//             href="#imagesview"
//             className="flex w-full justify-between items-center p-3 mt-4 font-thin border-y-[1px] text-black bg-transparent"
//           >
//             <div>VIEW IMAGES</div>
//             <MdKeyboardArrowRight />
//           </Link>
//         </div>
//       </div>
//       <hr className="w-full mt-[1em]" />
//       <div className="mt-[2em] flex flex-col items-center justify-center w-full">
//         {productDetails?.data?.reletedProducts?.length > 0 && (
//           <>
//             <h1 className="text-2xl">YOU MAY LIKE ALSO</h1>
//             <div className="block lg:flex gap-3">
//               {productDetails && productDetails?.data?.reletedProducts.map((prod, index) => (
//                 <Link
//                   key={index}
//                   href={`/collections/${productDetails?.data?.data?.category_id}/${prod.id}`}
//                   className="card w-full md:w-[350px] lg:w-[230px] bg-white shadow-none rounded-lg"
//                 >
//                   <div className="relative">
//                     <img
//                       src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${prod?.image?.replace(/ /g, "%20")}`}
//                       alt="Shoe 1"
//                     // لضبط الصورة بشكل تلقائي داخل الحاوية
//                     objectfit="cover" // لجعل الصورة تغطي الحاوية بشكل صحيح
//                       className="rounded-t-lg  w-full max-h-[300px]"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <p className="text-xl font-semibold">
//                       {prod?.product_description?.name}
//                     </p>
//                     <div>
//                       <span className="text-gray-600">{prod?.price}</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </>
//         )}
//         {/* <CardCarousel /> */}
//         <hr className="w-full mt-[1em]" />
//       </div>
//     </>
//   );
// }

"use client";
import { Button, Option, Select } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "@/app/redux-system/slices/productDetailsSlice";
import ProductGallery from "@/app/components/productDetailsComponents/ProductGallery";
import { addToCart } from "@/app/redux-system/slices/cartSlice";
import {
  addToWhite,
  getWhiteProducts,
} from "@/app/redux-system/slices/whitelistSlice";
import {
  Input,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// images
const images = [
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-1_800x.jpg?v=1699195418",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST-2_800x.jpg?v=1699195417",
  "https://thahab.com/cdn/shop/files/C10182-105-R001CYTS-IVORY-SATINCRYSTAL-TRANS-ST_800x.jpg?v=1699195417",
];

export default function ProductPage({ params }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [open, setOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { productDetails, productDetailsLoading } = useSelector(
    (state) => state.productDetailsData
  );
  const { whiteProducts } = useSelector((state) => state.whitelistDataProducts);

  // فانكشن لتغيير اللون
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // فانكشن لتغيير المقاس
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleOpen = () => setOpen(!open);

  // useEffect(() => {
  //   if (whiteProducts.length > 0) {
  //     const isFavourit = whiteProducts?.data.some((prod) => {
  //       prod?.id === params.productid;
  //     });
  //     if (isFavourit) {
  //       setIsAdded(true);
  //     } else {
  //       setIsAdded(false);
  //     }
  //   }
  // }, [params.productid, whiteProducts?.data, whiteProducts.length]);

  useEffect(() => {
    dispatch(getWhiteProducts());
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(params.productid));
  }, []);

  const [count, setCount] = useState(1);

  return (
    <>
      <div className="p-10 grid gird-cols-1 lg:grid-cols-2 gap-[4em] bg-white mt-[10em] w-full">
        <ProductGallery
          images={images}
          prodId={params.productid}
          productDetailsLoading={productDetailsLoading}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
        <div className="mt-8 lg:max-w-[410px]">
          <h3 className="mb-4" id="imagesview">
            Name Of Product
          </h3>
          <h1 className="text-2xl mb-4  tracking-[.2em]">
            {productDetails?.data?.data?.product_description?.name}
          </h1>
          {/* price and special price if found */}
          <div className="flex gap-2">
            {productDetails?.data?.productSpecial !== null && (
              <span className="text-red-500 text-md mb-2">
                {productDetails?.data?.productSpecial?.price} EG
              </span>
            )}
            <span
              className={`text-[#686868] ${
                productDetails?.data?.productSpecial !== null && "line-through"
              } text-md mb-2`}
            >
              {productDetails?.data?.data?.price} EG
            </span>
          </div>
          <p className="bg-[#F7F7F7] text-[#686868]">
            Includes all taxes & duties if shipping to USA, Kuwait or KSA; You
            will not pay anything else upon delivery Read more{" "}
            <Link href="/shippingpolicy" className="underline">
              here
            </Link>
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
              <Link href="/shippingpolicy" className="underline ml-4">
                shipping policy
              </Link>
            </div>
          </div>
          {/* <div className="flex items-center mt-3">
            <TbRuler2 className="text-[30px] text-gray-400" />
            <Link href={`./`} className="underline">
              Size Chart
            </Link>
          </div> */}
          {/* {!Array.isArray(productDetails?.data?.productOptions) && (
            <div className="flex items-center mt-4 gap-2 mb-3">
              <h1 className="text-[#959595]">Color:</h1>
              <Select
                label="Choose color"
                size="sm"
                arrow={false}
                onChange={(value) => handleColorSelect(value)}
              >
                {productDetails && productDetails?.data?.productOptions?.Color.length > 0 ? (
                  productDetails?.data?.productOptions?.Color.map(
                    (color, index) => (
                      <Option key={index} value={color?.color_code}>
                        {color?.color_code}
                      </Option>
                    )
                  )
                ) : (
                  <Option disabled>No colors available</Option>
                )}
              </Select>
            </div>
          )} */}

          {/* selector for sizes */}
          {/* {!Array.isArray(productDetails?.data?.productOptions) && (
            <div className="flex items-center mt-4 gap-2 mb-3">
              <h1 className="text-[#959595]">Size</h1>
              <Select
                label={
                  productDetails && productDetails?.data?.productOptions?.Size.length === 0
                    ? "no size available"
                    : "Choose size"
                }
                size="sm"
                arrow={false}
                onChange={(value) => handleSizeSelect(value)}
              >
                {productDetails && productDetails?.data?.productOptions?.Size.length > 0 ? (
                  productDetails.data.productOptions.Size.map((size, index) => (
                    <Option key={index} value={size?.label}>
                      {size?.label}
                    </Option>
                  ))
                ) : (
                  <Option disabled>No sizes available</Option>
                )}
              </Select>
            </div>
          )} */}

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
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  productDetails,
                  count,
                  selectedColor,
                  selectedSize,
                })
              )
            }
            className="bg-white mt-4 w-full shadow-none border-[1px] tracking-widest hover:bg-black text-[#8A8A8A] hover:text-white transition-all duration-500 ease-out relative overflow-hidden"
          >
            <span className="absolute top-0 left-[-100%] w-full h-full bg-black transition-all duration-500 ease-out hover:left-0"></span>
            ADD TO CART
          </Button>

          <Button
            onClick={() =>
              dispatch(addToWhite(productDetails && productDetails))
            }
            disabled={isAdded}
            className="flex w-full justify-start items-center p-3 mt-4 text-white bg-black"
          >
            <IoIosHeartEmpty />
            <div className="flex justify-center w-full">ADD TO WHISHLIST</div>
          </Button>

          {/* payment modal */}
          <div className="w-full flex gap-[4em] border-[1px] p-4 mt-4 rounded-md">
            <Button
              className="bg-transparent text-black shadow-none hover:shadow-none"
              onClick={handleOpen}
            >
              4 interest-free payments of <span>EGP</span> <span>127.500</span>.
              No fees. Egypt.{" "}
              <span className="underline text-black bg-transparent shadow-none hover:shadow-none">
                Learn more
              </span>
            </Button>
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
              <DialogHeader className="relative m-0 block">
                <Typography variant="h4" color="blue-gray">
                  Link Payment Card
                </Typography>
                <Typography className="mt-1 font-normal text-gray-600">
                  Complete the form below with your card details to link your
                  card.
                </Typography>
                <IconButton
                  size="sm"
                  variant="text"
                  className="!absolute right-3.5 top-3.5"
                  onClick={handleOpen}
                >
                  <XMarkIcon className="h-4 w-4 stroke-2" />
                </IconButton>
              </DialogHeader>
              <DialogBody className="space-y-4 pb-6">
                <Button
                  fullWidth
                  variant="outlined"
                  className="h-12 border-blue-500 focus:ring-blue-100/50"
                >
                  <img
                    src="/assets/images/paymob.png"
                    className="mx-auto grid h-12 w-16 -translate-y-4 place-items-center"
                    alt="mopay"
                  />
                </Button>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Cardholder Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="e.g., John Doe"
                    name="name"
                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Card Number
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="1234 5678 9012 3456"
                    name="number"
                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 text-left font-medium"
                    >
                      Expiration Date
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="MM/YY"
                      name="date"
                      className="placeholder:opacity-100 focus:!border-t-gray-900"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 text-left font-medium"
                    >
                      CVV
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="123"
                      name="CVV"
                      className="placeholder:opacity-100 focus:!border-t-gray-900"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button className="ml-auto" onClick={handleOpen}>
                  submit
                </Button>
              </DialogFooter>
            </Dialog>
            <Image
              src="/assets/images/paymob.png"
              width={80}
              height={0}
              alt="picture"
            />
          </div>

          <Link
            href="#imagesview"
            className="flex w-full justify-between items-center p-3 mt-4 font-thin border-y-[1px] text-black bg-transparent"
          >
            <div>VIEW IMAGES</div>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
      <hr className="w-full mt-[1em]" />
      <div className="mt-[2em] flex flex-col items-center justify-center w-full">
        {productDetails && productDetails?.data?.reletedProducts.length > 0 && (
          <>
            <h1 className="text-2xl">YOU MAY LIKE ALSO</h1>
            <div className="block lg:flex gap-3">
              {productDetails && productDetails?.data?.reletedProducts.map((prod, index) => (
                <Link
                  key={index}
                  href={`/collections/${productDetails?.data?.data?.category_id}/${prod.id}`}
                  className="card w-full md:w-[350px] lg:w-[230px] bg-white shadow-none rounded-lg"
                >
                  <div className="relative">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${prod?.image?.replace(/ /g, "%20")}`}
                      alt="Shoe 1"
                    // لضبط الصورة بشكل تلقائي داخل الحاوية
                    objectfit="cover" // لجعل الصورة تغطي الحاوية بشكل صحيح
                      className="rounded-t-lg  w-full max-h-[300px]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xl font-semibold">
                      {prod?.product_description?.name}
                    </p>
                    <div>
                      <span className="text-gray-600">{prod?.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
        {/* <CardCarousel /> */}
        <hr className="w-full mt-[1em]" />
      </div>
    </>
  );
}
