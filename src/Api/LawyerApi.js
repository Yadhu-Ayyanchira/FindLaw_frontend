import LawyerRequest from "../Utils/LawyerRequests"

export async function LawyerRegister(user) {
  try {
    console.log("lawyer api data disp", user);
    const data = await LawyerRequest.post("/register", user);
    return data;
  } catch (error) {
    return error;
  }
}
export async function LawyerRegisterWithGoogle(data) {
  try {
        console.log("lawyer api data disp", data);
    const datas = await LawyerRequest.post("/googleSignup", data);
    return datas;
  } catch (error) {
    return error;
  }
}
export async function lawlog() {
  try {
    console.log("lawlog disp");
    const response = await LawyerRequest.get("/lawlog");
    return response.data; // Return the response data if needed
  } catch (error) {
    return error;
  }
}



