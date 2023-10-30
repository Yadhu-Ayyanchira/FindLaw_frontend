import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"
import nocredit from "../../Assets/Images/nocredit.jpg"
import touch from "../../Assets/Images/touch.jpg"
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";


function Booking() {
  const {flc} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  return (
    <>
      {flc < 300 ? (
        <>
          <Card className="grid place-items-center shadow-2xl m-5 p-5 gap-x-8">
            <div className="text-center grid place-items-center">
              <img src={nocredit} alt="" className="w-72" />
              <Typography variant="h5">
                You need to have at least 300 FLCs in your account to book a
                room!
              </Typography>
              <button
                onClick={() => navigate("/userProfile")}
                className="outline-green-700 outline w-32 rounded-xl"
              >
                ADD FLC NOW
              </button>
            </div>
          </Card>
        </>
      ) : (
        <>
          <Card className="grid place-items-center shadow-2xl m-5 p-5 gap-x-8">
            <div className="text-center grid place-items-center">
              <img src={touch} alt="" className="w-60" />

              <div className="flex flex-row justify-evenly pt-3">
                <button className="flex flex-row rounded-lg border-2 border-green-500 px-5 py-1 text-base font-medium text-green-500 transition duration-200 hover:bg-green-100 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10">
                  BOOK NOW
                </button>
              </div>
            </div>
          </Card>
        </>
      )}
    </>
  );
}

export default Booking