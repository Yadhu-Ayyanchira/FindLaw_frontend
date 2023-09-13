import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { login } from "../../Api/UserApi";


function Register() {
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault()
    const res = login('hey')
  }
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover min-h-screen flex flex-col items-center justify-center">
        <div className="LoginContainer bg-[#1c1c1d] shadow-lg opacity-70 md:flex md:h-3/4 rounded-xl">
          <div className="LoginLeft bg-[#111827] text-white py-8 px-4 text-center md:w-1/2 rounded-tl-xl md:rounded-bl-xl">
            <img src={logo} alt="Logo" className="w-44 h-44 mx-auto" />
            <p className="text-2xl md:text-5xl">Are you new here?</p>
            <br />
            <button
              onClick={() => navigate("/register")}
              className="w-32 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-3xl focus:outline-none"
            >
              Sign up
            </button>
          </div>
          <div className="LoginForm bg-gray-200 p-6 md:p-16 md:w-1/2 rounded-xl">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your email"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your password"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Login
              </button>
              <a href="">Are you a lawyer?</a>
            </form>
            <div className="flex items-center justify-center py-6">
              <div className="border-t border-gray-700 flex-grow h-0"></div>
              <div className="mx-2 text-gray-800">OR</div>
              <div className="border-t border-gray-700 flex-grow h-0"></div>
            </div>
            <div className="flex justify-center">
              <FcGoogle className="w-6 h-6" />
              <a>Or login with Google</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
