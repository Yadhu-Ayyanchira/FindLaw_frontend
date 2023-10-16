import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { NoSymbolIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon,MagnifyingGlassIcon,} from "@heroicons/react/24/outline";
import { manageLawyer } from "../../Api/AdminApi";
import AdminRequest from "../../Utils/AdminRequest";
import Loader from "../Loader/Loader"
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import EmptyPage from "../EmptyPage/EmptyPage";

const TABLE_HEAD = ["Name", "Email", "Status", "Mobile", ""];

function Lawyers() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["lawyers"],
    queryFn: () => AdminRequest.get("/lawyers").then((res) => res.data),
  });
  console.log("dataaa", data);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
const handleAction = async (userId) => {
  await manageLawyer(userId);
  queryClient.invalidateQueries("users");
};

if (isLoading) {
  return <Loader/>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}
if (!data || data.data.length === 0) {
  return <EmptyPage />;
}
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-2xl font-extrabold font-serif"
            >
              LAWYERS
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details of all Lawyers
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="black"
                    className="font-extrabold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map(
              ({ image, name, mobile, email, verified, is_blocked, _id }, index) => {
                const isLast = index === data.data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={image}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography color="black" className="font-serif ">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="black"
                        className="font-semibold"
                      >
                        {email}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td> */}
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          value={verified == true ? "Verified" : "Not verified"}
                          color={verified === true ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {(mobile = mobile ?? "00000")}
                      </Typography>
                    </td>
                    <>
                      {is_blocked === false ? (
                        <td className={classes}>
                          <Tooltip content="Block User">
                            <Button
                              size="sm"
                              color="red"
                              className="rounded-md flex gap-3"
                              variant="outlined"
                              onClick={() => handleAction(_id)}
                            >
                              <NoSymbolIcon
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4"
                              />
                              block
                            </Button>
                          </Tooltip>
                        </td>
                      ) : (
                        <td className={classes}>
                          <Tooltip content="unblock User">
                            <Button
                              size="sm"
                              color="green"
                              className="rounded-md flex px-5"
                              variant="outlined"
                              onClick={() => handleAction(_id)}
                            >
                              unblock
                            </Button>
                          </Tooltip>
                        </td>
                      )}
                    </>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Lawyers;
