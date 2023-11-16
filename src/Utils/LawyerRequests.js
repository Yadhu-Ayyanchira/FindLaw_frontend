import axios from "axios";
const LawyerRequest = axios.create({
  baseURL: "https://zainzara.online/lawyer",
});


LawyerRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("currentLawyer")) {
    req.headers.Authorization = localStorage.getItem("currentLawyer");
  }
  return req;
});

LawyerRequest.interceptors.response.use(
  (response) => {
    if (response?.data?.message === "User Blocked") {
      localStorage.removeItem("currentLawyer");
      window.location.href = "/lawyer/login";
    }
    return response;
  },
  (error) => {
    console.error("Request error:", error);
    if (error.response && error.response.status === 400) {
      console.log("error 400");
      window.location.href = "/lawyer/login";
    }
    return Promise.reject(error);
  }
);

export default LawyerRequest;
