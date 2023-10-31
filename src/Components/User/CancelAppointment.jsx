import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function CancelAppointment() {
     const [open, setOpen] = useState(false);

     const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        onClick={handleOpen}
        size="sm"
        className="my-1  bg-red-500 shadow-none "
        variant="filled"
      >
        cancel
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
            //onClick={handleCancel}
          >
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <ToastContainer />
    </>
  );
}

export default CancelAppointment;
