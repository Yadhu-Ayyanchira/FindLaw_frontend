import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function LawyerPublic(props) {
  if (localStorage.getItem("currentLawyer")) {
    console.log("the public route console")
    return <Navigate to="/lawyer" />;
  }

  return <Outlet />;
}

export default LawyerPublic;
