import React from "react";
import { Navigate } from "react-router-dom";

function LawyerProtected(props) {
  if (localStorage.getItem("currentLawyer")) {
    return props.children;
  }
  return <Navigate to="/lawyer/login" />;
}

export default LawyerProtected;
