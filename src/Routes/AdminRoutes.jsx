import { Route, Routes } from "react-router-dom";
import AdminProtected from '../Protected/AdminProtected';
import AdminPublic from '../Protected/AdminPublic';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminLogin from '../Pages/Admin/AdminLogin'
import Layout from '../Pages/Admin/Layout';
import Users from '../Components/Admin/Users';
import Lawyers from '../Components/Admin/Lawyers';
import LawyerRequests from '../Components/Admin/LawyerRequests';
import NotFound from "../Components/NotFound/NotFound";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminPublic />}>
        <Route path="/login" element={<AdminLogin />} />
      </Route>
      <Route element={<AdminProtected />}>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/lawyerRequests" element={<LawyerRequests />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes