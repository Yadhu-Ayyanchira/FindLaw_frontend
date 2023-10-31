/* eslint-disable react/prop-types */
import { Card, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import nocredit from "../../Assets/Images/nocredit.jpg"
import touch from "../../Assets/Images/touch.jpg"
import { useNavigate } from "react-router-dom";
import { addAppointment } from "../../Api/UserApi";
import { GenerateError, GenerateSuccess } from "../../Toast/GenerateError";
import { ToastContainer } from "react-toastify";
import { setUserDetails } from "../../Redux/UserSlice";

function Booking(props) {
  const {flc} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleBook = async (e) =>{
    e.preventDefault();
    try {
      const response = await addAppointment(props.value);
      if (response.data.created) {
        console.log("have resp");
        const detail = response.data.data;
        console.log("resp data is",detail);
        dispatch(
          setUserDetails({
            id: detail?._id,
            name: detail?.name,
            email: detail?.email,
            mobile: detail?.mobile,
            place: detail?.place,
            image: detail?.image,
            flc: detail?.flc,
          })
        );
        GenerateSuccess(response.data.message);
        setTimeout(() => navigate("/filter"), 2000);
      }
    } catch (error) {
      if(error){
        console.log("err",error);
        GenerateError("No flc")
      }
    }
    
  }
  return (
    <>
    <ToastContainer/>
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
                <button onClick={handleBook} className="flex flex-row rounded-lg border-2 border-green-500 px-5 py-1 text-base font-medium text-green-500 transition duration-200 hover:bg-green-100 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10">
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