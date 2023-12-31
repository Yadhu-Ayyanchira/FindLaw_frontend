import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Card,
  CardBody,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addSlot } from "../../Api/LawyerApi";
import { GenerateError, GenerateSuccess } from "../../Toast/GenerateError";
import moment from "moment";

function AddSlot() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    startdate: "",
    enddate: "",
    startTimeHour: "",
    startTimeMinute: "",
    startTimeAmPm: "",
    endTimeHour: "",
    endTimeMinute: "",
    endTimeAmPm: "",
  });
  const queryClient = useQueryClient();

  const handleOpen = () => setOpen(!open);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError("");
  };
  const setFieldValue = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
    setError("");
  };

  const constructTime = (hour, minute, amPm) => {
    let formattedTime = `${hour}:${minute}`;

    // Adjust for AM/PM
    if (amPm === "PM") {
      const hourInt = parseInt(hour, 10);
      if (hourInt < 12) {
        formattedTime = `${hourInt + 12}:${minute}`;
      }
    }

    return formattedTime;
  };

  const constructedTime = (time) => {
    const timeArray = time.split(":");
    const minArray = timeArray[1].split(" ");
    const hour = timeArray[0];
    const minute = minArray[0];
    const amPm = minArray[1];
    console.log("array is", hour, minute, amPm);
    let formattedTime = `${hour}:${minute}`;

    // Adjust for AM/PM
    if (amPm === "PM") {
      const hourInt = parseInt(hour, 10);
      if (hourInt < 12) {
        formattedTime = `${hourInt + 12}:${minute}`;
      }
    }

    return formattedTime;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      startdate,
      enddate,
      startTimeHour,
      startTimeMinute,
      startTimeAmPm,
      endTimeHour,
      endTimeMinute,
      endTimeAmPm,
    } = data;
    if (
      startdate.trim() === "" ||
      enddate.trim() === "" ||
      startTimeHour.trim() === "" ||
      startTimeMinute.trim() === "" ||
      startTimeAmPm.trim() === "" ||
      endTimeHour.trim() === "" ||
      endTimeMinute.trim() === "" ||
      endTimeAmPm.trim() === ""
    ) {
      setError("Enter all fields");
      GenerateError("Enter all fields");
    }else if (moment(startdate).isBefore(moment(), "day")) {
      //new Date(startdate) < new Date()
      setError("Cannot select past dates or today's date");
      GenerateError("cannot select past dates");
    } else if (new Date(enddate) < new Date(startdate)) {
      setError("Invalid date selection");
      GenerateError("invalid End date");
    } else {
      const startTime = constructTime(
        data.startTimeHour,
        data.startTimeMinute,
        data.startTimeAmPm
      );
      const endTime = constructTime(
        data.endTimeHour,
        data.endTimeMinute,
        data.endTimeAmPm
      );
      const slotData = {
        startDate: data.startdate,
        endDate: data.enddate,
        startTime: startTime,
        endTime: endTime,
      };
      if (
        new Date(startdate).toDateString() === new Date().toDateString()
      ) {
        console.log(constructedTime(startTime), "im fin", constructedTime(endTime));
        if (constructedTime(startTime) >= constructedTime(endTime) || constructedTime(startTime)<moment().format('HH:mm')) {
          setError("Invalid time selection");
          GenerateError("Invalid time");
          return;
        }
      }
      try {
        const response = await addSlot(slotData);
        GenerateSuccess("Slot added");
        setTimeout(() => handleOpen(), 2000);
        console.log("resp isssa", response.response);
      } catch (error) {
        if (error.response.status === 409) {
          GenerateError("Time or date already exist");
        }
      }
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="filled" className="bg-[#5d7582]">
        add slot
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <ToastContainer />
        <DialogHeader>ADD SLOTS</DialogHeader>
        <Card className="">
          <CardBody>
            <form onSubmit={handleSubmit}>
              <p>Start Date</p>
              <Input
                variant="standard"
                label=""
                type="date"
                name="startdate"
                onChange={handleChange}
                value={data.startdate}
                className="font-serif"
              />

              <p>End Date</p>
              <Input
                variant="standard"
                label=""
                type="date"
                name="enddate"
                onChange={handleChange}
                value={data.enddate}
                className="font-serif"
              />
              <p>Start Time</p>
              <div className="grid grid-cols-3 my-3">
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="startTimeHour"
                    value={data.startTimeHour}
                    onChange={(selectedValue) => {
                      setFieldValue("startTimeHour", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="1"> 1</Option>
                    <Option value="2"> 2</Option>
                    <Option value="3"> 3</Option>
                    <Option value="4"> 4</Option>
                    <Option value="5"> 5</Option>
                    <Option value="6"> 6</Option>
                    <Option value="7"> 7</Option>
                    <Option value="8"> 8</Option>
                    <Option value="9"> 9</Option>
                    <Option value="10"> 10</Option>
                    <Option value="11"> 11</Option>
                    <Option value="12"> 12</Option>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="startTimeMinute"
                    value={data.startTimeMinute}
                    onChange={(selectedValue) => {
                      setFieldValue("startTimeMinute", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="00"> 00</Option>
                    <Option value="30"> 30</Option>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="startTimeAmPm"
                    value={data.startTimeAmPm}
                    onChange={(selectedValue) => {
                      setFieldValue("startTimeAmPm", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="AM"> AM</Option>
                    <Option value="PM"> PM</Option>
                  </Select>
                </div>
              </div>
              <p>End Time</p>
              <div className="grid grid-cols-3 mt-3">
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="endTimeHour"
                    value={data.endTimeHour}
                    onChange={(selectedValue) => {
                      setFieldValue("endTimeHour", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="1"> 1</Option>
                    <Option value="2"> 2</Option>
                    <Option value="3"> 3</Option>
                    <Option value="4"> 4</Option>
                    <Option value="5"> 5</Option>
                    <Option value="6"> 6</Option>
                    <Option value="7"> 7</Option>
                    <Option value="8"> 8</Option>
                    <Option value="9"> 9</Option>
                    <Option value="10"> 10</Option>
                    <Option value="11"> 11</Option>
                    <Option value="12"> 12</Option>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="endTimeMinute"
                    value={data.endTimeMinute}
                    onChange={(selectedValue) => {
                      setFieldValue("endTimeMinute", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="00"> 00</Option>
                    <Option value="30"> 30</Option>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select
                    variant="standard"
                    name="endTimeAmPm"
                    value={data.endTimeAmPm}
                    onChange={(selectedValue) => {
                      setFieldValue("endTimeAmPm", selectedValue);
                    }}
                    className="font-serif"
                  >
                    <Option value="AM"> AM</Option>
                    <Option value="PM"> PM</Option>
                  </Select>
                </div>
              </div>
              {error && <p className="text-center text-red-600">{error}</p>}
              <div className="my-3 flex justify-end">
                <Button type="submit">Add</Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}

export default AddSlot;
