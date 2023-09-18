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

export async function UserSignupWithGoogle(data){

}