import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminProtected() {
  if (localStorage.getItem("currentAdmin")) {
    return <Outlet/>
  }
  return <Navigate to="/admin/login" />;
}

export default AdminProtected;
