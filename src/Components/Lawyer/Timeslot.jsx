import {
  Card,
  Typography,
  CardBody,
  Chip,
  Select,
  Option,
} from "@material-tailwind/react";
import { ClockIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

import AddSlot from "./AddSlot";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LawyerRequest from "../../Utils/LawyerRequests";
import Loader from "../Loader/Loader";
import moment from "moment";

function Timeslot() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  const {
    isLoading: dateisLoading,
    error: dateError,
    data: dateData,
  } = useQuery({
    queryKey: ["slotsLawyer"],
    queryFn: () => LawyerRequest.get(`/slotDate`).then((res) => res.data),
  });
  const {
    isLoading: slotDataLoading,
    error: slotDataError,
    data: slotData,
  } = useQuery(
    ["slots", selectedDate],
    () =>
      LawyerRequest.get(`/slots?date=${selectedDate}`).then((res) => res.data),
    { retry: false }
  );
  if (dateisLoading || slotDataLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (dateError || slotDataError) {
    return <h1>Something went Wrong</h1>;
  }
  return (
    <>
      <div className="container mx-auto p-5">
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
              // variant="static"
              label="Choose date"
              value={selectedDate}
              onChange={(val) => {
                const newSelectedDate = val;
                setSelectedDate(newSelectedDate);
              }}
              className="font-serif text-black"
            >
              {dateData.data.map((dates, index) => (
                <Option
                  className="font-serif text-black"
                  key={index}
                  value={dates}
                >
                  {moment(dates).format("DD-MM-YYYY")}{" "}
                  {/* Format the date with moment.js */}
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddSlot />
          </div>
        </div>
        <div>
          <Card className="w-full h-auto  items-center justify-center bg-white shadow-2xl p-4">
            {slotData && slotData.data ? (
              slotData.data.map((item, dataIndex) => (
                <div
                  className="col-span-1 grid grid-cols-3 gap-x-8"
                  key={dataIndex}
                >
                  {item.slotes.map((slot, index) => (
                    <Card
                      className="mt-6 mx-2 min-w-min bg-white rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                      key={index}
                    >
                      <CardBody className="sm:flex justify-between items-center">
                        <div>
                          <ClockIcon
                            className={` w-10 sm:w-[4vw]  h-2w-10 sm:h-[4vw]  ${
                              slot.isBooked ? "text-red-400" : "text-green-500"
                            }`}
                          />
                        </div>
                        <div>
                          <Typography color="blue-gray" className="mb-2">
                            Date:{" "}
                            {new Date(slot.slotDate).toLocaleDateString(
                              "en-GB"
                            )}
                          </Typography>
                        </div>
                        <div>
                          <Typography color="blue-gray" className="mb-2">
                            Time: {slot.slotTime}
                          </Typography>
                        </div>
                        <div>
                          <Typography color="light-green" className="mb-2">
                            <Chip
                              className="text-center my-2"
                              variant="ghost"
                              size="md"
                              value={
                                slot.isBooked === true ? "BOOKED" : "AVAILABLE"
                              }
                              color={slot.isBooked === true ? "red" : "green"}
                            />
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              ))
            ) : (
              <div className="flex-col h-40">
                <div className="flex justify-center">
                  <InformationCircleIcon className="h-24 w-24 text-white" />
                </div>
                <div className="flex justify-center">
                  <p className=" text-black">
                    please choose a date to show slots
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
export default Timeslot;
