import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Dashboard from '../Components/Lawyer/Dashboard';
import Login from '../Pages/Lawyer/Login';
import Register from '../Pages/Lawyer/Register'
import LawyerProtected from '../Protected/LawyerProtected';

function LawyerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LawyerProtected><Dashboard/></LawyerProtected>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default LawyerRoutes