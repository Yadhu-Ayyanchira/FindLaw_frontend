import { Routes, Route } from "react-router-dom";
import UserProtected from "../Protected/UserProtected";
import UserPublic from "../Protected/UserPublic";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import Home from "../Components/User/Home";
import Verify from "../Components/Common/User/Verify";
import Layout from "../Pages/User/Layout";
import UserProfile from "../Components/User/UserProfile";
import LawyerFilter from "../Components/User/LawyerFilter";
import SingleLawyer from "../Components/User/SingleLawyer";
import BookSlot from "../Components/User/BookSlot";
import Appointments from "../Components/User/Appointments";
import NotFound from "../Components/NotFound/NotFound";
import PaymentSuccess from "../Components/User/PaymentSuccess";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="userProfile" element={<UserProtected><UserProfile /></UserProtected>} />
        <Route path="filter" element={<LawyerFilter />} />
        <Route path="singlelawyer" element={<SingleLawyer />} />
        <Route path="bookslot" element={<UserProtected><BookSlot /></UserProtected>} />
        <Route path="appointments" element={<UserProtected><Appointments /></UserProtected>} />
        <Route path="bookingsuccess" element={<UserProtected><PaymentSuccess /></UserProtected>} />
      </Route>
      <Route path="login" element={<UserPublic><Login /></UserPublic>} />
      <Route path="register" element={<UserPublic><Register /></UserPublic>} />
      <Route path="verify" element={<Verify />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UserRoutes;

