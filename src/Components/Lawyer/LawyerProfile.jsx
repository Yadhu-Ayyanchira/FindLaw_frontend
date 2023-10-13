import React from "react";
import { Badge } from "@material-tailwind/react";
import { MapPinIcon, CheckBadgeIcon,PencilSquareIcon,BriefcaseIcon} from "@heroicons/react/24/solid";

function VerifiedTag() {
  return (
    <div className="flex items-center mt-3 bg-green-400 text-white p-2 mt-11 rounded-full">
      <CheckBadgeIcon className="h-4 w-4 mr-1" />
      <span className="text-xs font-semibold">Verified</span>
    </div>
  );
}

function LawyerProfile() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="profile lg:w-2/3 h-64 m-5 lg:m-5 shadow-xl rounded-xl flex">
            <div className="image">
              <Badge
                overlap="circular"
                placement="bottom-end"
                className="h-8 w-8 mb-5 me-2 hover:bg-white hover:text-[#5d7582] bg-[#5d7582] cursor-pointer"
              >
                <img
                  size=""
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                  alt="tania andrew"
                  className="rounded-full mx-8 m-5 lg:w-52 lg:h-52 w-32 h-32" // Adjusted the size for small devices
                />
              </Badge>
            </div>
            <div className="details m-5 p-5 ms-10 mb-0 h-auto flex flex-col">
              <p className="text-3xl font-bold text-blue-gray-600 font-serif mb-1">
                Yadhu
              </p>
              <div className="flex items-center mb-1">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <p>Calicut</p>
              </div>
              <div className="flex items-center mb-1">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <p>7 Years</p>
              </div>
              <br />
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Email:</span>yadhu@gmail.com
              </p>
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Mobile:</span>9744011366
              </p>
            </div>
            <div className="p-10">
              <button
                type="submit"
                className="flex items-center space-x-2 text-black rounded-md py-1 px-2 outline-black hover:bg-blue-gray-200"
              >
                <PencilSquareIcon className="h-5 w-5" />
                <span>Edit Profile</span>
              </button>
              <VerifiedTag />
            </div>
          </div>

          <div className="flc lg:w-1/3 h-64 m-5 lg:ms-0 shadow-xl rounded-xl"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="about lg:w-full h-64 m-5 lg:m-5 shadow-xl rounded-xl flex-col relative">
            <h2 className="text-lg font-semibold mb-2 p-4 pb-0">About</h2>
            <button
              className=" text-black px-4 py-2 absolute top-0 right-0 m-4"
              onClick="editContent()"
            >
              <PencilSquareIcon className="h-8 w-8" />
            </button>
            <p className="mt-8 m-5">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehend
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="about lg:w-full h-64 m-5 lg:m-5 shadow-xl rounded-xl flex-col relative">
            <h2 className="text-lg font-semibold mb-2 p-4 pb-0">About</h2>
            <button
              className=" text-black px-4 py-2 absolute top-0 right-0 m-4"
              onClick="editContent()"
            >
              <PencilSquareIcon className="h-8 w-8" />
            </button>
            <p className="mt-8 m-5">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehend
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LawyerProfile;
