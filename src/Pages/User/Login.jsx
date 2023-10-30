import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../Assets/Images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { UserLogin, changePassword, forgotPassword } from "../../Api/UserApi";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../Redux/UserSlice";
import { GenerateError, GenerateSuccess } from "../../Toast/GenerateError";
import { ToastContainer } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [guser, setGUser] = useState([]);
  const [reset, setReset] = useState(false);
  const [otpSent, setSentOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email, password } = data;
    if (email.trim() === "") {
      setError("Email is required");
    } else if (password.trim() === "") {
      setError("Password is required");
    } else if (!email.match(validRegex)) {
      setError("Invalid email");
    } else {
      const res = await UserLogin(data);
      console.log("res", res);
      if (res.data.access) {
        localStorage.setItem("currentUser", res.data.token);
        const detail = res.data.info;
        dispatch(
          setUserDetails({
            id: detail?._id,
            name: detail?.name,
            email: detail?.email,
            mobile: detail?.mobile,
            place: detail?.place,
            image: detail?.image,
            flc: detail?.flc
          })
        );
        navigate("/");
      } else {
        GenerateError("jdwwdwd");
        setError(res.data.message);
      }
    }
  };

  const Glogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (guser && guser.access_token) {
      // Check if guser and access_token are available
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
              console.log("aaaaaa", response);
              if (response.data.access) {
                const detail = response.data.info;
                dispatch(
                  setUserDetails({
                    id: detail?._id,
                    name: detail?.name,
                    email: detail?.email,
                    mobile: detail?.mobile,
                    place: detail?.place,
                    image: detail?.image,
                    flc: detail?.flc
                  })
                );
                localStorage.setItem("currentUser", response.data.token);
                navigate("/");
              } else {
                GenerateError(response.data.message);
                setError(response.data.message);
              }
            }
          );
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch, guser, navigate]);

  const handleOtp = async (e) => {
    e.preventDefault();
    const { email } = data;
    try {
      let response = await forgotPassword(email);
      if (response.status == 403) {
        console.log("rwsp", response);
      }
      if (response.status) {
        setSentOtp(true);
        GenerateSuccess(response.data.message);
      } else {
        GenerateError(response.data.message);
        setSentOtp(false);
      }
    } catch (error) {
      if (error.response.status == 403) {
        GenerateError(error.response.data.message);
      }
    }
  };

  const handleForgot = async (e) => {
    const { email, password } = data;
    e.preventDefault();
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    try {
      if (password.trim() == "" || !password.match(passRegex)) {
        GenerateError('Please enter a valid Password');
      }else{
      let response = await changePassword({ email, password, otp });
      setOtp("");
      setData("");
      if (response.data.status) {
        setReset(false);
        setSentOtp(false);
        setData("");
        GenerateSuccess(response.data.message);
      } else {
        setSentOtp(false);
      }
    }
    } catch (error) {
      if(error.response.status == 403){
        GenerateError(error.response.data.message);
      }
    }
    
  };

  return (
    <>
      <ToastContainer />
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
            <div className="mt-4">
              <a onClick={() => navigate("/")}>
                or go to{" "}
                <span className="text-blue-500 hover:underline cursor-pointer">
                  Home
                </span>
                ?
              </a>
            </div>
          </div>
          {/* <-----------------------------------LOGIN-----------------------------------------------------> */}
          <div className="LoginForm bg-gray-200 p-6 md:p-16 md:w-1/2 rounded-xl">
            {reset ? (
              <>
                <Card>
                  <CardBody className="sm:w-full imagewidth">
                    <Typography variant="h4" color="blue-gray">
                      Reset Password
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                      Enter your Email.
                    </Typography>
                    {otpSent ? (
                      <form
                        className="mt-8 mb-2 w-full"
                        onSubmit={handleForgot}
                      >
                        <div className="mb-4 flex flex-col gap-6">
                          <Input
                            size="lg"
                            type="number"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            label="OTP"
                          />
                          <Input
                            size="lg"
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            label="Pass"
                          />
                        </div>
                        <Button className="mt-6" fullWidth type="submit">
                          Verify
                        </Button>
                      </form>
                    ) : (
                      <form className="mt-8 mb-2 w-full " onSubmit={handleOtp}>
                        <div className="mb-4 flex flex-col gap-6">
                          <Input
                            size="lg"
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                            label="Email"
                          />
                        </div>
                        <Button className="mt-6" fullWidth type="submit">
                          Get OTP
                        </Button>
                      </form>
                    )}
                  </CardBody>
                </Card>
              </>
            ) : (
              <>
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}
                >
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
                    <a onClick={() => setReset(true)} className="text-blue-700">
                      Forgot password?
                    </a>
                    <a
                      className="ps-8 cursor-pointer"
                      onClick={() => navigate("/lawyer/login")}
                    >
                      Are you a Lawyer?
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
                  <a onClick={() => Glogin()} className="px-2 cursor-pointer">
                    login with Google
                  </a>
                </div>
              </>
            )}
          </div>
          {/* <-----------------------------------LOGIN-----------------------------------------------------> */}
        </div>
      </div>
    </>
  );
}

export default Login;
