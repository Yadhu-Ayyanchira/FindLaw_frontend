import React, { useState } from "react";
import logo from "../../Assets/Images/Logo.svg";
function AdminLogin() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const backgroundStyle = { backgroundImage: `url(${backgroundImageUrl})`,};
  const [error,setError] = useState("")
 const handleChange = ({ currentTarget: input }) => {
   setData({ ...data, [input.name]: input.value });
 };
 const handleSubmit =(e)=>{
    console.log("submitted");
 }
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={backgroundStyle}
    >
      {/* <div className="bg-opacity-70 backdrop-blur-xl w-96 h-1/3 p-8 rounded-lg text-white"></div> */}
      <div className="inner bg-black w-96 h-1/3 bg-opacity-70 backdrop-blur-xl rounded-lg flex flex-col items-center justify-center">
        <img src={logo} alt="Logo" className="w-44 h-44 mx-auto" />
        <form className="flex flex-col space-y-4 pb-16" onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            className="bg-gray-500 py-2 px-3 rounded-md"
            placeholder="Enter your email"
          />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="bg-gray-500 py-2 px-3 rounded-md"
            placeholder="Enter your password"
          />
          <p className="text-center text-red-600">{error}</p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
