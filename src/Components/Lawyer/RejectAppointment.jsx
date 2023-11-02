import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { GenerateError, GenerateSuccess } from "../../Toast/GenerateError";
import { rejectAppointment } from "../../Api/LawyerApi";
function RejectAppointment({ id, refetch }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleReject = async () => {
    try {
        const response =await rejectAppointment({id})
        if(response.status==200){
            GenerateSuccess(response.data.message);
            setTimeout(() => handleOpen, 2000);
            refetch();
        }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <Button
        onClick={handleOpen}
        size="sm"
        className="my-1  bg-red-500 shadow-none "
        variant="filled"
      >
        Reject
      </Button>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogBody className="flex flex-col justify-center items-center">
          <Typography variant="h5"> Are You Sure </Typography>
          <Typography variant="h6"> Cancel the Booking </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            size="sm"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="filled"
            size="sm"
            color="green"
            onClick={handleReject}
          >
            <span>Yes</span>
          </Button>
        </DialogFooter>
        <ToastContainer />
      </Dialog>
      <ToastContainer />
    </>
  );
}

export default RejectAppointment;
