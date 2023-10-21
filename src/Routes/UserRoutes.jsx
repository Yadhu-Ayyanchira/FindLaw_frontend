import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProtected from "../Protected/UserProtected";
import UserPublic from "../Protected/UserPublic";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import Home from "../Components/User/Home";
import Verify from "../Components/Common/User/Verify";
import Layout from "../Pages/User/Layout";
import Banner from "../Components/User/Banner";
import Pro from "../Components/User/Pro";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="userProfile" element={<UserProtected><Pro /></UserProtected>} />
      </Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="verify" element={<Verify/>} />
    </Routes>
  );
}

export default UserRoutes;
