import {
  Card,
  Typography,
  Select,
  Option,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { GlobeAltIcon, EnvelopeIcon, BookmarkSquareIcon } from "@heroicons/react/24/solid";
import UserRequest from "../../Utils/UserRequest";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Loader from "../Loader/Loader";
import { useState } from "react";
import Booking from "./Booking";

function BookSlot() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState("");
  const [booking,setBooking]=useState(false)
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
  if (dateData) {
    console.log("slot is", dateData.data);
  }
    if (dateIsLoading) {
      return <Loader />;
    }

  if (dateError ) {
    return <div>Error: {dateError.message}</div>;
  }
 const handleBooking = ()=>{
  setBooking(!booking)
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
          <div className=" flex items-center justify-between gap-8 bg-[#e4ebe7] shadow-xl rounded-md p-5 m-5 mb-7">
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
                  // handleBooking();s
                  setBooking(false)
                  setSelectedDate(newSelectedDate);
                }}
              >
                {dateData.data.map((dates, index) => (
                  <Option
                    key={index}
                    value={moment(dates).format("YYYY-MM-DD")}
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
          {booking ? (
            <>
            <Booking/>
            </>
          ) : (
            <>
              <Card className=" shadow-2xl m-5 p-5 grid grid-cols-3 gap-x-8">
                {slotData ? (
                  slotData.data.map((slot, i) => (
                    <Card
                      key={i}
                      className="mt-6  mx-2 min-w-min bg-blue-gray-50/30 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                      <CardBody>
                        <Typography
                          variant="h4"
                          color={slot.isBooked == true ? "red" : "green"}
                          className="mb-2 font-serif"
                        >
                          {slot.isBooked == true
                            ? "Not available"
                            : "Available"}
                        </Typography>
                        <div>
                          <Typography>
                            <span className="font-serif text-xl">Time:</span>
                            <span className="text-green-700 font-bold">
                              {slot.slotTime}
                            </span>
                          </Typography>
                          <Typography>
                            <span className="font-serif text-xl">Date:</span>
                            <span className="text-green-700 font-bold">
                              {new Date(slot.slotDate).toLocaleDateString(
                                "en-GB"
                              )}
                            </span>
                          </Typography>
                        </div>
                        <Typography color="gray">
                          maximum of 30 minutes
                          <span className="font-serif text-blue-700">*</span>
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0">
                        {slot.isBooked == false ? (
                          <button onClick={handleBooking} className="flex flex-row rounded-lg border-2 border-blue-500 px-5 py-1 text-base font-medium text-blue-500 transition duration-200 hover:bg-blue-100 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10">
                            <BookmarkSquareIcon className="w-6 me-2" />
                            Book now
                          </button>
                        ) : (
                          <Typography variant="h5" className="text-red-700">
                            Booked
                          </Typography>
                        )}
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <h1>Select a date to show available slots</h1>
                )}
              </Card>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookSlot;
