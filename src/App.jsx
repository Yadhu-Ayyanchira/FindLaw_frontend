import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import UserRoutes from './Routes/UserRoutes'
import LawyerRoutes from './Routes/LawyerRoutes'
import AdminRoutes from './Routes/AdminRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/lawyer/*" element={<LawyerRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
