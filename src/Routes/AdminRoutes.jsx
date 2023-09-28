import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminProtected from '../Protected/AdminProtected';
import AdminPublic from '../Protected/AdminPublic';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminLogin from '../Pages/Admin/AdminLogin'
import Layout from '../Pages/Admin/Layout';
import Users from '../Components/Admin/Users';
import Lawyers from '../Components/Admin/Lawyers';

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminPublic />}>
        <Route path="/login" element={<AdminLogin />} />
      </Route>
      <Route element={<AdminProtected />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route index  element={<AdminDashboard/>} />
          <Route path='/users'  element={<Users/>} />
          <Route path='/lawyers'  element={<Lawyers/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes