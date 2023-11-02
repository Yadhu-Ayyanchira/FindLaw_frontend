import { Route,Routes } from 'react-router-dom';
import LawyerProtected from '../Protected/LawyerProtected';
import LawyerPublic from '../Protected/LawyerPublic';
import Dashboard from '../Components/Lawyer/Dashboard';
import Login from '../Pages/Lawyer/Login';
import Layout from '../Pages/Lawyer/Layout';
import Register from '../Pages/Lawyer/Register'
import LawyerProfile from '../Components/Lawyer/LawyerProfile';
import Timeslot from '../Components/Lawyer/Timeslot';
import AppointmentsRequests from '../Components/Lawyer/AppointmentsRequests';
import NotFound from "../Components/NotFound/NotFound";

function LawyerRoutes() {
  
  return (
    <Routes>
      <Route element={<LawyerPublic />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<LawyerProtected />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Dashboard />} />
          <Route path="/lawyerprofile" element={<LawyerProfile />} />
          <Route path="/timeslot" element={<Timeslot />} />
          <Route path="/appointmentrequest" element={<AppointmentsRequests />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LawyerRoutes