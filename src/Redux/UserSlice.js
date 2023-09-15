import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : {}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setuserdetails : (state, action) => {
            state.userInfo = action.payload.userInfo
        },
        Logoutdetails :(state, action) => {
            state.userInfo = {}
        }
    }
})

export const {
    setuserdetails,
    Logoutdetails
} = userSlice.actions;

export default userSlice.reducer;