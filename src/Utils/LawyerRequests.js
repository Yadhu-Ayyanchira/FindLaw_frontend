import axios from "axios";
const LawyerRequest = axios.create({
  baseURL: "http://localhost:4000/lawyer",
});


LawyerRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentLawyer")) {
    console.log("setting head");
    req.headers.Authorization =
      "Bearer " + localStorage.getItem("currentLawyer");
  }
  return req;
});

LawyerRequest.interceptors.response.use((response) => {
  if (response.data.message == "User Blocked") {
    localStorage.removeItem("currentLawyer");
    window.location.href = "/lawyer/login";
  }
   return response;
});

export default LawyerRequest;
