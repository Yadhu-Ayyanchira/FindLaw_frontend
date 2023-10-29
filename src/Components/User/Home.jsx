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
  TimelineBody,
} from "@material-tailwind/react";
import banner from "../../Assets/Images/hero.jpg";
import {
  BellIcon,
  CurrencyDollarIcon,
  HomeIcon,
  MapPinIcon,
  CheckIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";
function Home() {
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
              <form action="">
                <div className="flex flex-row">
                  <Input
                    type="search"
                    placeholder="Search"
                    containerProps={{
                      className: "min-w-[288px]",
                    }}
                    className="  !border-orange-800  pl-9 placeholder:text-black focus:!border-blue-gray-900 bg-gray-400"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Button size="md" className="mt-1 rounded-lg sm:mt-0">
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </figcaption>
      </figure>
      {/* <---------------------------------BANNER-------------------------------------------------> */}
      <div className="flex flex-col py-9 bg-blue-gray-100">
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
        <div className="row flex flex-row w-full justify-center p-10">
          <div className="left w-[30%] border-b-2 border-black ">
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
                    <Typography variant="h5" color="blue-gray" >
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
          <div className="right">
            <div className="fillform">
                    <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
