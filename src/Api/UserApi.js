import UserRequest from "../Utils/UserRequest";

export async function UserLogin(user) {
  try {
    console.log("api data disp", user);
    const data = await UserRequest.post("/login", user);
    return data;
  } catch (error) {
    return error;
  }
}


export async function UserRegister(user) {
  try {
    console.log("sign api");
    const data = await UserRequest.post("/signup", user);
    return data;
  } catch (error) {
    return error;
  }
}

export async function UserRegisterWithGoogle(data){
try {
  // console.log(object);
  const datas= await UserRequest.post("/googleSignup",data)
  // ,{
  //   withCredentials:true
  // })
  return datas
} catch (error) {
  return error
}
}

export async function UserProfileEdit(data, id) {
  try {
    const response = await UserRequest.post(`/profileEdit/${id}`, data);
    console.log("resp is", response);
    return response;
  } catch (error) {
    return error;
  }
}