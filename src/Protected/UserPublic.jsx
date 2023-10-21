// import React from "react";
// import { Navigate,Outlet } from "react-router-dom";

// function UserPublic(props) {
//   if (localStorage.getItem("currentUser")) {
//     return <Navigate to="/" />;
//   }
//   <Navigate to="/login" />;
//   return <Outlet/>
// }

// export default UserPublic;


import React from "react";
import { Navigate } from "react-router-dom";

function UserPublic(props) {
  if (localStorage.getItem("currentUser")) {
    return <Navigate to="/" />;
  }
  <Navigate to="/login" />;
  return props.children;
}

export default UserPublic;