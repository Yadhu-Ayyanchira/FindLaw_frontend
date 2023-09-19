import AdminRequest from "../Utils/AdminRequest";


export async function AdminLogin(admin) {
  try {
    console.log("api data disp", admin);
    const data = await UserRequest.post("/login", admin);
    return data;
  } catch (error) {
    return error;
  }
}