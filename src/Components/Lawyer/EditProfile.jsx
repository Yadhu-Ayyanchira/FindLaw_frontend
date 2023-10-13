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

// Import any additional dependencies or utilities needed for form handling

function EditProfile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  // Uncomment and utilize the necessary dependencies and form handling logic
  // const { doctorInfo } = useSelector((state) => state.doctor);
  // const id = doctorInfo.id;
  // const queryClient = useQueryClient();

  // const initialValues = {
  //   name: doctor ? doctor.name : "",
  //   currentHospital: doctor ? doctor.currentHospital : "",
  //   department: doctor ? doctor.department : "",
  //   qualification: doctor ? doctor.qualification : "",
  //   experience: doctor ? doctor.experience : "",
  //   description: doctor ? doctor.description : "",
  // };

  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleBlur,
  //   handleSubmit,
  //   handleChange,
  //   setFieldValue,
  // } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: doctorEditProfileSchema,
  //   enableReinitialize: true,
  //   onSubmit: async (values) => {
  //     const response = await editProfile(values, id);
  //     if (response) {
  //       setOpen(!open);
  //       queryClient.invalidateQueries(["doctor"]);
  //     }
  //   },
  // });
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
                <Input size="md" variant="standard" name="name" label="Name" />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="name" label="Name" />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="name" label="Name" />
              </div>
            </div>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <div className="my-3">
                <Input size="md" variant="standard" name="name" label="Name" />
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
