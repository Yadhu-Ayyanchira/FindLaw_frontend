import { useEffect } from "react";
import { Badge } from "@material-tailwind/react";
import LawyerRequests from "../../Utils/LawyerRequests";
import {
  MapPinIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useQuery,  } from "@tanstack/react-query";
import EditProfile from "./EditProfile";
import EditAbout from "./EditAbout";
import EditImage from "./EditImage";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import EditSpecialised from "./EditSpecialised";


function VerifiedTag() {
  return (
    <div className="flex items-center mt-3 bg-green-400 text-white p-2  rounded-full">
      <CheckBadgeIcon className="h-4 w-4 mr-1" />
      <span className="text-xs font-semibold">Approved</span>
    </div>
  );
}
function NotVerifiedTag() {
  return (
    <div className="flex items-center mt-3 bg-red-400 text-white p-2  rounded-full">
      <CheckBadgeIcon className="h-4 w-4 mr-1" />
      <span className="text-xs font-semibold"> Not Approved</span>
    </div>
  );
}

function LawyerProfile() {
  const { id } = useSelector((state) => state.lawyer);

    const { data, isLoading, error, refetch } = useQuery(
      ["lawyer", id],
      async () => {
        const response = LawyerRequests.get(`/lawyerData/${id}`).then(
          (res) => res.data
        );
        const data = await response;
        return data;
      }
    );
  console.log("data",data);
  const { name, email,image, mobile,place,about,experience,is_approved } = data ? data.data : {};

   useEffect(() => {
     refetch();
   }, [id, refetch]);

  const handleEditProfile = () => {
    console.log("refetch");
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
 


  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="profile lg:w-2/3 h-64 m-5 lg:m-5 shadow-xl rounded-xl flex">
            <div className="image">
              <Badge
                content={<EditImage />}
                overlap="circular"
                placement="bottom-end"
                className="h-8 w-8 mb-5 me-2 hover:bg-white hover:text-[#5d7582] bg-[#5d7582] cursor-pointer"
              >
                <img
                  size=""
                  src={image}
                  alt="tania andrew"
                  className="rounded-full mx-8 m-5 lg:w-52 lg:h-52 w-32 h-32 relative"
                />
              </Badge>
            </div>
            <div className="details m-5 p-5 ms-10 mb-0 h-auto flex flex-col">
              <p className="text-3xl font-bold text-blue-gray-800 font-serif mb-1">
                {name}
              </p>
              <div className="flex items-center mb-1">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <p>{place}</p>
              </div>
              <div className="flex items-center mb-1">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <p>{experience} Years</p>
              </div>
              <br />
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Email:</span>
                {email}
              </p>
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Mobile:</span>
                {mobile}
              </p>
            </div>
            <div className="p-10">
              <EditProfile onEdit={handleEditProfile} />
              {is_approved ? <VerifiedTag /> : <NotVerifiedTag />}
            </div>
          </div>

          <div className="flc lg:w-1/3 h-64 m-5 lg:ms-0 shadow-xl rounded-xl"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="about lg:w-full h-auto p-5 m-5 lg:m-5 shadow-xl rounded-xl flex-col relative">
            <div className="w-full flex flex-row">
              <h2 className="text-lg font-semibold mb-2 p-4 pb-0">
                Practiced areas
              </h2>
              {/* <button
              className=" text-black px-4 py-2 absolute top-0 right-0 m-4"
              //onClick="editContent()"
            >
              <PencilSquareIcon className="h-8 w-8" />
            </button> */}
              <div className=" text-black px-4 py-2 absolute top-0 right-0 m-4">
                <EditSpecialised />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                <p>Family</p>
                <XCircleIcon className="w-5 h-5 ms-2" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center  sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5 V" />
              </div>
              <div className="flex-shrink-0 h-8 w-auto border-2 border-blue-gray-900 rounded-3xl m-2 p-2 flex justify-center items-center sm:w-auto">
                <p>Business consulting</p>
                <XCircleIcon className="w-5 h-5 ms-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="about lg:w-full h-64 m-5 lg:m-5 shadow-xl rounded-xl flex-col relative">
            <h2 className="text-lg font-semibold mb-2 p-4 pb-0">About</h2>
            <div className=" text-black px-4 py-2 absolute top-0 right-0 m-4">
              <EditAbout val={data} />
            </div>

            <p className="mt-8 m-5">{about}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LawyerProfile;
