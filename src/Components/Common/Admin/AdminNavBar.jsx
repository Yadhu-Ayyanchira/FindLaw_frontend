import React from "react";
import {
  navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import logo from "../../../Assets/Images/Logo.svg";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate()
  const signOut = async () => {
    setIsMenuOpen(false);
    localStorage.removeItem("currentAdmin");
    navigate("/admin/login");
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 me-8 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
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
      </MenuList>
    </Menu>
  );
}

// nav list menu

export function AdminNavBar() {
  // eslint-disable-next-line no-unused-vars
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
      <navbar className="  lg:rounded-none   fixed top-0 left-0 right-0 bg-[#0a2125] z-50">
        <div className="relative mx-auto flex items-center text-blue-gray-900 py-3 bg-[#0a2125] ">
          <Drawer open={open} onClose={closeDrawer} className="bg-[#0a2125] ">
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

