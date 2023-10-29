/* eslint-disable react/jsx-key */
import {
  Card,
  Input,
  Typography,
  Button,
  Radio,
  CardFooter,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, BookmarkIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { MapPinIcon, } from "@heroicons/react/24/solid";
import { useQuery,  } from "@tanstack/react-query";
import { allLawyers } from "../../Api/UserApi";
import Loader from "../Loader/Loader";
import { useLocation,useNavigate } from "react-router-dom";
// import EmptyPage from "../EmptyPage/EmptyPage";

function LawyerFilter() {

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate()
  const location =useLocation()
  const searching = location.state && location.state.search;
  // if(searching){
  //   setTimeout(() => {
  //     setSearch(searching)
  //   }, 1500);
  // }

   useEffect(() => {
     if (searching) {
       const timeoutId = setTimeout(() => {
         setSearch(searching);
       }, 100);

       return () => clearTimeout(timeoutId);
     }
   }, [searching]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [search,searching]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleLawyerview = (id) =>{
    navigate(`/singlelawyer/`, { state: { id } });
  }

    const handlePageChange = (newPage) => {
      const totalPages = Math.ceil(data.count / data.pageSize);
      if (newPage < 1 || newPage > totalPages) {
        return;
      }
      setPage(newPage);
    };

  const { isLoading, error, data } = useQuery({
    queryKey: ["lawyers", { page: page, filter, search: debouncedSearch }],
    queryFn: () =>
      allLawyers({ page: page, filter, search: debouncedSearch }).then(
        (res) => res.data
      ),
  });
  if(data){
    console.log("dataas",data);
  }
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
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

          <div className="max-h-screen overflow-y-scroll no-scrollbar">
            <Card className=" h-auto ">
              {data?.data.map((e) => (
                <Card key={e._id} className="h-40 m-3 py-2 bg-blue-gray-50">
                  <div className="flex items-center">
                    <img
                      src={e.image}
                      onClick={() => handleLawyerview(e._id)}
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
                  <CardFooter className="self-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    ></Typography>
                    <div className="flex items-center gap-2 text-black">
                      <Button
                        variant="text"
                        className="flex items-center gap-2 text-black text-base"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                      >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />{" "}
                        Previous
                      </Button>
                      <Typography
                        color="gray"
                        className="font-normal text-black"
                      >
                        Page <strong className="text-black mx-4 font-serif text-lg">{page}</strong>{" "}
                        of{" "}
                        <strong className="text-black mx-4">
                          {Math.ceil(data.count / data.pageSize)}
                        </strong>
                      </Typography>
                      <Button
                        variant="text"
                        className="flex items-center gap-2 text-black text-base"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={
                          page === Math.ceil(data.count / data.pageSize)
                        }
                      >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default LawyerFilter;
