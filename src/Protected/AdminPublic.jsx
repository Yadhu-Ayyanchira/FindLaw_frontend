import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminPublic(props) {
  if (localStorage.getItem("currentAdmin")) {
    console.log("the public route console");
    return <Navigate to="/admin" />;
  }
  
  return <Outlet/>
}

export default AdminPublic;
