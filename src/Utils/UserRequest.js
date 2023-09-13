import axios from "axios";
const UserRequest = axios.create({
  baseURL: 'http://localhost:4000'
});

UserRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentUser")) {
    req.headers.Authorization = localStorage.getItem("currentUser");
  }
  return req;
});

export default UserRequest;
