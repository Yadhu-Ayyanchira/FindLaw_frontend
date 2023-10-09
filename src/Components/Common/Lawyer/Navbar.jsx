import React from "react";
import {
  Navbar, // Update the component name to use an uppercase "N"
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars3Icon,
  UserIcon
} from "@heroicons/react/24/outline";
import Sidebar from "../Lawyer/LawyerSidebar";
import logo from "../../../Assets/Images/Logo.svg";
import { useNavigate } from "react-router-dom";
import { logoutLawyer } from "../../../Redux/LawyerSlice";
import { useDispatch, useSelector } from "react-redux";


function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const signOut = async () => {
    setIsMenuOpen(false);
    localStorage.removeItem("currentLawyer");
    dispatch(logoutLawyer());
    navigate("/lawyer/login");
  };
  const { name, image } = useSelector((state) => state.lawyer);


  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 me-8 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src= {image}
          />
          <Typography className="text-white hover:text-black">{name}</Typography>

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          key="Sign out"
          onClick={signOut}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          {React.createElement(PowerIcon, {
            className: "h-4 w-4 text-red-500",
            strokeWidth: 2,
          })}
          Sign out
        </MenuItem>
        <MenuItem
          key="Sign out"
          onClick={() => navigate("/lawyer/lawyerProfile")}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <UserIcon className="h-5 w-5 text-green-500" />
          Profile
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

// nav list menu

function NavbarDefault() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <navbar className="  lg:rounded-none   fixed top-0 left-0 right-0 bg-[#ffffff] z-50">
        <div className="relative mx-auto flex items-center text-blue-gray-900 py-3 bg-[#1d6143] ">
          <Drawer open={open} onClose={closeDrawer} className="bg-[#f1f0f0] ">
            <div className="mb-2 flex items-center justify-between p-4 ">
              <div>
                <img src={logo} alt="Logo" className="w-40 mx-auto" />
              </div>
              <IconButton variant="text" color="white" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Sidebar />
          </Drawer>
          <Bars3Icon
            onClick={openDrawer}
            className="h-8 w-8 ms-5 cursor-pointer text-white visible md:invisible"
          />

          <img src={logo} alt="" className="h-14 ps-7 py-1 md:-ms-10" />

          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            1
          </IconButton>
          <ProfileMenu />
        </div>
      </navbar>
    </div>
  );
}

export default NavbarDefault;
