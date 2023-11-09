import {
  Button,
  Card,
  Input,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
} from "@material-tailwind/react";
import banner from "../../Assets/Images/hero.jpg";
import { CheckCircleIcon, MapPinIcon,} from "@heroicons/react/24/solid";
import fillform from "../../Assets/Images/fillform.svg"
import call from "../../Assets/Images/call.svg"
import schedule from "../../Assets/Images/schedule.svg"
import payment from "../../Assets/Images/payment.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const [search, setSearch] = useState();
  const navigate =useNavigate()
    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search){
      alert("Please enter a valid search")
      }else{
        navigate("/filter", { state: { search } });
        }
    
  }
  return (
    <>
      {/* <---------------------------------BANNER-------------------------------------------------> */}
      <figure className="relative h-[400px] w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={banner}
          alt="nature image"
        />
        <figcaption className="absolute bottom-24 left-[450px] flex w-3/6 -translate-x-2/4 justify-center  bg-transparent py-4 px-6 shadow-lg shadow-black/5 saturate-200 ">
          <div className="flex flex-col">
            <div className="pb-8 w-2/3 self-center">
              <Typography
                variant="h1"
                color="blue-gray"
                className="font-semibold"
              >
                Experienced lawyers are ready to help
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography variant="h6">FIND A LAWYER HERE</Typography>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                  <Input
                    type="search"
                    placeholder="Search"
                    //label="Search"
                    value={search}
                    onChange={handleSearchChange}
                    containerProps={{
                      className: "min-w-[288px]",
                    }}
                    className="  !border-orange-800  pl-9 placeholder:text-black focus:!border-blue-gray-900 bg-gray-400"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Button
                    type="submit"
                    size="md"
                    className="mt-1 rounded-lg sm:mt-0"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </figcaption>
      </figure>
      {/* <---------------------------------BANNER-------------------------------------------------> */}
      <div className="flex flex-col py-9 pb-0 bg-gray-100">
        <Typography
          variant="h2"
          className="self-center font-serif text-gray-900"
        >
          TOP RATED LAWYERS
        </Typography>
        <div className="flex flex-row justify-center">
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
          <Card className="shadow-2xl m-5 w-[27%] p-2">
            <div className="flex flex-row">
              <div className="row flex flex-row">
                <img
                  size=""
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                  alt="tania andrew"
                  className="  m-4 me-8 lg:w-32 lg:h-40 w-32 h-32 rounded-xl"
                />
              </div>
              <Card className="flex flex-col mx-8 m-4 lg:w-72 lg:h-40 w-32 h-32 bg-blue-gray-50 p-3">
                <p className="text-2xl font-bold text-black self-center font-serif mb-1">
                  Yadhu
                </p>
                <div className="self-center flex flex-row ">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p className="ms-2">
                    <span className="font-bold text-black">5</span>
                    <span className="text-xs">Reviews</span>
                  </p>
                </div>
                <p className="self-center">
                  Avarage rating <span className="text-black">4.9</span>
                </p>
                <p className="self-center">Location</p>
                <p className="flex flex-row self-center">
                  <MapPinIcon className="w-5" />
                  <span className="text-black">Thrissur</span>
                </p>
              </Card>
            </div>
            <Typography
              variant="h5"
              color="black"
              className="ps-8 font-semibold"
            >
              Practiced areas
            </Typography>
            <Typography variant="h6" className="ps-8">
              Adoption,Criminal Defence,Juvenile Law,Tax,GST,Family...
            </Typography>

            <hr className="border border-solid border-black w-96 self-center"></hr>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}

            <div className="pt-3">
              <p className="text-xl font-semibold">Top Notch</p>
              <div className="self-center flex flex-row ">
                <p className="text-sm">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="ms-2">
                  <span className="text-xs">By yadhu</span>
                </p>
              </div>
              <p className="mt-2">
                Attorney Clint Wilson was referred to us by another attorney. He
                came highly recommended as the most qualified for the property
                issues we were dealing with at the time...Read more
              </p>
            </div>
            <Button variant="outlined">Profile</Button>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}
          </Card>
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
          <Card className="shadow-2xl m-5 w-[27%] p-2">
            <div className="flex flex-row">
              <div className="row flex flex-row">
                <img
                  size=""
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                  alt="tania andrew"
                  className="  m-4 me-8 lg:w-32 lg:h-40 w-32 h-32 rounded-xl"
                />
              </div>
              <Card className="flex flex-col mx-8 m-4 lg:w-72 lg:h-40 w-32 h-32 bg-blue-gray-50 p-3">
                <p className="text-2xl font-bold text-black self-center font-serif mb-1">
                  Yadhu
                </p>
                <div className="self-center flex flex-row ">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p className="ms-2">
                    <span className="font-bold text-black">5</span>
                    <span className="text-xs">Reviews</span>
                  </p>
                </div>
                <p className="self-center">
                  Avarage rating <span className="text-black">4.9</span>
                </p>
                <p className="self-center">Location</p>
                <p className="flex flex-row self-center">
                  <MapPinIcon className="w-5" />
                  <span className="text-black">Thrissur</span>
                </p>
              </Card>
            </div>
            <Typography
              variant="h5"
              color="black"
              className="ps-8 font-semibold"
            >
              Practiced areas
            </Typography>
            <Typography variant="h6" className="ps-8">
              Adoption,Criminal Defence,Juvenile Law,Tax,GST,Family...
            </Typography>

            <hr className="border border-solid border-black w-96 self-center"></hr>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}

            <div className="pt-3">
              <p className="text-xl font-semibold">Top Notch</p>
              <div className="self-center flex flex-row ">
                <p className="text-sm">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="ms-2">
                  <span className="text-xs">By yadhu</span>
                </p>
              </div>
              <p className="mt-2">
                Attorney Clint Wilson was referred to us by another attorney. He
                came highly recommended as the most qualified for the property
                issues we were dealing with at the time...Read more
              </p>
            </div>
            <Button variant="outlined">Profile</Button>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}
          </Card>
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
          <Card className="shadow-2xl m-5 w-[27%] p-2">
            <div className="flex flex-row">
              <div className="row flex flex-row">
                <img
                  size=""
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                  alt="tania andrew"
                  className="  m-4 me-8 lg:w-32 lg:h-40 w-32 h-32 rounded-xl"
                />
              </div>
              <Card className="flex flex-col mx-8 m-4 lg:w-72 lg:h-40 w-32 h-32 bg-blue-gray-50 p-3">
                <p className="text-2xl font-bold text-black self-center font-serif mb-1">
                  Yadhu
                </p>
                <div className="self-center flex flex-row ">
                  <p>⭐️⭐️⭐️⭐️⭐️</p>
                  <p className="ms-2">
                    <span className="font-bold text-black">5</span>
                    <span className="text-xs">Reviews</span>
                  </p>
                </div>
                <p className="self-center">
                  Avarage rating <span className="text-black">4.9</span>
                </p>
                <p className="self-center">Location</p>
                <p className="flex flex-row self-center">
                  <MapPinIcon className="w-5" />
                  <span className="text-black">Thrissur</span>
                </p>
              </Card>
            </div>
            <Typography
              variant="h5"
              color="black"
              className="ps-8 font-semibold"
            >
              Practiced areas
            </Typography>
            <Typography variant="h6" className="ps-8">
              Adoption,Criminal Defence,Juvenile Law,Tax,GST,Family...
            </Typography>

            <hr className="border border-solid border-black w-96 self-center"></hr>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}

            <div className="pt-3">
              <p className="text-xl font-semibold">Top Notch</p>
              <div className="self-center flex flex-row ">
                <p className="text-sm">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="ms-2">
                  <span className="text-xs">By yadhu</span>
                </p>
              </div>
              <p className="mt-2">
                Attorney Clint Wilson was referred to us by another attorney. He
                came highly recommended as the most qualified for the property
                issues we were dealing with at the time...Read more
              </p>
            </div>
            <Button variant="outlined">Profile</Button>
            {/* <---------------------------------------REVIEW---------------------------------------------> */}
          </Card>
          {/* <-----------------------------------------------------one card-----------------------------------------------> */}
        </div>
        <hr className="border border-solid border-black w-3/4 self-center"></hr>
        <div className="row flex flex-row w-full justify-evenly p-10 py-20">
          <div className="left w-[30%] border-b-2 border-blue-500 ">
            <p className="text-5xl font-bold font-serif pb-5">
              Legal Advice Online From Top Lawyers
            </p>
            <div className="w-[32rem]">
              <Timeline>
                <TimelineItem className="pb-4">
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon variant="ghost" className="p-2">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Affordable legal solutions from senior lawyers
                    </Typography>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="pb-4">
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon variant="ghost" className="p-2">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Full litigation, documentation and support
                    </Typography>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="pb-4">
                  <TimelineHeader>
                    <TimelineIcon variant="ghost" className="p-2">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Guaranteed satisfaction or your money back.
                    </Typography>
                  </TimelineHeader>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="right border-t-2 border-blue-700 flex flex-row justify-evenly w-[55%] ">
            <div className="fillform w-[15%] flex flex-col justify-center ">
              <img src={fillform} alt="fill form" className="w-24 pb-4" />
              <p className="text-xl font-bold self-center text-blue-500">
                FILL THE FORM
              </p>
            </div>
            <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
            <div className="fillform w-[15%] flex flex-col justify-center align-middle">
              <img src={schedule} alt="fill form" className="w-24 pb-4 " />
              <p className="text-xl font-bold self-center text-blue-500">
                SCHEDULE AN APPOINTMENT
              </p>
            </div>
            <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
            <div className="fillform w-[15%] flex flex-col justify-center align-middle">
              <img src={payment} alt="fill form" className="w-24 pb-4" />
              <p className="text-xl font-bold self-center text-blue-500">
                MAKE A PAYMENT
              </p>
            </div>
            <hr className="border border-solid border-black w-14 h-1 bg-black self-center"></hr>
            <div className="fillform w-[15%] flex flex-col justify-center align-middle">
              <img src={call} alt="fill form" className="w-24 pb-4" />
              <p className="text-xl font-bold self-center text-blue-500">
                CALL THE LAWYER
              </p>
            </div>
          </div>
        </div>
        <Typography
          variant="h2"
          className="self-center font-serif text-gray-900"
        >
          WHY FIND LAW ?
        </Typography>
        <div className="flex flex-row justify-center h-96 w-full ">
          <Card className="shadow-2xl m-5 w-[20%] bg-transparent p-3">
            <div className="self-center py-4">
              <img src="src/Assets/Images/COMPUTER.svg" className="w-20" />
            </div>
            <div className="self-center pt-3">
              <p className="text-2xl font-semibold pb-3">COMPLETELY ONLINE</p>
              <p className="text-lg f">
                Our team of advisors will provide you with sound advice based on
                your needs. The entire procedure is very smooth and worry free.
              </p>
            </div>
          </Card>
          <Card className="shadow-2xl m-5 w-[20%] bg-transparent p-3">
            <div className="self-center py-4">
              <img src="src/Assets/Images/VIDEO.svg" className="w-20" />
            </div>
            <div className="pt-3">
              <div className="flex justify-center">
                <p className="text-2xl font-semibold pb-3">VIDEO CALL</p>
              </div>
              <p className="text-lg f">
                We provide quick fixes to busy clients through video calls.
                While maintaining their privacy over the phone or via email.
              </p>
            </div>
          </Card>
          <Card className="shadow-2xl m-5 w-[20%] bg-transparent p-3">
            <div className="self-center py-4">
              <img src="src/Assets/Images/MONEY.svg" className="w-20" />
            </div>
            <div className="self-center pt-3">
              <div className="flex justify-center">
                <p className="text-2xl font-semibold pb-3">SAVE MONEY</p>
              </div>
              <p className="text-lg f">
                No extra fees will be charged. Change lawyers quickly without
                having to pay more. While saving money, get excellent guidance
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
