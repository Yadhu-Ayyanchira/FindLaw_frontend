import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Components/User/Login'
import Register from '../Components/User/Register'
import Home from '../Components/User/Home'
import Navbar from '../Components/Common/Navbar'

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/test" element={<Navbar/>}/>
    </Routes>
  )
}

export default UserRoutes