import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProtected from "../Protected/UserProtected";
import UserPublic from "../Protected/UserPublic";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import Home from "../Components/User/Home";
import Verify from "../Components/Common/User/Verify";
//import Layout from "../Pages/User/Layout";
//import Banner from "../Components/User/Banner"

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserPublic><Login /></UserPublic>} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
    // <Routes>
    //   <Route element={<UserPublic />}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/verify" element={<Verify />} />
    //     <Route path="/" element={<Layout></Layout>}>
    //       <Route index element={<Banner />} />
    //     </Route>
    //   </Route>
    //   <Route element={<UserProtected />}>
    //     <Route path="/" element={<Layout></Layout>}>
    //       <Route index element={<Banner/>} />
    //       <Route path="/lawyerprofile" element={<LawyerProfile />} />
    //     </Route>
    //   </Route>
    // </Routes>
  );
}

export default UserRoutes;
