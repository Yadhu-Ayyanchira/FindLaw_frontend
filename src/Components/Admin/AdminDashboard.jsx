import React from "react";
import NavBar from "../Common/Admin/NavBar";
import Sidebar from "../Common/Admin/Sidebar";
import { Card, Typography,Button } from "@material-tailwind/react";

function AdminDashboard() {
  const TABLE_HEAD = ["Name", "Job", "Employed","nopp", ""];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
      nopp:"<NAME>",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
      nopp:"<NAME>"
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
      nopp : "<NAME> ",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
      nopp :" <NAME>, <NAME>,<NAME>",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
      noppl:"<NAME>",
    },
  ];
  return (
    <>
      <div className="h-screen grid grid-rows-[5rem] ">
        <div>
          <NavBar />
        </div>
        <div className="md:grid md:grid-cols-[18.7rem,1fr]">
          <div className="invisible md:visible">
            <Sidebar />
          </div>

          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, date, nopp }, index) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {nopp}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <a href="#buttons-with-link">
                        <Button>Block</Button>
                      </a>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
