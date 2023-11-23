import axios from "axios";
const AdminRequest = axios.create({
  baseURL: import.meta.env.VITE_ADMINURL,
});

AdminRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentAdmin")) {
    req.headers.Authorization = localStorage.getItem("currentAdmin");
  }
  return req;
});

AdminRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Request error:", error);
    if (error.response && error.response.status === 400) {
      localStorage.removeItem("currentAdmin");
      window.location.href = "/admin/login"
    }
    return Promise.reject(error);
  }
);

export default AdminRequest;