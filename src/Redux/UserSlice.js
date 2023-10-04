import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  mobile: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { id, name, email, mobile, image } = action.payload;
      return {
        ...state,
        id: id || state.id,
        name: name || state.name,
        email: email || state.email,
        mobile: mobile || state.mobile,
        image: image || state.image,
      };
    },
    logoutUser: (state, action) => {
      return {
        ...state,
        id: "",
        name: "",
        email: "",
        mobile: "",
        image: "",
      };
    },
  },
});

export const { setUserDetails, logoutUser } = userSlice.actions;

export default userSlice.reducer;
