import { Card, Typography, Select, Option } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { GlobeAltIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import UserRequest from "../../Utils/UserRequest";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Loader from "../Loader/Loader";
import { useState } from "react";

function BookSlot() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState("");
  const data = location.state && location.state.data.data;
  const { image, name, _id } = data;

  const { isLoading: dateIsLoading, error: dateError, data: dateData,} = useQuery({
    queryKey: ["slotDate"],
    queryFn: () =>
      UserRequest.get(`/slotdate?lawyerId=${_id}`).then((res) => res.data),
  });

    const { isLoading: slotIsLoading, error: slotError, data: slotData } = useQuery({
    queryKey: ['slotUser', selectedDate],
    queryFn: () => UserRequest.get(`/slotsuser?date=${selectedDate}&lawyerId=${_id}`).then((res) => res.data),
    enabled: !!selectedDate,
  });
  if (slotData){
    console.log("slot is",slotData);
  }
    if (dateIsLoading) {
      return <Loader />;
    }

  if (dateError ) {
    return <div>Error: {dateError.message}</div>;
  }
 

  return (
    <>
      <div className="grid grid-cols-[26rem,1fr]  m-3">
        <aside className=" rounded  p-4 pb-0 grid grid-rows-[28rem,1fr]">
          <Card className="shadow-2xl m-5">
            <div className="row flex flex-row justify-center ">
              <img
                size=""
                src={image}
                alt="tania andrew"
                className="rounded-full mx-8 m-4 lg:w-40 lg:h-40 w-32 h-32"
              />
            </div>
            <p className="text-3xl font-bold text-blue-gray-500 self-center font-serif mb-1">
              {name}
            </p>
            <div className="self-center flex flex-row ">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="ms-2">
                <span className="font-bold text-black">5</span>

                <span className="text-xs">Reviews</span>
              </p>
            </div>
            <div className="flex flex-row justify-evenly pt-3">
              <button className="flex flex-row rounded-lg bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] ps-2 px-5 py-1 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FF416C]/50">
                <GlobeAltIcon className="w-6 me-2" />
                Visit website
              </button>
              <button className="flex flex-row rounded-lg border-2 border-green-500 px-5 py-1 text-base font-medium text-green-500 transition duration-200 hover:bg-green-100 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10">
                <EnvelopeIcon className="w-6 me-2" />
                Message
              </button>
            </div>
          </Card>
        </aside>
        <div className="p-4 pb-0 ps-0 ">
          <div className=" flex items-center justify-between gap-8 bg-[#e4ebe7] shadow-xl rounded-md p-3 mb-7">
            <div>
              <Typography variant="h5" color="blue-gray">
                SLOTS AND BOOKINGS
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about provided slotes and Bookings
              </Typography>
            </div>
            <div className="my-2">
              <Select
                size="md"
                color="white"
                label="Choose date"
                value={selectedDate}
                onChange={(newSelectedDate) => {
                  setSelectedDate(newSelectedDate);
                }}
              >
                {dateData.data.map((dates, index) => (
                  <Option
                    key={index}
                    value={moment(dates).format("DD-MM-YYYY")}
                  >
                    {moment(dates).format("DD-MM-YYYY")}
                  </Option>
                ))}
              </Select>
            </div>
            {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <AddSlot />
            </div> */}
          </div>
          {slotData ? (
            <Card className=" shadow-2xl m-5 p-5">
              <h1>fefefefefeeefef</h1>
            </Card>
          ) : (
            <Card className=" shadow-2xl m-5 p-5">
              <h1>flknlnlnlkn</h1>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

export default BookSlot;
