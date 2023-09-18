import UserRequest from "../Utils/UserRequest";

export async function UserLogin(user) {
  try {
    console.log(user);
    const data = await UserRequest.get("/login", { user });
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