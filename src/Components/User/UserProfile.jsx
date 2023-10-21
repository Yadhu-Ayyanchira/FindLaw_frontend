import React from 'react'
import {
  Badge,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  CheckBadgeIcon,
  PencilSquareIcon,
  BriefcaseIcon,
  BookmarkIcon
} from "@heroicons/react/24/solid";

function UserProfile() {
    
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="profile lg:w-2/3 h-64 m-5 lg:m-5 shadow-xl rounded-xl flex">
            <div className="image">
              <Badge
                //content={<EditImage />}
                overlap="circular"
                placement="bottom-end"
                className="h-8 w-8 mb-5 me-2 hover:bg-white hover:text-[#5d7582] bg-[#5d7582] cursor-pointer"
              >
                <img
                  size=""
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                  alt="tania andrew"
                  className="rounded-full mx-8 m-5 lg:w-52 lg:h-52 w-32 h-32"
                />
              </Badge>
            </div>
            <div className="details m-5 p-5 ms-10 mb-0 h-auto flex flex-col">
              <p className="text-3xl font-bold text-blue-gray-800 font-serif mb-1">
                Yadhu
              </p>
              <div className="flex items-center mb-1">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <p>Calicut</p>
              </div>
              <div className="flex items-center mb-1">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <p>10 Years</p>
              </div>
              <br />
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Email:</span>
                yadhu@gmail.com
              </p>
              <p className="text-base italic text-blue-gray-700">
                <span className="font-bold">Mobile:</span>
                9744011366
              </p>
            </div>
            {/* <div className="p-10">
              <EditProfile onEdit={handleEditProfile} />
              {is_approved ? <VerifiedTag /> : <NotVerifiedTag />}
            </div> */}
          </div>

          <Card className="flc lg:w-1/3 h-64 m-5 lg:ms-0 shadow-xl rounded-xl">
            <CardBody className="flex flex-col justify-center items-center h-full">
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Your FindLaw Credit
              </Typography>
              <Typography
                className="text-7xl font-semibold"
                color="light-green"
              >
                1000
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-center">
              <Button className='bg-green-700'>Add FLC</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="saved  lg:w-2/3 h-64 m-5 lg:m-5 shadow-xl rounded-xl flex-col overflow-y-scroll ">
            <h2 className="text-lg font-semibold font-serif mb-2 p-4 pb-0 flex-col">
              Saved Lawyers
            </h2>
            <div>
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Software Engineer @ Material Tailwind
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="alexander"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Alexander
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Backend Developer @ Material Tailwind
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Emma Willever
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      UI/UX Designer @ Material Tailwind
                    </Typography>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1694511037~exp=1694511637~hmac=7afb019f7b279def27b7c8cff245f9ab0ecc12fadc50d085af0db00d777ee63b"
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Emma Willever
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      UI/UX Designer @ Material Tailwind
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </div>
          </div>
          <div className="flc lg:w-2/3 h-64 m-5 lg:ms-0 shadow-xl rounded-xl"></div>
        </div>
      </div>
    </>
  );
}

export default UserProfile