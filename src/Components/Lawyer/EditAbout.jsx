import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Spinner,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { LawyerAboutEdit } from "../../Api/LawyerApi";
import { setlawyerDetails } from "../../Redux/LawyerSlice";

function EditAbout() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { id, about } = useSelector(
    (state) => state.lawyer
  );
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [data, setData] = useState({
    about: "",
  });
 
  useEffect(() => {
    setData({
      about: about,
    });
  }, [about]);

  const handleOpen = () => setOpen(!open);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
    try {
      const { name, mobile, place, experience } = data;
      if (about.trim() == "") {
        setError("Empty field...!");
      }  else {
        const response = await LawyerAboutEdit(data, id);
        console.log("LawyerAboutEdit uu", response);
        if (response.data.updated) {
          const detail = response.data.data;
          console.log("LawyerAboutEdit name is", detail.name);
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
        console.log("edit data", response);
        queryClient.invalidateQueries(["lawyer", id]);
        handleOpen();
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
        <span className="ml-1">Edit About</span>
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
                  name="about"
                  label="About"
                  value={data.about}
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

export default EditAbout;
