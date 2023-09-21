import React from "react";
import NavBar from "../../Components/Common/Admin/NavBar";
import Sidebar from "../../Components/Common/Admin/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="h-screen grid grid-rows-[5rem] ">
        <div>
          <NavBar />
        </div>
        <div className="md:grid md:grid-cols-[18.7rem,1fr]">
          <div className="invisible md:visible">
            <Sidebar />
          </div>
          <div>
            <div className="h-full ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
