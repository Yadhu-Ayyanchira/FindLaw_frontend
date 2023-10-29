import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse ,
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
import logo from "../../../Assets/Images/Logo.svg";
import {
  PowerIcon,
  ChevronDownIcon,
  UserIcon
} from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Redux/UserSlice";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const signOut = async () => {
    setIsMenuOpen(false);
    localStorage.removeItem("currentUser");
    dispatch(logoutUser())
    navigate("/login");
  }
  
    const { name, image } = useSelector((state) => state.user);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <div className="flex items-center gap-1 rounded-full py-0.5 pr-2 me-8 pl-0.5 lg:ml-auto">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src= {image}
          />
          <Typography color="black">{name}</Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          key="Sign out"
          onClick={signOut}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
        
          <PowerIcon className= "h-5 w-5 text-red-500"/>
          Sign out
        </MenuItem>
        <MenuItem
          key="Sign out profile"
          onClick={()=>navigate('/userProfile')}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <UserIcon className="h-5 w-5 text-green-500"/>
          Profile
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
function LoginBtn (){
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate("/login")} variant="outlined">
      Login
    </Button>
  );
}



function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  let token = localStorage.getItem("currentUser")


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
            <p className="flex items-center">
              Lawyer directory
              <BiArrowFromTop className="ml-1 text-blue-gray-400 pointer-events-auto" />
            </p>
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
            About
        </Typography>
      </Link>
      <Link to="/filter">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
            Filter
        </Typography>
      </Link>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <Link to="/login" className="flex items-center">
          Docs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
          Contact
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
          {/* <div className="hidden md:flex md:items-center md:ml-6 mr-5 justify-normal">
            <Badge
              content={1}
              color="red"
              placement={() => ({ top: 0, right: 0 })}
            >
              <BiMessageAltDetail className="h-7 w-7" />
            </Badge>
          </div> */}
          <div className="hidden md:flex md:items-center md:ml-6 mr-5 justify-normal">
            <button className="focus:outline-none">
              <div
                className="relative inline-block "
                style={{ boxShadow: "0 0 0 2px white", borderRadius: "50%" }}
              >
               
                {token ? <ProfileMenu /> : <LoginBtn/>}
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
      <Collapse open={openNav}>
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
          <Badge
            content={1}
            color="red"
            placement={() => ({ top: 0, right: 0 })}
          >
            <BiMessageAltDetail className="h-7 w-7" />
          </Badge>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarDefault;