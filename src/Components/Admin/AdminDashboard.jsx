import { Card,Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import AdminRequest from "../../Utils/AdminRequest";
import moment from "moment";
import {
 UserIcon,
 AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";

const TABLE_HEAD = ["Name", "Job", "Employed", "status"];


function AdminDashboard() {
  //get todays data using usequery
    const { isLoading, error, data } = useQuery({
      queryKey: ["todaysappointment"],
      queryFn: () => AdminRequest.get("/gettodays").then((res)=>res.data),
      enabled: true,
    });
    if(data){
      console.log("sdsdsds",data);
    }
  if(isLoading){
    return <Loader/>
  }
  if(error){
    return error
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="grid  sm:grid-cols-3 mx-10">
          <div className="flex md:justify-start">
            <Card className="h-36 w-80 bg-[#3abb61] rounded-md p-2 my-2 shadow-sm hover:bg-[#378d48]">
              <div className="flex">
                <UserIcon className="h-7 w-7 me-2 text-white" />
                <div className="flex flex-col">
                  <Typography variant="h4" className="text-white">
                    USERS
                  </Typography>
                  <div className="flex items-baseline">
                    <Typography variant="h1" className="text-white my-3 me-3">
                      {data?.userCount - 1}
                    </Typography>
                    <Typography className="text-white my-3">users </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex md:justify-center">
            <Card className="h-36 w-80 bg-[#3abb61] rounded-md p-2 my-2 shadow-sm hover:bg-[#378d48]">
              <div className="flex">
                <AcademicCapIcon className="w-7 h-8 me-2 text-white" />
                <div className="flex flex-col">
                  <Typography variant="h4" className="text-white">
                    LAWYERS
                  </Typography>
                  <div className="flex items-baseline">
                    <Typography variant="h1" className="text-white my-3 me-3">
                      {data?.lawyerCount}
                    </Typography>
                    <Typography className="text-white my-3">
                      Lawyers{" "}
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex md:justify-end">
            <Card className="h-36 w-80 bg-[#3abb61] rounded-md p-2 my-2 shadow-sm hover:bg-[#378d48]">
              <div className="flex">
                <AcademicCapIcon className="h-7 w-7 me-2 text-white" />
                <div className="flex flex-col">
                  <Typography variant="h4" className="text-white">
                    TOTAL APPOINTMENTS
                  </Typography>
                  <div className="flex items-baseline">
                    <Typography variant="h1" className="text-white my-3 me-3">
                      {data?.appointmentCount}
                    </Typography>
                    <Typography className="text-white my-3">
                      appointments{" "}
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-96">
          <div className="lg:w-full m-5 lg:m-5 shadow-xl rounded-xl">
            <h1>Todays Appointments </h1>
            <Card className="h-full w-full overflow-y-scroll no-scrollbar">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((appointment, index) => {
                    const isLast = index === data.data.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex flex-row items-center">
                            <img
                              className="rounded-full w-9 h-9 me-2"
                              src={appointment.user.image}
                              alt=""
                            />
                            <Typography
                              variant="paragraph"
                              color="blue-gray"
                              className="font-serif"
                            >
                              {appointment.user.name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-black"
                          >
                            {moment(appointment.scheduledAt.slotDate).format(
                              "YYYY-MM-DD"
                            )}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-black"
                          >
                            {appointment.scheduledAt.slotTime}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            color="blue-gray"
                            className={
                              appointment.AppoinmentStatus == "cancelled"
                                ? "text-red-800"
                                : appointment.AppoinmentStatus == "rejected"
                                ? "text-red-800"
                                : "text-green-500"
                            }
                          >
                            {appointment.AppoinmentStatus}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;