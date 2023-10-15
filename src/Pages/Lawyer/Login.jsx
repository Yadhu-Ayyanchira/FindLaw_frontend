import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { LawyerLogin } from "../../Api/LawyerApi";
import { useDispatch } from "react-redux";
import { setlawyerDetails } from "../../Redux/LawyerSlice";


function Register() {
  const [data,setData] = useState({
    email: "",
    password: ""
  })
  const [error,setError] = useState("")

  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {email, password} = data
    if(email.trim()===""){
      setError("Email is required")
    }else if(password.trim() === ""){
      setError("Password is required")
    }else if (!email.match(validRegex)) {
      setError("Invalid email");
    } else {
      const res = await LawyerLogin(data);
      console.log('thid ',res);
      if (res.data.access) {
        localStorage.setItem("currentLawyer",res.data.token);
        const detail = res.data.info;
        dispatch(
          setlawyerDetails({
            id: detail?._id,
            name: detail?.name,
            email: detail?.email,
            mobile: detail?.mobile,
            place: detail?.place,
            verified: detail?.verified,
            experience: detail?.experience,
            about: detail?.about,
            image: detail?.image,
          })
        );
        navigate("/lawyer");
      } else {
        setError(res.data.message);
      }
    }
  }
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover min-h-screen flex flex-col items-center justify-center">
        <div className="LoginContainer bg-[#1c1c1d] shadow-lg opacity-70 md:flex md:h-3/4 rounded-xl">
          <div className="LoginForm bg-gray-200 p-6 md:p-16 md:w-1/2 rounded-tl-xl rounded-bl-xl">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
              <div>
                <a href="" className="text-blue-700">
                  Forgot password?
                </a>
                <a className="ps-10" onClick={() => navigate("/login")}>
                  Are you a Client?
                </a>
              </div>
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
          <div className="LoginLeft bg-[#cf983b] text-white py-8 px-4 text-center md:w-1/2 rounded-tr-xl md:rounded-br-xl">
            <img src={logo} alt="Logo" className="w-44 h-44 mx-auto" />
            <p className="text-2xl md:text-5xl">Are you new here?</p>
            <br />
            <button
              onClick={() => navigate("/lawyer/register")}
              className="w-32 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-3xl focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
