import { Button, Card,  } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import UserRequest from "../../Utils/UserRequest";
import EmptyPage from "../EmptyPage/EmptyPage"
import moment from "moment";
import CancelAppointment from "./CancelAppointment";
function Appointments() {
  const { data, isLoading, error, refetch } = useQuery(
    ["appointment"],
    async () => {
      const response = UserRequest.get(`/appointments`).then((res) => res.data);
      const data = await response;
      return data;
    }
  );
if(data) console.log("dsssds",data);

const constructTime = (time) => {
  const timeArray=time.split(':')
  const minArray=timeArray[1].split(' ')
  const hour=timeArray[0]
  const minute=minArray[0]
  const amPm = minArray[1]
  console.log("array is",hour,minute,amPm);
  let formattedTime = `${hour}:${minute}`;

  // Adjust for AM/PM
  if (amPm === "PM") {
    const hourInt = parseInt(hour, 10);
    if (hourInt < 12) {
      formattedTime = `${hourInt + 12}:${minute}`;
    }
  }

  return formattedTime;
};
 
 

  return (
    <>
      <h4 className="text-2xl font-bold text-center pb-6 pt-8">Appointments</h4>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.data.length === 0 && <EmptyPage />}
      {data && data.data.length > 0 && (
        <Card className="container mx-auto w-full h-auto  grid grid-cols-4 bg-white shadow-2xl p-4">
          {data.data
            .slice()
            .reverse()
            .map((appointment, index) => (
              <Card key={index} className="shadow-xl m-5 p-4">
                <div className="row flex flex-row justify-center ">
                  <img
                    size=""
                    src={appointment.lawyer.image}
                    alt="tania andrew"
                    className="rounded-full mx-8 m-4 lg:w-40 lg:h-40 w-32 h-32"
                  />
                </div>
                <p className="text-3xl font-bold text-blue-gray-500 self-center font-serif mb-1">
                  {appointment.lawyer.name}
                </p>
                <div className="self-center flex flex-col ">
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
                        "MMMM DD, YYYY"
                      )}
                    </span>
                  </p>
                </div>
                {appointment.status == "cancelled" ? (
                  <p className="text-red-800 self-center">
                    Appointment cancelled
                  </p>
                ) : appointment.AppoinmentStatus == "expired" ? (
                  <p className="text-red-800 self-center">
                    Appointment Expired
                  </p>
                ) : appointment.AppoinmentStatus == "rejected" ? (
                  <p className="text-red-800 self-center">
                    Rejected by lawyer
                  </p>
                ) : (
                  <div className="flex flex-row justify-evenly pt-3">
                    <CancelAppointment
                      id={appointment._id}
                      slotId={appointment.slotId}
                      slotTime={appointment.scheduledAt.slotTime}
                      refetch={refetch}
                    />
                    {constructTime(appointment.scheduledAt.slotTime) >=
                      moment().format("HH:mm") &&
                    constructTime(appointment.scheduledAt.slotTime) <=
                      moment(appointment.scheduledAt.slotTime)
                        .add(30, "minutes")
                        .format("HH:mm")
                      ? "call time"
                      : "nop"}
                    <Button
                      onClick={() =>
                        alert(constructTime(appointment.scheduledAt.slotTime))
                      }
                      size="sm"
                      className="my-1  bg-green-500 shadow-none "
                      variant="filled"
                    >
                      Call
                    </Button>
                  </div>
                )}
                <span className="text-xs self-center pt-2">Reviews</span>
              </Card>
            ))}
        </Card>
      )}
    </>
  );
}

export default Appointments;
