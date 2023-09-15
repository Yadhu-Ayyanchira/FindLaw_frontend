import React from "react";
import Navbar from "../Common/User/Navbar";
import SideBar from "../Common/Lawyer/AdminSidebar";

function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <SideBar />
      </div>
    </>
  );
}

export default Dashboard;
