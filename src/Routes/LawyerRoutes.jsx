import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../Components/Lawyer/Dashboard'
import Login from '../Components/Lawyer/Login'
import Register from '../Components/Lawyer/Register'

function LawyerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default LawyerRoutes