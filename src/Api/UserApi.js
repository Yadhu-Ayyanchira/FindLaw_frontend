import UserRequest from "../Utils/UserRequest";

export async function UserLogin(user) {
  try {
    const data = await UserRequest.post("/login", user);
    return data;
  } catch (error) {
    return error;
  }
}
export async function forgotPassword(email) {
  const data = await UserRequest.get("/forgotpassword", { params: { email } });
  return data;
}
export async function changePassword(datas) {
  const data = await UserRequest.post("/changepassword", datas);
  return data;
}


export async function UserRegister(user) {
  try {
    const data = await UserRequest.post("/signup", user);
    return data;
  } catch (error) {
    return error;
  }
}

export async function UserRegisterWithGoogle(data){
try {
  const datas= await UserRequest.post("/googleSignup",data)

  return datas
} catch (error) {
  return error
}
}

export async function UserProfileEdit(data, id) {
  try {
    const response = await UserRequest.post(`/profileEdit/${id}`, data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function UpdateImage(id, img) {
  try {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("userId", id);
    const config = {
      header: {
        "content-type": "multipart/form-data",
        userId: id,
      },
      WithCreadentials: true,
    };
    const res = await UserRequest.post("/imgupdate", formData, config);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const allLawyers = async ({ page, filter, search }) => {
  return UserRequest.get("/lawyerData", {
    params: {
      page,
      filter,
      search,
    },
  });
};

export const lawyerView = async ({ id}) => {
  return UserRequest.get("/lawyerView", {
    params: {
      id
    },
  });
};


export const addAppointment = async (data) => {
  return UserRequest.post("/addappointment",{data});
};

export const cancelAppointment = async ({id,slotId,slotTime})=>{
  return UserRequest.put("/cancelappointment", { id, slotId, slotTime });
}