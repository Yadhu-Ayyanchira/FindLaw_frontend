import axios from "axios";
const LawyerRequest = axios.create({
  baseURL: "http://localhost:4000/lawyer",
});

LawyerRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentLawyer")) {
    req.headers.Authorization =
      "Bearer " + localStorage.getItem("currentLawyer");
  }
  return req;
});

export default LawyerRequest;
