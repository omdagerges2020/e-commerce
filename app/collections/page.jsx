"use client";
import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, Button } from "@/app/ClientImports";
import "./collection.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { getCategories } from "../redux-system/slices/categoriesSlice";

const Page = () => {
  const { categories, categoriesLoading } = useSelector((state) => state.categoriesData);
  
  // console.log(collections?.men);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCategories());
  }, []);

  if(categoriesLoading){
    return <Loading/>
  }

  return (
    <div className="px-5 flex flex-col justify-center items-center w-full mt-[12em]">
      <h1 className="text-2xl mt-[2em] tracking-widest font-thin">
        ALL CATEGORIES
      </h1>
      <div className="flex flex-wrap	gap-[2em] justify-center items-center w-full mt-[3em]">
        {categories?.data?.categories.map((card, index) => (
          //   <Card
          //   key={index}
          //   shadow={false}
          //   className="relative grid h-[45rem] w-full max-w-[23rem] rounded-none items-end justify-center overflow-hidden text-center"
          // >
          //   <CardHeader
          //     floated={false}
          //     shadow={false}
          //     // color="transparent"
          //     // style={{
          //     //   backgroundImage: `url(http://192.168.1.117/detaylar/uploads/category/168795285932767-2-axe-spray-transparent-background_1-removebg-preview%20(1).png)`,
          //     //   backgroundSize: 'cover',
          //     // }}
          //     style={{
          //       backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}/${card.image.replace(/ /g, '%20')})`,
          //     }}
          //     className="absolute bg-top m-0 h-full w-full rounded-none"
          //   >
          //     <div className="to-bg-black-10 absolute  h-full w-full" />
          //   </CardHeader>
          //   {/* <Image src="http://192.168.1.117/detaylar/uploads/category/168795285932767-2-axe-spray-transparent-background_1-removebg-preview%20(1).png" width={200} height={200}/> */}
          //   <CardBody className="absolute w-full bottom-0 py-14 px-6 md:px-12 flex justify-end flex-col">
          //     <div
          //       variant="h5"
          //       className="mb-4 absolute bottom-[6rem] text-white text-2xl left-[-3rem] w-full"
          //     >
          //       <p>{card.category_description.name}</p>
          //     </div>
          //     <div className="absolute bottom-6 w-full left-[-3rem]">
          //       <Button className="btn">
          //         <Link href={`/collections/{card.id}`}>View Products</Link>
          //       </Button>
          //     </div>
          //   </CardBody>
          // </Card>
          <Card
            key={index}
            shadow={false}
            className="relative grid h-[45rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                }/${card.image.replace(/ /g, "%20")})`,
              }}
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            {/* <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              How we design and code open-source projects?
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Tania Andrew
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
          </CardBody> */}
            <CardBody className="absolute w-full bottom-0 py-14 px-6 md:px-12 flex justify-end flex-col">
              <div
                variant="h5"
                className="mb-4 absolute bottom-[6rem] text-white text-2xl left-[-3rem] w-full"
              >
                <p className="uppercase">{card.category_description.name}</p>
              </div>
              <div className="absolute bottom-6 w-full left-[-3rem]">
                <Button className="btn">
                  <Link href={`/collections/${card.category_id}`}>
                    View Products
                  </Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <hr className="w-full mt-[2em]" />
    </div>
  );
};

export default Page;
