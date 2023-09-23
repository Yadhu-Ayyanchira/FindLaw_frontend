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

export async function manageLawyer(id){
  return AdminRequest.put(`/managelawyer/${id}`);
}

export async function manageUser(id){
  return AdminRequest.put(`/manageuser/${id}`);
}

export async function logout(){
  return  AdminRequest.get('/logout');
}