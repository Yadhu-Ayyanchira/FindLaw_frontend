import AdminRequest from "../Utils/AdminRequest";


export async function adminLogin(admin) {
  try {
    console.log("adminapi data disp", admin);
    const data = await AdminRequest.post("/login", admin);
    return data;
  } catch (error) {
    return error;
  }
}