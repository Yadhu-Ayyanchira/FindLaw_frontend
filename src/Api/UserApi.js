import UserRequest from "../Utils/UserRequest";

export const login=(e) =>{
console.log(e);
UserRequest.get('/auth/login')
}

