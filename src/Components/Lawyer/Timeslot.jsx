import { Typography } from "@material-tailwind/react"
import AddSlot from "./AddSlot";

function Timeslot() {
  return (
    <>
      <div className="container mx-auto">
        <div className="m-3 flex items-center justify-between gap-8 bg-[#dffbee] shadow-xl rounded-md p-3">
          <div>
            <Typography variant="h5" color="blue-gray">
              SLOTS AND BOOKINGS
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about provided slotes and Bookings
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddSlot />
          </div>
        </div>
      </div>
    </>
  );
}
export default Timeslot