import React from "react";
import { Navigate,Outlet } from "react-router-dom"

function UserProtected() {
  if (localStorage.getItem("currentUser")) {
    return <Outlet/>
  }
  return <Navigate to="/" />;
}

export default UserProtected
