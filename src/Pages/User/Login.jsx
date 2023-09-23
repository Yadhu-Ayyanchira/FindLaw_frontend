import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../Assets/Images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { UserLogin } from "../../Api/UserApi";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import setuserdetails from '../../Redux/UserSlice'



function Login() {
  const [data,setData] = useState({
    email: "",
    password: ""
  })
  const [error,setError] = useState("")
  const [guser, setGUser] = useState([]);
  const dispatch = useDispatch();
  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault()
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const {email, password} = data
    if(email.trim()===""){
      setError("Email is required")
    }else if(password.trim() === ""){
      setError("Password is required")
    }else if (!email.match(validRegex)) {
      setError("Invalid email");
    } else {
      const res = await UserLogin(data);
      if(res.data.access){
        localStorage.setItem("currentUser", res.data.token)
        navigate("/");
      }else{
        setError(res.data.message)
      }
    }
  }

const Glogin = useGoogleLogin({
  onSuccess: (codeResponse) => setGUser(codeResponse),
  onError: (error) => console.log("Login Failed:", error),
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
        UserLogin({ email: res.data.email, password: res.data.id }).then(
          (response) => {
            if (response.data.access) {
              const userDetails = {
                name: response.data.info.name,
                email: response.data.info.email,
              }
              //dispatch(setuserdetails({ userInfo: userDetails }));
              console.log("responsess in det :",userDetails);
              localStorage.setItem("currentUser", response.data.token);
              navigate("/");
            } else {
              setError(response.data.message);
            }
          }
        );
      })
      .catch((err) => console.log(err));
  }
}, [guser]);

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
              <a href="" className="text-blue-700">
                Forgot password?
              </a>
            </form>
            <div className="flex items-center justify-center py-6">
              <div className="border-t border-gray-700 flex-grow h-0"></div>
              <div className="mx-2 text-gray-800">OR</div>
              <div className="border-t border-gray-700 flex-grow h-0"></div>
            </div>
            <div className="flex justify-center">
              <FcGoogle className="w-6 h-6" />
              <a onClick={() => Glogin()} className="px-2">
                login with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
