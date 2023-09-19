import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuserdetails: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { setuserdetails, logoutUser } = userSlice.actions;

export default userSlice.reducer;
