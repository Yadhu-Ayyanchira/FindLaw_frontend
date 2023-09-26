import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  mobile: "",
  is_admin: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.mob = action.payload.mobile;
      state.is_admin = action.payload.is_admin;
      state.image = action.payload.image;
    },
    logoutUser: (state, action) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.mobile = "";
      state.is_admin = "";
      state.image = "";
    },
  },
});

export const { setUserDetails, logoutUser } = userSlice.actions;

export default userSlice.reducer;
