import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
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
import { useSelector } from "react-redux";

// Import any additional dependencies or utilities needed for form handling

function EditProfile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const {id,name,place,mobile,email,verified} = useSelector((state)=>state.lawyer)

  const onSubmit = () =>{
    alert("fuck you")
  }

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
          <form onSubmit={onSubmit}>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="name" label="Name" value={name} />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="place" label="Place" value={place} />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="experience" label="Experience" />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="mobile" label="Mobile" />
              </div>
            </div>
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
