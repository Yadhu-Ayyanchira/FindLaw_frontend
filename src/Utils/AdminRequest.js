import axios from "axios";
const AdminRequest = axios.create({
  baseURL: "http://localhost:4000/admin",
});

AdminRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentAdmin")) {
    req.headers.Authorization = localStorage.getItem("currentAdmin");
  }
  return req;
});

AdminRequest.interceptors.response.use(
  (response) => {
    if (response?.data?.message === "User Blocked") {
      localStorage.removeItem("currentLawyer");
      window.location.href = "/admin/login";
    }
    return response;
  },
  (error) => {
    console.error("Request error:", error);
    if (error.response && error.response.status === 400) {
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default AdminRequest;