import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtect(props) {
  if (localStorage.getItem("admintoken")) {
    return props.children;
  }
  return <Navigate to="/admin/login" />;
}

export default AdminProtect;
