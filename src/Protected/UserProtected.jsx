import React from "react";
import { Navigate } from "react-router-dom";

function UserProtected(props) {
  if (localStorage.getItem("currentUser")) {
    return props.children;
  }
  return <Navigate to="/" />;
}

export default UserProtected;
