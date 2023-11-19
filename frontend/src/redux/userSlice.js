import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isFetchingReg: false,
        isFetchingForgot: false,
        error: false,
        error2: false,
        error3: false,
    },

    reducers: {
        loginFetch:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
            state.error2 = false;
        },
        loginFail:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        loginRegisterFail:(state)=>{
            state.isFetchingReg = false;
            state.error2 = true;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        forgotPasswordSuccess: (state, action) => {
            state.isFetchingForgot = false;
            state.error3 = false;
        },
        forgotPasswordFail: (state) => {
            state.isFetchingForgot = false;
            state.error3 = true; 
        },
        },
    },
);

export const {loginFetch, loginSuccess, loginFail, loginRegisterFail, logout, forgotPasswordFail, forgotPasswordSuccess} = userSlice.actions;
export default userSlice.reducer;