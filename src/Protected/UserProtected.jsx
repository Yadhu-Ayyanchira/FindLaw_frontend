// import React from "react";
// import { Navigate,Outlet } from "react-router-dom"

// function UserProtected() {
//   if (localStorage.getItem("currentUser")) {
//     return <Outlet/>
//   }
//   return <Navigate to="/" />;
// }

// export default UserProtected

import React from "react";
import { Navigate } from "react-router-dom";

function UserProtected(props) {
  if (localStorage.getItem("currentUser")) {
    return props.children;
  }
  return <Navigate to="/login" />;
}

export default UserProtected;
