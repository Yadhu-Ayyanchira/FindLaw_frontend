import { Navigate, Outlet } from "react-router-dom";

function LawyerProtected() {
  if (localStorage.getItem("currentLawyer")) {
    return <Outlet />;
  }
  return <Navigate to="/lawyer/login" />;
}

export default LawyerProtected;
