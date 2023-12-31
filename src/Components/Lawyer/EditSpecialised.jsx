import React, { useState } from 'react'
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { addExpertised } from '../../Api/LawyerApi';
import {GenerateSuccess,GenerateError} from '../../Toast/GenerateError'
import { ToastContainer } from 'react-toastify';


function EditSpecialised({refetch}) {
   const [open, setOpen] = useState(false);
   const [error, setError] = useState("");
   const [data,setData] = useState("")
   const handleOpen = () => {
     setError("");
     setOpen(!open);
   };

   const handleSubmit = async (e) => {
    e.preventDefault();
     const response = await addExpertised(data)
     if(response.data.created){
      GenerateSuccess('Added Successfully')
      handleOpen()
      refetch()
     }else{
      GenerateError('Something went wrong!')
      // setTimeout(() => handleOpen(), 2000);
      handleOpen()
     }
   }
  return (
    <>
    <ToastContainer/>
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
        <DialogHeader>ADD SPECIALISED AREAS</DialogHeader>
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
                  onChange={(event) => setData(event.target.value)}
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

export default EditSpecialised