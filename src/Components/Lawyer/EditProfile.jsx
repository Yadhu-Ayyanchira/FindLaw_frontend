import  { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { LawyerProfileEdit } from "../../Api/LawyerApi";
import { setlawyerDetails } from "../../Redux/LawyerSlice";

function EditProfile() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const {id, name, place,mobile,experience } = useSelector((state) => state.lawyer);
  const dispatch = useDispatch()
  const queryClient = useQueryClient();
  

  const [data, setData] = useState({
    name: "",
    mobile: "",
    place: "",
    experience: 0,
  });

useEffect(() => {
  setData({
    name: name,
    place: place ,
    mobile: mobile,
    experience: experience,
  });
}, [name, place, mobile, experience]);

   const handleOpen = () => {
     setError("");
     setOpen(!open);
   };
  
  const handleChange = ({ currentTarget: input }) => {
    setError("");
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[789]\d{9}|(\d[ -]?){10}\d)$/;
    const placeRegex = /^[A-Za-z\s\-]+$/;    try {
      const {name, mobile, place, } = data
      if(name.trim()== "" || !name.match(placeRegex)){
        setError("Invalid Name");
      }else if(place.trim()=="" || !place.match(placeRegex)){
        setError("Invalid Place")
      }else if(mobile.trim()=="" || !mobile.match(mobileRegex)){
        setError("Invalid number")
      }else{
        const response = await LawyerProfileEdit(data,id)
        if(response.data.updated){
          const detail = response.data.data
          dispatch(
            setlawyerDetails({
              id: detail?._id,
              name: detail?.name,
              email: detail?.email,
              mobile: detail?.mobile,
              place: detail?.place,
              verified: detail?.verified,
              experience: detail?.experience,
              about: detail?.about,
              image: detail?.image,
            })
          );
        }
        console.log("edit data",response);
        queryClient.invalidateQueries(["lawyer", id]);
        handleOpen()     
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <>
      <p
        onClick={handleOpen}
        className="flex items-center hover:border-1 hover:text-black me-10 cursor-pointer rounded-xl text-[#5d7582] text-xs"
      >
        <PencilSquareIcon className="w-8 h-8 m-3" />
        <span className="ml-1">Edit Profile</span>
      </p>

      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="rounded-none"
      >
        <DialogHeader>EDIT PROFILE</DialogHeader>
        <DialogBody className="flex justify-center ">
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input
                  size="md"
                  variant="standard"
                  name="name"
                  label="Name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input
                  size="md"
                  variant="standard"
                  name="place"
                  label="Place"
                  value={data.place}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input
                  size="md"
                  variant="standard"
                  name="experience"
                  label="Experience"
                  value={data.experience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input
                  size="md"
                  variant="standard"
                  name="mobile"
                  label="Mobile"
                  value={data.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
              {error && <p className="text-center text-red-600">{error}</p>}
            <DialogFooter className="flex justify-between">

              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="filled" type="submit" color="green">
                <span>Save</span>
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default EditProfile;
