import { Button, Card, Option, Select, Typography } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import LawyerRequest from '../../Utils/LawyerRequests';
import Loader from '../Loader/Loader'
import moment from 'moment/moment';
import RejectAppointment from './RejectAppointment';

function AppointmentsRequests() {
    const [selectedDate,setSelectedDate]= useState(moment().format('YYYY-MM-DD'))
      const { isLoading: dateisLoading, error: dateError, data: dateData } = useQuery({
        queryKey: ['appointmentsLawyer'],
        queryFn: () => LawyerRequest.get(`/appointmentDate`).then((res) => res.data)
    })

    const { isLoading: appointmentDataLoading, error: appointmentDataError, data: appointmentData,refetch } = useQuery(
        ['appointments', selectedDate],
        () => LawyerRequest.get(`/appointmentrequest?date=${selectedDate}`).then((res) => res.data),
        { retry: false }
    );

    if (appointmentData) console.log("date data is", appointmentData);
     if (dateisLoading ) {
       return <Loader />;
     }
  return (
    <>
      <div className=" flex items-center justify-between gap-8 bg-[#e4ebe7] shadow-xl rounded-md p-5 m-5 mb-7">
        <div>
          <Typography variant="h5" color="blue-gray">
            BOOKINGS
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Bookings
          </Typography>
        </div>
        <h4 className="text-2xl font-bold text-center pb-6 pt-8">
          Appointments
        </h4>

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
              <Option key={index} value={moment(dates).format("YYYY-MM-DD")}>
                {moment(dates).format("DD-MM-YYYY")}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      {appointmentData && (
        <Card className="container mx-auto w-full h-auto  grid grid-cols-4 bg-white shadow-2xl p-4">
          {appointmentData.data.map((appointment, index) => (
            <Card key={index} className="shadow-xl m-5 p-4">
              <div className="row flex flex-row justify-center">
                <img
                  size=""
                  src={appointment.user.image}
                  alt="tania andrew"
                  className="rounded-full mx-8 m-4 lg:w-40 lg:h-40 w-32 h-32"
                />
              </div>
              <p className="text-3xl font-bold text-blue-gray-500 self-center font-serif mb-1">
                {appointment.user.name}
              </p>
              <div className="self-center flex flex-col">
                <p className="text-base font-bold text-black">
                  Time:{" "}
                  <span className="text-blue-200">
                    {appointment.scheduledAt.slotTime}
                  </span>
                </p>
                <p className="text-base font-bold text-black">
                  Date:
                  <span className="text-blue-200 ps-2">
                    {moment(appointment.scheduledAt.slotDate).format(
                      "DD-MM-YYYY"
                    )}
                  </span>
                </p>
              </div>
             {appointment.AppoinmentStatus=="rejected" ? (<p className='text-red-800 self-center'>Rejected</p>):(<div className="flex flex-row justify-evenly pt-3">
                <RejectAppointment id={appointment._id} refetch={refetch} />
                <Button
                  size="sm"
                  className="my-1 bg-green-500 shadow-none"
                  variant="filled"
                >
                  Share link
                </Button>
              </div>)}
            </Card>
          ))}
        </Card>
      )}
    </>
  );
}

export default AppointmentsRequests