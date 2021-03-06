import * as api from "../api/index";
import {
  AUTH
} from "../constants/actionTypes";
export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
 try {
   const { data } = await api.signUp(formData);
console.log(data)
   dispatch({ type: AUTH, data });

   router.push("/");
 } catch (error) {
   console.log(error);
 }
  
};
