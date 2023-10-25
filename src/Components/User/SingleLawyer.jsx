import { Card } from "@material-tailwind/react";
import {
  GlobeAltIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { lawyerView } from "../../Api/UserApi";
import Loader from "../Loader/Loader";


function SingleLawyer() {
  const location = useLocation()
  const id = location.state && location.state.id;
    const { isLoading, error, data } = useQuery({
      queryKey: ["lawyers", { id }],
      queryFn: () =>
        lawyerView({ id }).then(
          (res) => res.data
        ),
    });
    const { name, email,image, mobile,place,about,experience } = data ? data.data : {};

     if (isLoading) {
       return <Loader />;
     }

     if (error) {
       return <div>Error: {error.message}</div>;
     }

  return (
    <>
      <div className="container mx-auto">
        {/* <div className="h-16 flex items-center justify-around "></div> */}
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
              <div className="self-center pt-6">
                <button className="flex flex-row rounded-md  bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] px-5 py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#00C9FF]/50">
                  <VideoCameraIcon className="w-6 me-2" />
                  Schedule a consultaoin
                </button>
              </div>
            </Card>
            <Card className="bg-deep-orange-300 m-5 h-60">achievments</Card>
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
                    <p className="text-xl text-black ps-11">{experience} Years</p>
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
          <Card className=" bg-brown-800 m-5 h-80 ">reviews</Card>
        </div>
      </div>
    </>
  );
}

export default SingleLawyer;
