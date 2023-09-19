import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminProtected from '../Protected/AdminProtected';
import AdminPublic from '../Protected/AdminPublic';

function AdminRoutes() {
  return (
   <Routes>
    <Route path="/" element={<AdminProtected><AdminDashboard /></AdminProtected>} />
   </Routes>
  )
}

export default AdminRoutes