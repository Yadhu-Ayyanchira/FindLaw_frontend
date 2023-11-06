import { Card, Input } from "@material-tailwind/react";
import {
  GlobeAltIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate, } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { addReview, lawyerView } from "../../Api/UserApi";
import Loader from "../Loader/Loader";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import {GenerateError,GenerateSuccess} from "../../Toast/GenerateError"
import { ToastContainer } from "react-toastify";

function SingleLawyer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [rating, setRating] = useState(0);
  const [review,setReview] = useState("")
  const id = location.state && location.state.id;
  const { isLoading, error, data } = useQuery({
    queryKey: ["lawyers", { id }],
    queryFn: () =>
      lawyerView({ id }).then(
        (res) => res.data
      ),
  });
  if (!data) {
    return <div>Data is not available</div>;
  }
  const {_id ,name, image, place, about, experience } = data ? data.data : {};

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
   const handleReviewChange = (event) => {
     setReview(event.target.value);
   };

   const handleSubmit = async () => {
    console.log("rating is",rating);
    try {
     const response = await addReview(rating,review,_id)
     if(response.data.created){
      GenerateSuccess(response.data.message);
     }
    } catch (error) {
      console.log(error);
    }
   }
  return (
    <>
      <ToastContainer />
      <div className="container mx-auto">
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
                {/* <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p><FaStar className="text-yellow-700" /></p> */}

                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleStarClick(star)}
                      className={`cursor-pointer text-xl ${
                        star <= rating ? "text-yellow-500" : "text-gray-300"
                      } material-icons`}
                    >
                      <FaStar />
                    </span>
                  ))}
                </div>
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
              <div className="self-center pt-6">
                <button
                  onClick={() => navigate("/bookslot", { state: { data } })}
                  className="flex flex-row rounded-md  bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] px-5 py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#00C9FF]/50"
                >
                  <VideoCameraIcon className="w-6 me-2" />
                  Schedule a consultaoin
                </button>
              </div>
            </Card>
            <Card className="shadow-2xl m-5 h-60">
              <div className="self-center mt-2">
                <p className="text-black text-3xl font-semibold">
                  Rate the Lawyer here
                </p>
              </div>
              <div className="flex items-center space-x-1 self-center mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`cursor-pointer text-xl ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    } material-icons`}
                  >
                    <FaStar className="w-6 h-6" />
                  </span>
                ))}
              </div>
              <div className="my-3 w-72 self-center ">
                <Input
                  size="lg"
                  variant="standard"
                  name="review"
                  label="Enter your Review"
                  value={review}
                  onChange={handleReviewChange}
                />
              </div>
              <div className="self-center mt-4">
                <button
                  onClick={() => handleSubmit()}
                  className="flex flex-row rounded-lg border-2 border-green-500 px-5 py-1 text-base font-medium text-green-500 transition duration-200 hover:bg-green-100 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10"
                >
                  Submit
                </button>
              </div>
            </Card>
          </aside>
          <div className="p-4 pb-0 ps-0 grid grid-rows">
            <Card className=" shadow-2xl m-5 p-5">
              <div>
                <p className="text-black text-2xl font-semibold">
                  Professional Summary
                </p>
                {/* <hr className="border border-solid border-white w-52"></hr> */}
                <p className="pt-4 text-base text-blue-gray-800 break-words">
                  {about}
                </p>
              </div>
              <div className="mt-9">
                <p className="text-black text-3xl font-semibold">Details</p>
                <div className="m-4 w-3/4 flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p className="flex flex-row">
                      <BriefcaseIcon className="w-8" />
                      <span className="text-xl">Experience:</span>
                    </p>
                    <p className="text-xl text-black ps-11">
                      {experience} Years
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="flex flex-row">
                      <MapPinIcon className="w-8" />
                      <span className="text-xl">Location:</span>
                    </p>
                    <p className="text-xl text-black ps-11">{place}</p>
                  </div>
                </div>
                <div className="m-4 w-3/4 pt-5 flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p className="flex flex-row">
                      <MapPinIcon className="w-8" />
                      <span className="text-xl">Expertised in:</span>
                    </p>
                    <div className="flex flex-wrap">
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                        <p>Family</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                        <p>Business consulting</p>
                      </div>
                      <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                        <p>Business consulting expert</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col">
                    <p className="flex flex-row">
                      <MapIcon className="w-8" />
                      <span className="text-xl">Experience:</span>
                    </p>
                    <p className="text-xl ps-11">12 Years</p>
                  </div> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="p-4 pt-0 ">
          <Card className="  m-5 h-80 p-3 px-20 shadow-2xl overflow-y-scroll no-scrollbar">
            <div className="self-center mt-2 mb-6">
              <p className="text-black text-3xl font-semibold">
                Reviews and Ratings
              </p>
            </div>
            <div className="w-full flex justify-between">
              <div>
                {/* rating and review */}
                <div className="rating pb-2">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                </div>
                <div className="review">
                  <p>
                    hello this is review and rating and iam here to rate you
                    fucking bitch.....!
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                {/* name image date */}
                <div className="row flex flex-row ">
                  <img
                    size=""
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    alt="tania andrew"
                    className="rounded-md mx-8 m-4 lg:w-12 lg:h-12 w-12 h-12"
                  />
                </div>
                <div className="flex flex-col self-center">
                  <p>Yadhu</p>
                  <p>28-10-1997</p>
                </div>
              </div>
            </div>
            <hr className="w-full bg-black" />
          </Card>
        </div>
      </div>
    </>
  );
}

export default SingleLawyer;
