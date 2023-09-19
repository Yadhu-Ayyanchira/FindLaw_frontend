import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtected(props) {
  if (localStorage.getItem("admintoken")) {
    return props.children;
  }
  return <Navigate to="/admin/login" />;
}

export default AdminProtected;
