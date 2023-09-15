import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lawyerInfo : {}
}

const lawyerSlice = createSlice({
    name: "lawyer",
    initialState,
    reducers:{
        setlawyerdetails : (state, action) => {
            state.lawyerInfo = action.payload.lawyerInfo
        },
        Logoutdetails : (state, action) => {
            state.lawyerInfo = {}
        }
    }
})

export const {
    setlawyerdetails,
    Logoutdetails
} = lawyerSlice.actions

export default lawyerSlice.reducer;