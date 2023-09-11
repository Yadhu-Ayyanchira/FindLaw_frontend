import React from "react";
import logo from "../../Assets/Images/Logo.svg";

function Login() {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover h-screen flex items-center justify-center">
        <div className="LoginContainer sm:w-2/3 md:w-1/2 lg:w-2/4 h-2/3 bg-[#3f3f46] rounded-lg shadow-md opacity-80 flex">
          <div className="Login w-1/3 h-full bg-[#111827] rounded-tl rounded-br text-white">
            <img src={logo} alt="Logo" className="w-44 h-44 mx-auto" />
            <p className="text-5xl text-center">
              Are you new
              <br />
              here?
            </p>
          </div>
          <div className="LoginForm w-2/3 h-full p-8 flex-col justify-center">
            <form className="flex flex-col space-y-4 items-center">
              <label htmlFor="email" className="text-white text-lg">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-200 py-2 px-3 rounded-md w-full sm:w-3/4"
                placeholder="Enter your email"
              />
              <label htmlFor="password" className="text-white text-lg">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-200 py-2 px-3 rounded-md w-full sm:w-3/4"
                placeholder="Enter your password"
              />
              <button
                type="submit"
                className="w-full sm:w-1/3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
