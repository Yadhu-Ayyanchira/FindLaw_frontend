import { Button, Card, CardHeader } from "@material-tailwind/react";
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
 if(data) console.log("pop data", moment().format("YYYY-MM-DDT00:00:00.000[Z]"));

 const handleCancel = async ()=>{
  try {
    alert("error")
  } catch (error) {
    console.log(error)
  }
 }

  return (
    // <>
    //   <div className="container mx-auto">
    //     <h4 className="text-2xl font-bold text-center pb-6 pt-8">
    //       Appointments
    //     </h4>
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>Error: {error.message}</p>}
    //     {data && data.data.length === 0 && <p>No appointments found.</p>}
    //     {data && data.data.length > 0 && (
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         {data.data.map((appointment, index) => (
    //           <Card key={index}>
    //             <p>Lawyer Name: {appointment.lawyer.name}</p>
    //             <p>Date: {appointment.scheduledAt.slotDate}</p>
    //             <p>Time: {appointment.scheduledAt.slotTime}</p>
    //             {/* Add more details as needed */}
    //           </Card>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </>

    <>
      <h4 className="text-2xl font-bold text-center pb-6 pt-8">Appointments</h4>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.data.length === 0 && <EmptyPage />}
      {data && data.data.length > 0 && (
        <Card className="container mx-auto w-full h-auto  grid grid-cols-4 bg-white shadow-2xl p-4">
          {data.data.map((appointment, index) => (
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
              <div className="flex flex-row justify-evenly pt-3">
                {/* <button onClick={()=>handleCancel()} className="rounded-lg bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] ps-2 px-5 py-1 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FF416C]/50">
                  Cancel
                </button> */}
                <CancelAppointment />

                <Button
                  size="sm"
                  className="my-1  bg-green-500 shadow-none "
                  variant="filled"
                >
                  Call
                </Button>
              </div>
              <span className="text-xs self-center pt-2">Reviews</span>
            </Card>
          ))}
        </Card>
      )}
    </>
  );
}

export default Appointments;
