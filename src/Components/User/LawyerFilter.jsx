/* eslint-disable react/jsx-key */
import {
  Card,
  Input,
  Typography,
  Button,
  Radio,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, } from "@heroicons/react/24/solid";
import { useQuery,  } from "@tanstack/react-query";
import { allLawyers } from "../../Api/UserApi";
import Loader from "../Loader/Loader";
// import EmptyPage from "../EmptyPage/EmptyPage";

function LawyerFilter() {

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
  const { isLoading, error, data } = useQuery({
    queryKey: ["lawyers", { page: page, filter, search: debouncedSearch }],
    queryFn: () =>
      allLawyers({ page: page, filter, search: debouncedSearch }).then(
        (res) => res.data
      ),
  });
  console.log("jbdjkclljnlsdlsdnlsdns", data);
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  //    if (!data || data.data.length === 0) {
  //      return <EmptyPage />;
  //    }
  return (
    <>
      <div className="container mx-auto">
        <div className="h-16 flex items-center justify-around ">
          <div>
            <h1 className="text-black font-serif text-2xl">
              {data?.data.length} results
            </h1>
          </div>
          <div className="w-96">
            <Input
              label="Search"
              value={search}
              onChange={handleSearchChange}
              variant="standard"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
        <div className="grid grid-cols-[20rem,1fr] h-screen m-3">
          <div>
            <Card className="h-auto m-3 bg-blue-gray-50">
              <Radio
                name="rating"
                label="⭐️⭐️⭐️⭐️⭐️"
                onChange={() => alert("Clicked ⭐️⭐️⭐️⭐️⭐️")}
              />
              <Radio
                name="rating"
                label="⭐️⭐️⭐️⭐️"
                onChange={() => alert("Clicked ⭐️⭐️⭐️⭐️")}
              />
              <Radio
                name="rating"
                label="⭐️⭐️⭐️"
                onChange={() => alert("Clicked ⭐️⭐️⭐️")}
              />
              <Radio
                name="rating"
                label="⭐️⭐️"
                onChange={() => alert("Clicked ⭐️⭐️")}
              />
              <Radio
                name="rating"
                label="⭐️"
                onChange={() => alert("Clicked ⭐️")}
              />
            </Card>
          </div>

          <div className="max-h-screen overflow-y-scroll">
            {data?.data.map((e) => (
              <Card className="h-40 m-3 py-2 bg-blue-gray-50 overflow-hidden">
                <div className="flex items-center">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    alt=""
                    className="rounded-lg lg:w-32 lg:h-32 w-36 h-36 m-2"
                  />
                  <div className="ps-8 h-full">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      size="xl"
                      className="pt-3  font-serif"
                    >
                      {e.name}
                    </Typography>

                    <Typography
                      color="blue-gray"
                      size="xl"
                      className="text-lg font-bold pb-2 flex items-center"
                    >
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {e.place}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      size="xl"
                      className="text-lg font-bold"
                    >
                      <span className="font-semibold text-black">
                        Specialized in:
                      </span>{" "}
                      Family Buissines
                    </Typography>
                    <Typography
                      color="blue-gray"
                      size="xl"
                      className="text-lg font-bold"
                    >
                      <span className="font-semibold text-black">Email:</span>{" "}
                      {e.email}
                    </Typography>
                  </div>
                  <div className="h-full ps-24 flex items-center  border-e-2">
                    <Typography className="mx-2">⭐️⭐️⭐️⭐️⭐️</Typography>
                  </div>
                  <div className="w-72 h-full flex flex-col justify-center items-center">
                    <Button className="flex items-center gap-3 bg-green-600  my-2">
                      <BookmarkIcon className="h-5 text-white" />
                      save
                    </Button>
                    <Typography
                      color="blue-gray"
                      size="xl"
                      className="text-base font-serif"
                    >
                      {e.experience} Years of experience
                    </Typography>
                    <Button className="flex items-center gap-3 bg-green-600">
                      <BookmarkIcon className="h-5 text-white" />
                      save
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LawyerFilter;
