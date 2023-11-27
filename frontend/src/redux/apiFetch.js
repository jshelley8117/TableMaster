import {loginFetch, loginFail, loginSuccess, loginRegisterFail, forgotPasswordSuccess, forgotPasswordFail, updateProfilePic} from "./userSlice";
import { publicRequest } from "../request";

export const login = async (dispatch, user, history) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data);
        history("/dashboard");
    } catch(err){
        dispatch(loginFail());
    }
}

export const register = async (dispatch, user, history) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data);
        history("/dashboard");
    } catch(err){
        dispatch(loginRegisterFail());
    }
}

export const forgotPassword = async (dispatch, user, history) => {
    dispatch(loginFetch());
  
    try {
      const res = await publicRequest.post("/auth/password", user);
      dispatch(forgotPasswordSuccess(res.data));
      console.log(res.data);
      history("/account-log-in");
    } catch (err) {
      dispatch(forgotPasswordFail());
      console.log(err);
    }
};

export const updateProfilePicture = (user, profilePic) => async (dispatch) => {
  dispatch(loginFetch());
  
    try {
      const res = await publicRequest.post("/auth/profile-picture", {
        email: user.email,
        profilePic: profilePic,
      });
  
      if (res.data.message === 'Profile picture updated successfully') {
        dispatch(updateProfilePic(profilePic));
        console.log('Profile picture updated successfully:', profilePic);
      } else {
        console.error('Invalid response format:', res);
      }
    } catch (err) {
      console.error('Error updating profile picture:', err);
      throw err;
    }
  };