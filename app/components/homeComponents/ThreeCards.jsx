import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const ThreeCards = ({ headerCategories }) => {
  // console.log(headerCategories.women);

  const filteredData = headerCategories?.women.filter((prod) => {
    return prod?.category_description?.name !== "Designer";
  });

  // console.log(filteredData);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-[3em]">
      {filteredData?.map((prod, index) => (
        <Card
          key={index}
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${prod?.image}')`,
            }}
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Button className="w-fit bg-white animated-button  text-black font-thin tracking-widest text-md rounded-none hover:bg-transparent">
              <Link href={`/collections/${prod?.category_id}`}>{prod?.category_description?.name}</Link>
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ThreeCards;
