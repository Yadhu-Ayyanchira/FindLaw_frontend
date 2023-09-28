import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LawyerProtected from '../Protected/LawyerProtected';
import LawyerPublic from '../Protected/LawyerPublic';
import Dashboard from '../Components/Lawyer/Dashboard';
import Login from '../Pages/Lawyer/Login';
import Layout from '../Pages/Lawyer/Layout';
import Register from '../Pages/Lawyer/Register'

function LawyerRoutes() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<LawyerProtected><Dashboard/></LawyerProtected>}/>
  //     <Route path="/login" element={<Login/>}/>
  //     <Route path="/register" element={<Register/>}/>
  //   </Routes>
  // )
  return (
    <Routes>
      <Route element={<LawyerPublic />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<LawyerProtected />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default LawyerRoutes