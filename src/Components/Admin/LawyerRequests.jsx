import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";
import { approveLawyer, getLawyerRequests } from "../../Api/AdminApi";
import AdminRequest from "../../Utils/AdminRequest";
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
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import EmptyPage from "../EmptyPage/EmptyPage";

const TABLE_HEAD = ["Name", "Email", "Status", "Mobile", ""];

function LawyerRequests() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (newPage) => {
    const totalPages = Math.ceil(data.count / data.pageSize);
    if (newPage < 1 || newPage > totalPages) {
      return;
    }
    setPage(newPage);
  };
  
  // <---------------------query start------------------------------->
 const queryClient = useQueryClient();
 const { isLoading, error, data } = useQuery({
   queryKey: ["lawyers", { page: page, filter, search: debouncedSearch }],
   queryFn: () =>
     getLawyerRequests({ page: page, filter, search: debouncedSearch }).then(
       (res) => res.data
     ),
   enabled: true,
 });
  // <---------------------query end------------------------------->

  const handleAction = async (Id) => {
    await approveLawyer(Id);
    queryClient.invalidateQueries("lawyers");
  };
  if (!data || data.data.length < 0) {
    return <EmptyPage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
              LAWYER REQUESTS
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are all the Lawyer requests
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                value={search}
                onChange={handleSearchChange}
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
              (
                { image, name, mobile, email, verified, is_approved, _id },
                index
              ) => {
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
                    {/* <td> */}
                    {is_approved === false ? (
                      <td className={classes}>
                        <Tooltip content="Approve Lawyer">
                          <Button
                            size="sm"
                            color="green"
                            className="rounded-md flex gap-3"
                            variant="outlined"
                            onClick={() => handleAction(_id)}
                          >
                            Approve
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
                            <AiFillCheckCircle
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-4 w-4"
                            />
                            Approved
                          </Button>
                        </Tooltip>
                      </td>
                    )}
                    {/* </td> */}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="self-center">
        <div className="flex items-center gap-2 text-black">
          <Button
            variant="text"
            className="flex items-center gap-2 text-black text-base"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <Typography color="gray" className="font-normal text-black">
            Page{" "}
            <strong className="text-black mx-4 font-serif text-lg">
              {page}
            </strong>{" "}
            of{" "}
            <strong className="text-black mx-4">
              {Math.ceil(data.count / data.pageSize)}
            </strong>
          </Typography>
          <Button
            variant="text"
            className="flex items-center gap-2 text-black text-base"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(data.count / data.pageSize)}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default LawyerRequests;
