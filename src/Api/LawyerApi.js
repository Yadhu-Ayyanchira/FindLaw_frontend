import LawyerRequest from "../Utils/LawyerRequests"

export async function LawyerRegister(user) {
  try {
    console.log("lawyer api data disp", user);
    const data = await LawyerRequest.post("/register", user);
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
export async function LawyerLogin(data) {
  try {
    console.log("object");
    const response = await LawyerRequest.post("/login",data);
    console.log("law resp",response);
    return response 
  } catch (error) {
    return error;
  }
}
export async function LawyerProfileEdit(data,id){
  try {
    const response = await LawyerRequest.post(`/profileEdit/${id}`,data);
    console.log("resp is",response);
    return response;
  } catch (error) {
    return(error)
  }
}

export async function LawyerAboutEdit(data, id) {
  try {
    console.log("LawyerAboutEdit", id, data);
    const response = await LawyerRequest.put(`/aboutEdit/${id}`, data);
    console.log("resp is", response);
    return response;
  } catch (error) {
    return error;
  }
}
export async function UpdateImage(id,img){
  try {
    console.log("imgg",id,img);
    const formData = new FormData()
    formData.append('image', img)
    formData.append('userId',id)
    const config = {
      header: {
        "content-type": "multipart/form-data",
        userId: id,
      },
      WithCreadentials: true,
    }
    const res = await LawyerRequest.post("/imgupdate",formData,config)
    return res
  } catch (error) {
    console.log(error);
  }
}



