import React from "react";
import Navbar from "../Common/User/Navbar";
import banner from "../../Assets/Images/fal_hero_steve_lg.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bannerdiv ">
        <img src={banner} alt="Banner" />
        {/* <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div> */}
        
      </div>
      <div>
        <h1 className="text-center text-black text-3xl font-semibold py-5">Top Rated Lawyers</h1>
      </div>
    </div>
  );
}

export default Home;
