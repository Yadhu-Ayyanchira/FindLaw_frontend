import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  mobile: "",
  place: "",
  verified: false,
  experience: 0,
  about:"About your self",
  image: "",
};

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState,
  reducers: {
    setlawyerDetails: (state, action) => {
      const { id, name, email, mobile, image, place,verified,experience,about } = action.payload;
      return {
        ...state,
        id: id || state.id,
        name: name || state.name,
        place: place || state.place,
        verified: verified ||state.verified,
        email: email || state.email,
        mobile: mobile || state.mobile,
        experience: experience || state.experience,
        about: about || state.about,
        image: image || state.image,
      };
    },
    logoutLawyer: (state, action) => {
      return {
        ...state,
        id: "",
        name: "",
        email: "",
        mobile: "",
        image: "",
        experience: 0,
        place: "",
        about: "",
        verified: false,
        
      };
    },
  },
});

export const { setlawyerDetails, logoutLawyer } = lawyerSlice.actions;

export default lawyerSlice.reducer;
