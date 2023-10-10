import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

function EditProfile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // Assuming you have a lawyer object with initial values
  const initialLawyerData = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
    // ... other fields with initial values
  };
  const lawyer = localStorage.getItem("currentLawyer");
  console.log('imin law:::',lawyer);


  const [lawyerData, setLawyerData] = useState(initialLawyerData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLawyerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Assuming you have an updateLawyer function that makes an API call to update the lawyer data
    // Replace this with the actual function you use to update the lawyer data
    updateLawyer(lawyerData)
      .then(() => {
        console.log("Lawyer data updated successfully");
        handleOpen(); // Close the dialog after updating
      })
      .catch((error) => {
        console.error("Error updating lawyer data:", error);
      });
  };

  return (
    <>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-black"
      >
        <form onSubmit={handleUpdate}>
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-10 place-items-center"
            >
              <Typography variant="h3" color="white">
                Edit Profile
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Name"
                size="lg"
                name="name"
                value={lawyerData.name}
                onChange={handleChange}
              />
                <Input
                  label="Mobile"
                  size="lg"
                  name="mobile"
                  value={lawyerData.mobile}
                  onChange={handleChange}
                />
              <Input
                label="About"
                size="lg"
                name="about"
                value={lawyerData.email}
                onChange={handleChange}
              />
              <Input
                label="Place"
                size="lg"
                name="place"
                value={lawyerData.email}
                onChange={handleChange}
              />
              <Input
                label="Practice"
                size="lg"
                name="practice"
                value={lawyerData.email}
                onChange={handleChange}
              />
              {/* Add similar Input components for other fields */}
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Update
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}

export default EditProfile;
