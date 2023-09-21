import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { UserRegister, UserRegisterWithGoogle } from "../../Api/UserApi";
import { useDispatch } from "react-redux";
import { setuserdetails } from "../../Redux/UserSlice";
import { useGoogleLogin,googleLogout } from "@react-oauth/google";
import axios from "axios";


function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [guser, setGUser] = useState([]);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const Gsignup = useGoogleLogin({
    onSuccess: (codeResponse) => {setGUser(codeResponse)
    console.log("Successs", codeResponse);},
    onError: (error) => console.log("Signup Failed:", error),
  });
  useEffect(() => {
    if (guser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${guser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          UserRegisterWithGoogle(res.data).then((response) => {
            if (response.data.created) {
              console.log(response);
              const userDetails = {
                name: response.data.user.name,
                email: response.data.user.email,
              };
              localStorage.setItem("currentUser", response.data.token);
              dispatch(setuserdetails({ userInfo: userDetails }));
              navigate("/");
            } else {
              setError(response.data.message);
            }
          });
        })
        .catch((err) => console.log(err));
    }
  }, [guser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle submit');
    try {
      const { email, password, name, mobile, confirmPassword } = data;
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.trim()=="" && !email.match(validRegex)) {
        setError("Invalid Email");
      } else if (password.trim() == "") {
        setError("Password is required");
      } else if (name.trim() == "") {
        setError("Name is required");
      } else if (mobile.trim() == "") {
        setError("Number is required");
      }else if(confirmPassword !== password){
        setError("Pasword not match!")
      } else {
        const response = await UserRegister(data);
        if(response.data.created){
          const userDetails = {
            name: response.data.user.name,
            email: response.data.user.email,
          };
          localStorage.setItem("currentUser", response.data.token);
          dispatch(setuserdetails({ userInfo: userDetails }));
          navigate('/verify')
        }else{
          setError("User already Exists");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover min-h-screen flex flex-col items-center justify-center">
        <div className="LoginContainer bg-[#1c1c1d] shadow-lg opacity-70 md:flex md:h-3/4 rounded-xl">
          <div className="LoginLeft bg-[#111827] text-white py-8 px-4 text-center md:w-1/2 rounded-tl-xl md:rounded-bl-xl">
            <img src={logo} alt="Logo" className="w-44 h-44 mx-auto" />
            <p className="text-2xl md:text-5xl">Already have an account?</p>
            <br />
            <button
              onClick={() => navigate("/login")}
              className="w-32 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-3xl focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="LoginForm bg-gray-200 p-6 md:p-16 md:w-1/2 rounded-xl">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your name"
              />
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your email"
              />
              <input
                type="text"
                id="mobile"
                name="mobile"
                onChange={handleChange}
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your number"
              />
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Enter your password"
              />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                className="bg-gray-500 py-2 px-3 rounded-md"
                placeholder="Confirm your password"
              />
              
              {error && <p className="text-center text-red-600">{error}</p>}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Sign up
              </button>
              <a onClick={()=>navigate('/lawyer/register')}>Are you a lawyer?</a>
            </form>
            <div className="flex items-center justify-center py-6">
              <div className="border-t border-gray-700 flex-grow h-0"></div>
              <div className="mx-2 text-gray-800">OR</div>
              <div className="border-t border-gray-700 flex-grow h-0"></div>
            </div>
            <div className="flex justify-center">
              <FcGoogle className="w-6 h-6" />
              <a  onClick={() => Gsignup()} className="px-2">
                Signin with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
