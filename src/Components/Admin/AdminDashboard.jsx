import React from "react";
import NavBar from "../Common/Admin/NavBar";
import Sidebar from "../Common/Admin/Sidebar";

function AdminDashboard() {
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
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
