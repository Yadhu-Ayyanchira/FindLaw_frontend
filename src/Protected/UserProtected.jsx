import React from "react";
import { Navigate } from "react-router-dom";

function UserProtected(props) {
  if (localStorage.getItem("token")) {
    return props.children;
  }
  return <Navigate to="/" />;
}

export default UserProtected;
