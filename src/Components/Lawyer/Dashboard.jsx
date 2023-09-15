import React from "react";
import Navbar from "../Common/Lawyer/Navbar";
import SideBar from "../Common/Lawyer/LawyerSidebar";

function Dashboard() {
  return (
    <>
      <div className="h-screen grid grid-rows-[5rem] w-full">
        {/* <div> */}
          <Navbar />
        {/* </div> */}
        <div className="md:grid md:grid-cols-[18.7rem,1fr]">
          <div className="invisible md:visible">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
