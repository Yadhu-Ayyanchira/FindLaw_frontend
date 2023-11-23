import axios from "axios";
const UserRequest = axios.create({
  baseURL: 'https://zainzara.online'
});

UserRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentUser")) {
    req.headers.Authorization = localStorage.getItem("currentUser");
  }
  return req;
});

UserRequest.interceptors.response.use(
  (response) => {
    if (response?.data?.message === "User Blocked") {
      localStorage.removeItem("currentUser");
      window.location.href = "/login";
    }
    return response;
  },
  (error) => {
    console.error("Request error:", error);
    if (error.response && error.response.status === 400) {
            console.log("error 400");
            localStorage.removeItem("currentUser")
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);


export default UserRequest;
