import Navbar from "../../Components/Common/Lawyer/Navbar";
import LawyerSidebar from "../../Components/Common/Lawyer/LawyerSidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="h-screen grid grid-rows-[5rem] ">
        <div>
          <Navbar />
        </div>
        <div className="md:grid md:grid-cols-[18.7rem,1fr]">
          <div className="invisible md:visible">
            <LawyerSidebar />
          </div>
          <div>
            <div className="h-full ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
