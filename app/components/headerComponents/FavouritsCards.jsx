"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const FavouritsCards = ({ whiteProducts }) => {
  console.log(whiteProducts);

  return (
    <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
      {whiteProducts?.data.map((prod, index) => (
        <Card key={index} className="max-w-[15rem]">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${prod?.image?.replace(/ /g, "%20")}`}
              alt="ui/ux review check"
              className="h-[200px] w-full"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {prod?.product_description?.name}
            </Typography>
            <Typography variant="h5" color="blue-gray">
              {prod?.price}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default FavouritsCards;
