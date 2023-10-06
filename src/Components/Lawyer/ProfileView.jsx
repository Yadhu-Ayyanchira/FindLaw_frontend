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

function ProfileView() {
  const [open, setOpen] = useState(false); // Set the initial state to false
  const handleOpen = () => setOpen((cur) => !cur);

  // Assuming you have a lawyer object with initial values
  const initialLawyerData = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
    about: " ggbgjgogobgoogtog gutougog ghtoghogh tghogo gtgo gotjgo ggoghoh ouhor rfhroufo fr xrouhohto5 hto5to t 5ditho5ht d5uhto5 tu5uhto do5tho5h d u5hto5 hd5 douh5ot 5htto h5ot do5hto5ot  udh5ot od5htou 5outh", // Add the missing field
    place: "botoyyojy", // Add the missing field
    practice: "ith5jt5jto5t", // Add the missing field
    // ... other fields with initial values
  };
  const lawyer = localStorage.getItem("currentLawyer");
  console.log("imin law:::", lawyer);

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
        size="lg" // Set the size to your preference
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-black"
      >
        <Card className="mx-auto w-full max-w-[58rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-10 place-items-center"
          >
            <Typography variant="h3" color="white">
              Profile
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="body" color="gray">
              <strong>Name:</strong> {lawyerData.name}
            </Typography>
            <Typography variant="body" color="gray">
              <strong>Email:</strong> {lawyerData.email}
            </Typography>
            <Typography variant="body" color="gray">
              <strong>Mobile:</strong> {lawyerData.mobile}
            </Typography>
            <Typography variant="body" color="gray">
              <strong>About:</strong> {lawyerData.about}
            </Typography>
            <Typography variant="body" color="gray">
              <strong>Place:</strong> {lawyerData.place}
            </Typography>
            <Typography variant="body" color="gray">
              <strong>Practice:</strong> {lawyerData.practice}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleOpen} variant="gradient" fullWidth>
              Close
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default ProfileView;
