import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { GenerateSuccess } from "../../Toast/GenerateError";
import { ToastContainer } from "react-toastify";
import { ShareVideoLink } from "../../Api/LawyerApi";
function ShareLink({ id }) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = useState("");
  const handleOpen = () => setOpen(!open);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!link) {
      console.log("link cany be blank");
    } else {
      const data = {
        link: link,
        id: id,
      };
      const response = await ShareVideoLink(data);

      if (response.data.created) {
        setOpen(!open);
        GenerateSuccess("link shared successfully");
      }
    }
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        size="sm"
        className="my-1 flex items-center gap-3 bg-blue-500 shadow-none me-2"
        variant="filled"
      >
        <ShareIcon className="h-5 w-5" />
        share link
      </Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <Input
              variant="standard"
              label="paste video call link here"
              onChange={(e) => setLink(e.target.value)}
            />
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
            <Button variant="filled" color="light-blue" size="sm" type="submit">
              <span>send</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
      <ToastContainer />
    </>
  );
}


export default ShareLink;