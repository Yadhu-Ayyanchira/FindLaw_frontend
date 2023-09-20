import LawyerRequest from "../Utils/LawyerRequests";

export async function LawyerRegister(user) {
  try {
    console.log("lawyer api data disp", user);
    const data = await LawyerRequest.post("/login", user);
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
