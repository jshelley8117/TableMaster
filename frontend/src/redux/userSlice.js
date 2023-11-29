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
            state.isFetching = true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFail:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        registerFetch: (state) =>{
            state.isFetchingReg = true;
        },
        registerSuccess:(state, action) =>{
            state.isFetchingReg = false;
            state.currentUser = action.payload;
            state.error2 = false;
        },
        loginRegisterFail:(state)=>{
            state.isFetchingReg = false;
            state.error2 = true;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        forgotPasswordFetch: (state) =>{
            state.isFetchingForgot = true;
        },
        forgotPasswordSuccess: (state, action) => {
            state.isFetchingForgot = false;
            state.error3 = false;
        },
        forgotPasswordFail: (state) => {
            state.isFetchingForgot = false;
            state.error3 = true; 
        },
        updateProfilePic: (state, action) => {
            state.currentUser.profilePic = action.payload;
          },
    },
});

export const {loginFetch, loginSuccess, loginFail, loginRegisterFail, logout, forgotPasswordFail, forgotPasswordSuccess, updateProfilePic, registerSuccess, registerFetch, forgotPasswordFetch} = userSlice.actions;
export default userSlice.reducer;