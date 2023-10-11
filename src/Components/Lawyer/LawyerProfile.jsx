import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Badge,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Loader from "../Loader/Loader";

function LawyerProfile() {
  const [load, setLoad] = useState(false);
  const handleLoad = () => setLoad(!load);

  return (
    <>
      {load && <Loader />}
      <div className="container flex">
        <Card className="h-64 w-full max-w-[48rem] flex-row bg-blue-gray-50 m-5">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center bg-blue-gray-50"
          >
            <Badge
              overlap="circular"
              placement="bottom-end"
              className="h-8 w-8 hover:bg-white hover:text-[#5d7582] bg-[#5d7582] cursor-pointer"
            >
              <img
                size=""
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                alt="tania andrew"
                className="rounded-full  ms-0 w-52 h-52"
              />
            </Badge>
          </CardHeader>
          <CardBody className="flex flex-col gap-y-3 px-9 py-6 text-left">
            <Typography variant="h1" color="black" className="font-bold">
              {" "}
              Yadhu{" "}
            </Typography>
            <Typography
              variant="small"
              color="black"
              className="font-semibold"
            >{`Specialization : ${"<SPECIALIZATION>"} `}</Typography>
            <Typography
              variant="small"
              color="black"
              className="font-semibold"
            >{`Experience : ${"<EXPERIENCE>"} Years`}</Typography>
            <Typography
              variant="small"
              color="black"
              className="font-semibold"
            >{`Mobile : ${"<9744011366>"}`}</Typography>
          </CardBody>
        </Card>

        <Card
          color="transparent"
          shadow={false}
          className=" w-1/3 h-64 m-5 bg-blue-gray-50"
        ></Card>
      </div>
      <Card
        color="transparent"
        shadow={false}
        className="w-auto h-96 m-5 bg-blue-gray-50"
      >
        <div>
          <p>experids</p>
          <div className="h-10 overflow-auto">
            freestar freestar What is Lorem Ipsum? Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the relea
          </div>
        </div>
      </Card>
    </>
  );
}

export default LawyerProfile;
