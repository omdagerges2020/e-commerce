import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

const ThreeCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-[3em]">
      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/homebags.png')" }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Button className="w-fit bg-white animated-button  text-black font-thin tracking-widest text-md rounded-none hover:bg-transparent">BAGS</Button>
        </CardBody>
      </Card>

      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/homeclothes.png')" }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Button className="w-fit bg-white animated-button hover:bg-transparent text-black font-thin tracking-widest text-md rounded-none">CLOTHING</Button>
        </CardBody>
      </Card>

      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/homeshoes.png')" }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Button className="w-fit bg-white animated-button hover:bg-transparent text-black font-thin tracking-widest text-md rounded-none">SHOES</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ThreeCards;
