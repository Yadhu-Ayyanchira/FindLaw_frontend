import { useState } from "react";
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
import { UpdateImage } from "../../Api/UserApi";
import Loader from "../Loader/Loader";
import { setUserDetails } from "../../Redux/UserSlice";

function EditImage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const { id, image } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setError(null);
    setOpen(!open);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setError("Invalid file type. Please choose a JPEG, PNG, or GIF image.");
      return false;
    }

    if (file.size > maxSize) {
      setError("Image size is too large. Please choose a smaller image.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateImage(selectedImage)) {
      return; // Don't proceed if the image is not valid
    }

    try {
      const response = await UpdateImage(id, selectedImage);
      if (response.status === 200) {
        const detail = response.data.data;
        dispatch(
          setUserDetails({
            id: detail?._id,
            name: detail?.name,
            email: detail?.email,
            mobile: detail?.mobile,
            place: detail?.place,
            image: detail?.image,
          })
        );
        handleOpen();
      }
      queryClient.invalidateQueries(["lawyer", id]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <p
        onClick={handleOpen}
        className="flex items-center hover:border-1 hover:text-black me-10 cursor-pointer rounded-xl text-[#5d7582] text-xs"
      >
        <PencilSquareIcon className="w-6 h-6 text-white hover:text-black" />
      </p>

      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="rounded-none"
      >
        <DialogHeader>EDIT PROFILE IMAGE</DialogHeader>
        <DialogBody className="flex justify-center">
          <div className="w-20 h-20 me-6">
            <img
              size=""
              src={selectedImage ? URL.createObjectURL(selectedImage) : image}
              alt="tania andrew"
              className="rounded-full  m-5 lg:w-20 lg:h-20 w-20 h-20 me-10"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <Input
                type="file"
                name="image"
                label="Choose Image"
                onChange={handleImageChange}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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

export default EditImage;
