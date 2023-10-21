import Navbar from '../../Components/Common/User/Navbar'
import Footer from '../../Components/Common/User/UserFooter'
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <div className="grid grid-rows-[5rem]">
        <div>
          <Navbar />
        </div>
        <div className="h-auto min-h-screen">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout