import {loginFetch, loginFail, loginSuccess, loginRegisterFail, forgotPasswordSuccess, forgotPasswordFail,} from "./userSlice";
import { publicRequest } from "../request";

export const login = async (dispatch, user) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err){
        dispatch(loginFail())
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err){
        dispatch(loginRegisterFail())
    }
}

export const forgotPassword = async (dispatch, user, history) => {
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