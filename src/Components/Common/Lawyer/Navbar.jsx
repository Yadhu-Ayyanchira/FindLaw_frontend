import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Badge, Avatar } from "@material-tailwind/react";
import { BiArrowFromTop } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import logo from "../../../Assets/Images/Logo.svg";
import SideBar from "./LawyerSidebar";

function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} alt="Logo" className="lg:w-40 w-24 mx-auto" />
        </div>

        <div className="flex items-center justify-end ">
          <div className="relative inline-block -me-16 md:me-3">
            <Badge content="1">
              <BiMessageAltDetail className="h-7 w-7" />
            </Badge>
          </div>
          <div className="md:flex md:items-center md:ml-6 mr-5 justify-normal">
            <button className="focus:outline-none">
              <div
                className="relative inline-block -me-56 md:me-1"
                style={{ boxShadow: "0 0 0 2px white", borderRadius: "50%" }}
              >
                <img
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src={
                    "https://res.cloudinary.com/dvprhxg7x/image/upload/v1692803989/asset/noavatar_vhrf74.jpg"
                  }
                  alt="User Photo"
                />
              </div>
            </button>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <SideBar />
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;
