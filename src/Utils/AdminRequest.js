import axios from "axios";
const AdminRequest = axios.create({
  baseURL: "http://localhost:4000/admin",
});

AdminRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentAdmin")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("currentAdmin");
  }
  return req;
});

export default AdminRequest;