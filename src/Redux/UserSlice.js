import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  mobile: "",
  place: "",
  image: "",
  flc: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { id, name, email, mobile, place, image, flc } = action.payload;
      return {
        ...state,
        id: id || state.id,
        name: name || state.name,
        email: email || state.email,
        mobile: mobile || state.mobile,
        place: place || state.place,
        image: image || state.image,
        flc: flc || state.flc,
      };
    },
    logoutUser: (state, action) => {
      return {
        ...state,
        id: "",
        name: "",
        email: "",
        mobile: "",
        place: "",
        image: "",
        flc: 0,
      };
    },
  },
});

export const { setUserDetails, logoutUser } = userSlice.actions;

export default userSlice.reducer;
