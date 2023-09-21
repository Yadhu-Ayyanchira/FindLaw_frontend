import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminProtected from '../Protected/AdminProtected';
import AdminPublic from '../Protected/AdminPublic';
import AdminLogin from '../Pages/Admin/AdminLogin'

function AdminRoutes() {
  return (
   <Routes>
    <Route path="/" element={<AdminProtected><AdminDashboard /></AdminProtected>} />

    {/* <Route element={<AdminPublic />}> */}
      <Route path='/login' element={<AdminLogin/>}/>
    {/* </Route> */}
   </Routes>
  )
}

export default AdminRoutes