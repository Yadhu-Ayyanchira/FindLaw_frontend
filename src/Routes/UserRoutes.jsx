import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/User/Login'

function UserRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default UserRoutes