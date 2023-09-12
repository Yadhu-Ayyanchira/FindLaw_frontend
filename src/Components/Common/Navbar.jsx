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
import {BiArrowFromTop} from 'react-icons/bi'
import { BiMessageAltDetail } from "react-icons/bi";
import logo from "../../Assets/Images/Logo.svg";


function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Menu>
          <MenuHandler>
            <a className="flex items-center">
              Lawyer directory{" "}
              <BiArrowFromTop className="ml-1 text-blue-gray-400" />
            </a>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <Menu placement="right-start" offset={15}>
              <MenuHandler>
                <MenuItem>Nested Item</MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>Nested Item 1</MenuItem>
                <MenuItem>Nested Item 2</MenuItem>
                <MenuItem>Nested Item 3</MenuItem>
              </MenuList>
            </Menu>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </Typography>
      <Link to="/login">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a href="#" className="flex items-center">
            About
          </a>
        </Typography>
      </Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="#" className="flex items-center">
          Contacts
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <img src={logo} alt="Logo" className="w-40 mx-auto" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center justify-between">
          <Badge content="1">
              <BiMessageAltDetail className="h-7 w-7" />
          </Badge>
          <div className="hidden md:flex md:items-center md:ml-6 mr-5 justify-normal">
            <button className="focus:outline-none">
              <div
                className="relative inline-block "
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
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          {navList}

          <button className="focus:outline-none">
            <div
              className="relative inline-block "
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
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;