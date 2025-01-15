"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Drawer,
  Typography,
  Card,
  Accordion,
} from "@material-tailwind/react";
import { Collapse, List, ListItem } from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux-system/slices/categoriesSlice";
import { TbUserQuestion } from "react-icons/tb";
import { IoClose, IoSearch } from "react-icons/io5";
import { getWhiteProducts } from "../redux-system/slices/whitelistSlice";
import {
  addToCart,
  decrement,
  deleteProduct,
  getCartProducts,
  increment,
} from "../redux-system/slices/cartSlice";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { getSearchData } from "../redux-system/slices/searchSlice";
import FavouritsCards from "./headerComponents/FavouritsCards";

const languages = [
  {
    name: "ENGLISH",
  },
  {
    name: "العربية",
  },
];

const navListMenuItems = [
  {
    title: "CATEGORY NAME",
    title2: "All ",
  },
];

// function NavListMenu({
//   categoryName,
//   categoryId,
//   categoryImg,
//   categoryChildren,
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const renderItems = navListMenuItems.map(({ title, title2 }, key) => (
//     <Link href={`/collections/${categoryId}`} key={key}>
//       <MenuItem className="flex items-center gap-5 rounded-lg">
//         <div>
//           <div
//             variant="h6"
//             color="blue-gray"
//             className="flex items-center text-lg font-bold"
//           >
//             {title}
//           </div>
//           <div
//             variant="h6"
//             color="blue-gray"
//             className="flex items-center text-lg font-bold"
//           >
//             {title2} {categoryName}
//           </div>
//           <div
//             variant="paragraph"
//             className="text-xs !font-medium text-blue-gray-500"
//           >
//             {/* sub categories */}
//             {/* <ul className="text-xl font-thin flex flex-col">
//               {categoryChildren?.map((sub, index) => (
//                 <Link key={index} href={`/collections/${sub?.category_id}`}>
//                   {sub?.category_description?.name}
//                 </Link>
//               ))}
//             </ul> */}
//             <ul className="text-xl font-thin flex flex-col">
//               {categoryChildren?.map((sub, index) => (
//                 <li key={index}>
//                   <Link className="cursor-pointer text-black" href={`/collections/${sub?.category_id}`} passHref>
//                       {sub?.category_description?.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </MenuItem>
//     </Link>
//   ));

//   return (
//     // <React.Fragment>
//     //   <div
//     //     className="relative"
//     //     onMouseEnter={() => setIsMenuOpen(true)}
//     //     onMouseLeave={() => setIsMenuOpen(false)}
//     //   >
//     //     <Menu
//     //       open={isMenuOpen}
//     //       handler={setIsMenuOpen}
//     //       offset={{ mainAxis: 0 }}
//     //       placement="bottom"
//     //       allowHover={true}
//     //     >
//     //       <MenuHandler>
//     //         <Typography as="div" variant="small" className="font-medium flex">
//     //           <ListItem
//     //             className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:border-b-[2px]	hover:border-b-black	
//     //              hover:shadow-none hover:rounded-none  after:absolute after:bottom-0 after:left-0 after:h-[2px] 
//     //              after:w-0 after:bg-black after:transition-all after:duration-300 
//     //              hover:after:w-full"
//     //             selected={isMenuOpen || isMobileMenuOpen}
//     //             onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//     //           >
//     //             <Link href={`/collections/${categoryId}`} passHref>
//     //               <a className="block w-full">{categoryName}</a>{" "}
//     //             </Link>
//     //           </ListItem>
//     //         </Typography>
//     //       </MenuHandler>
//     //       <MenuList className="hidden max-w-screen-xl rounded-none lg:flex w-full h-[70vh] gap-[5em] px-[3em] transition-all duration-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
//     //         <ul className="grid grid-cols-3 gap-y-2 gap-x-[6em] outline-none outline-0">
//     //           {renderItems}
//     //         </ul>
//     //         <ul className="grid grid-cols-3 gap-y-2 gap-x-[6em] outline-none outline-0">
//     //           {renderItems.map((item, index) => (
//     //             <li key={index}>
//     //               {item}
//     //             </li>
//     //           ))}
//     //         </ul>
//     //         <div
//     //           variant="paragraph"
//     //           className="text-xs !font-medium text-blue-gray-500 hover:border-none"
//     //         >
//     //           <Image
//     //             src={`${
//     //               process.env.NEXT_PUBLIC_IMAGE_DOMAIN
//     //             }/${categoryImg.replace(/ /g, "%20")}`}
//     //             width={300}
//     //             height={50}
//     //             alt="shop-picture"
//     //           />
//     //           <div className="flex flex-col justify-center items-center">
//     //             <Link
//     //               href={`/collections/${categoryId}`}
//     //               className="font-thin text-sm"
//     //             >
//     //               SHOP NOW
//     //             </Link>
//     //           </div>
//     //         </div>
//     //       </MenuList>
//     //     </Menu>
//     //     <div className="block lg:hidden">
//     //       <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//     //     </div>
//     //   </div>
//     // </React.Fragment>
//   );
// }

const Header = () => {
  const { userToken } = useSelector((state) => state.auth);
  const { cartProducts, cartLoading, cartArr } = useSelector(
    (state) => state.cartDataProducts
  );
  const { searchResult, loadingSearch } = useSelector(
    (state) => state.searchProducts
  );

  console.log(cartArr);
  // console.log(cartProducts);
  

  // const [activeGender, setActiveGender] = useState("WOMEN");
  const { categories } = useSelector((state) => state.categoriesData);
  const { whiteProducts } = useSelector((state) => state.whitelistDataProducts);

  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => setOpenSearch(!openSearch);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      dispatch(getSearchData(value)); // استدعاء الدالة لجلب النتائج
    }
  };

  const handleSelectProduct = ({ prodId, prodName }) => {
    router.push(`/collections/${prodName}/${prodId}`); // الانتقال إلى صفحة تفاصيل المنتج
    setOpenSearch(false); // إغلاق الديالوج
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getWhiteProducts());
  }, []);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  const [openAlert, setOpenAlert] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // cart drawer
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const [open, setOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [changed, setChanged] = useState(false);
  const [header, setHeader] = useState(false);
  const [lang, setLang] = useState("ENGLISH");

  const handleOpenFavourit = () => setOpen(!open);

  const handleCloseFavourit = () => {
    setOpen(false);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
      () => window.innerWidth <= 960 && setChanged(true)
    );
  }, []);

  const genderTab = [{ gender: "WOMEN" }, { gender: "MEN" }];

  return (
    <div className="w-full">
      <div
        className={
          header
            ? "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
            : "flex flex-col justify-center items-center w-full bg-white border-b-2 fixed z-10 top-0"
        }
      >
        <div className="bg-black w-full text-white px-3 flex justify-between items-center h-[42px]">
          <div>
            <Button
              className="bg-transparent text-white "
            >
              women
            </Button>
          </div>
          {/* <div>
            <MenuWithSearchInput />
          </div> */}
        </div>

        {/* language selector and websiteName and icons*/}
        <div className="flex flex-col items-center px-[.5em]  lg:px-[2em]  bg-white  w-full">
          <div className=" flex justify-between w-full  mt-4 items-center">
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              className="hidden lg:block"
            >
              <MenuHandler>
                <Button
                  size="sm"
                  className="hidden hover:shadow-none text-[15px] font-thin	 border-none bg-transparent shadow-none text-black items-center gap-2 lg:flex"
                >
                  {lang}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden max-h-72 w-20 lg:block">
                {languages.map(({ name }, index) => (
                  <MenuItem
                    key={index}
                    className="flex items-center gap-2"
                    onClick={() => setLang(name)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* side menue */}
            <div className="lg:hidden block">
              <React.Fragment>
                <IconButton variant="text" size="lg" onClick={openDrawer}>
                  {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                  )}
                </IconButton>
                <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                  <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                  >
                    <div className="mb-2 flex items-center gap-4 p-4">
                      <img
                        src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                        alt="brand"
                        className="h-8 w-8"
                      />
                      <div variant="h5" color="blue-gray">
                        Sidebar
                      </div>
                    </div>
                    <List>
                      <Accordion
                        open={open === 1}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              open === 1 ? "rotate-180" : ""
                            }`}
                          />
                        }
                      >
                        {categories &&
                          categories?.data &&
                          categories?.data.categories &&
                          categories?.data.categories.map((li, index) => (
                            <ListItem
                              key={index}
                              className="p-0"
                              selected={open === 1}
                            >
                              <Typography
                                color="blue-gray"
                                className="mr-auto font-normal mb-3 text-[1.5em]"
                              >
                                <Link href={`/collections/${li?.category_id}`}>
                                  {li?.category_description?.name}
                                </Link>
                              </Typography>
                            </ListItem>
                          ))}
                      </Accordion>
                      <Link href={userToken ? "/login/profile" : "/login"}>
                        <VscAccount className="block lg:hidden text-[1.5em]" />
                      </Link>
                    </List>
                  </Card>
                </Drawer>
              </React.Fragment>
            </div>

            {/* nav links */}
            <div className="flex justify-center items-center">
              <Link href={`/`} className="tracking-[.2em] text-[25px] lg:tracking-[.5em] font-[400] lg:text-[30px]">
                DETAYLAR
              </Link>
            </div>
            {/* icons */}
            <div className="flex flex-row text-[20px] lg:text-[25px] font-bold gap-2">
              <Link href={userToken ? "/login/profile" : "/login"}>
                <VscAccount className="hidden lg:block" />
              </Link>
              <IoSearch className="cursor-pointer" onClick={handleOpenSearch} />
              <Dialog
                open={openSearch}
                handler={handleOpenSearch}
                size="xl"
                className="max-h-[500px] absolute top-[13px] !backdrop-blur-0"
              >
                <DialogBody className="overflow-y-auto w-full flex gap-2">
                  <div className="relative  w-[90%] justify-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={query}
                      onChange={handleSearch}
                      className="w-full pl-10 pr-4 py-2 rounded-lg placeholder:text-xl focus:outline-none"
                    />
                    <IoSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-xl" />
                  </div>

                  <Button
                    variant="text"
                    onClick={handleOpenSearch}
                    className="mr-1 hover:bg-transparent"
                  >
                    <IoMdClose className="text-lg hover:bg-transparent" />
                  </Button>
                </DialogBody>
                {query && searchResult.length > 0 && (
                  <ul className="bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50 mt-2">
                    {searchResult.map((product) => (
                      <li
                        key={product.id}
                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        onClick={() =>
                          handleSelectProduct({
                            prodId: product?.id,
                            prodName: product?.product_description?.name,
                          })
                        }
                      >
                        {product?.image && (
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                            }/${product?.image?.replace(/ /g, "%20")}`}
                            alt={product?.product_description?.name}
                            width={50}
                            height={50}
                            className="w-10 h-10 object-cover rounded"
                          />
                        )}

                        <span>{product?.product_description?.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Dialog>

                <MdOutlineShoppingBag
                onClick={openDrawerRight}
                className="cursor-pointer"
              />
              <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4 overflow-auto"
                size="400px"
              >
                <div className="mb-6 flex items-center justify-between w-full">
                  <Link href={`/cart`} variant="h5" color="blue-gray">
                    CART
                  </Link>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                {cartArr &&
                cartArr.length === 0 ? (
                  <div className="flex gap-2 w-full h-screen">
                    <span>Your cart is empty</span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="flex-1 overflow-y-auto border max-h-[400px] border-b-2 w-full">
                      <table className="w-full ">
                        <tbody>
                          {cartArr &&
                           cartArr.map((prod, index) => (
                              <tr
                                key={index}
                                className="flex flex-col justify-center md:table-row md:flex-row md:items-center"
                              >
                                <td className="py-4 flex items-center justify-start gap-5">
                                  <div className="bg-[#F5F5F5] px-2 py-3 w-[40%] flex justify-center items-center">
                                    <img
                                      src={`${
                                        process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                                      }/${prod?.image?.replace(/ /g, "%20")}`}
                                      alt="Product Image"
                                      className="w-20 h-28 lg:w-24 lg:h-32"
                                    />
                                  </div>

                                  <div className="flex flex-col justify-center w-[60%]">
                                    <p className="text-[.5em] lg:text-[.8em] font-thin">
                                      {prod?.formatedProducts ? prod.formatedProducts.name : prod?.name}
                                    </p>

                                    {prod?.option !== null &&
                                      prod?.option?.color !== null && (
                                        <span className="text-[.5em] lg:text-sm text-gray-500">
                                          {prod?.option?.color}
                                          {prod?.option?.size}
                                        </span>
                                      )}
                                    <p className="py-2 font-thin text-sm">
                                      {prod?.formatedProducts ? !isNaN(prod?.formatedProducts.totalPrice)  ? prod?.formatedProducts.totalPrice : prod?.formatedProducts?.price : prod?.special !== "0.00" ? prod?.special : prod?.price} EG
                                    </p>
                                    <div className="flex justify-between items-center w-full">
                                      <div className="text-[.5em] flex font-thin lg:text-sm justify-center items-center border">
                                        <button
                                          className="w-8 h-8 flex items-center justify-center"
                                          onClick={() =>
                                            dispatch(decrement(prod && prod))
                                          }
                                        >
                                          -
                                        </button>
                                        <span className="w-10 text-center">
                                          {prod?.formatedProducts ? prod?.formatedProducts.count : prod?.quantity}
                                        </span>
                                        <button
                                          className="w-8 h-8  flex items-center justify-center text-[.8em]"
                                          onClick={() =>
                                            dispatch(increment(prod && prod))
                                          }
                                        >
                                          +
                                        </button>
                                      </div>

                                      <button
                                        onClick={() =>
                                          dispatch(deleteProduct(prod && prod))
                                        }
                                        className="text-gray-500 text-sm mt-2 font-thin hover:underline transition-all underline"
                                      >
                                        REMOVE
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="py-4 border-t-1 px-0 mt-3 w-full flex flex-col items-center  opacity-100 translate-y-0 transition-all duration-500">
                      <h1 className="font-thin text-sm">
                        Shipping & taxes calculated at checkout
                      </h1>
                      <Button className="text-sm font-thin w-full">
                        <Link href={`/checkout`}>
                          CHECKOUT .{" "}
                          {cartArr
                            .map((prod) => prod?.formatedProducts ? !isNaN(prod?.formatedProducts.totalPrice)  ? prod?.formatedProducts.totalPrice : prod?.formatedProducts?.price : prod?.totalPrice)
                            .reduce((x, y) => x + y)}
                          EG
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </Drawer>
              <IoIosHeart
                className="cursor-pointer"
                onClick={() => handleOpenFavourit()}
              />
              {/* favourits dialoge */}
              <Dialog
                open={open}
                handler={handleOpenFavourit}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}
                className="backdrop-none flex flex-col relative border-none rounded-none lg:min-w-[80%] lg:max-w-[90%] lg:max-h-[80vh] w-full h-screen"
              >
                <DialogFooter className="absolute w-full bg-[#434655] top-0 right-0">
                  <div className="flex gap-5 w-full justify-end items-center">
                    <div className="flex gap-3 items-center">
                      <Link href="/">
                        <TbUserQuestion className="text-white" />
                      </Link>
                      <Link
                        href="/"
                        className="border-none shadow-none text-white hover:border-none hover:shadow-none"
                      >
                        Guest Shopper
                      </Link>
                    </div>
                    <IoClose
                      className="cursor-pointer text-white"
                      onClick={handleCloseFavourit} // إغلاق المودال عند النقر على الأيقونة
                    />
                  </div>
                </DialogFooter>
                <DialogBody className="mt-[4em] overflow-y-auto	h-[400px]">
                  <div className="w-full px-[2em] flex flex-col p-3">
                    <div className="flex justify-between items-center font-thin text-black">
                      <h1 className="text-xl tracking-widest">My Wishlist</h1>
                    </div>
                    <hr className="w-full mt-[2em]" />
                  </div>
                  <div>
                    {/* cards if there is any favourits products */}
                    {/* {whiteProducts && whiteProducts?.data.length === 0 ? (
                      <div className="mt-[6em] flex flex-col justify-center items-center mx-w-[300px] gap-4">
                        <h1 className="font-bold">
                          Love It? Add to My Wishlist
                        </h1>
                        <p>
                          My Wishlist allows you to keep track of all of your
                          favorites and shopping activity whether you're on your
                          computer, phone, or tablet. You won't have to waste
                          time searching all over again for that item you loved
                          on your phone the other day - it's all here in one
                          place!
                        </p>
                        <Button className="bg-[#434655]">
                          <Link href="/">Continue Shopping</Link>
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <FavouritsCards whiteProducts={whiteProducts && whiteProducts} />
                      </div>
                    )} */}
                  </div>
                </DialogBody>
              </Dialog>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-around w-full font-light mt-3">
            {/* <NavList /> */}
            {/* <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row gap-6 lg:p-1">
              {categories &&
                categories?.data?.categories.map((li, index) => (
                  <NavListMenu
                    key={index}
                    categoryName={li?.category_description?.name}
                    categoryId={li?.category_id}
                    categoryImg={li?.image}
                    categoryChildren={li?.children}
                  />
                ))}
            </List> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
