import { Card } from "@material-tailwind/react"
import { useLocation } from "react-router-dom"
import {
  GlobeAltIcon,
  EnvelopeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

function BookSlot() {
    const location = useLocation()
    const data = location.state && location.state.data;
if (data) {
  console.log("data is",data.data.name);
}
  return (
    <>
      <div className="grid grid-cols-[26rem,1fr]  m-3">
        <aside className=" rounded  p-4 pb-0 grid grid-rows-[28rem,1fr]">
          <Card className="shadow-2xl m-5">
            <div className="row flex flex-row justify-center ">
              <img
                size=""
                src={data.data.image}
                alt="tania andrew"
                className="rounded-full mx-8 m-4 lg:w-40 lg:h-40 w-32 h-32"
              />
            </div>
            <p className="text-3xl font-bold text-blue-gray-500 self-center font-serif mb-1">
              {data.data.name}
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
        <div className="p-4 pb-0 ps-0 grid grid-rows">
          <Card className=" shadow-2xl m-5 p-5"></Card>
        </div>
      </div>
    </>
  );
}

export default BookSlot