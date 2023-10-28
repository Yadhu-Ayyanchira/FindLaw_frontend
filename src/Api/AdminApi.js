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
export async function approveLawyer(id) {
  return AdminRequest.put(`/approvelawyer/${id}`);
}

export async function manageUser(id){
  return AdminRequest.put(`/manageuser/${id}`);
}

export async function logout(){
  console.log('admin logout');
  return  AdminRequest.get('/logout');
}

export const getUsers = async ({ page, filter, search }) => {
  return AdminRequest.get("/users", {
    params: {
      page,
      filter,
      search,
    },
  });
};

export const getLawyers = async ({ page, filter, search }) => {
  return AdminRequest.get("/lawyers", {
    params: {
      page,
      filter,
      search,
    },
  });
};

export const getLawyerRequests = async ({ page, filter, search }) => {
  return AdminRequest.get("/lawyerRequests", {
    params: {
      page,
      filter,
      search,
    },
  });
};