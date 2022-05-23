import * as types from "../Constants/auth";

export const registerUserAction = (user,history,resetForm) => {
  return {
    type: types.REGISTER_USER,
    user,
    history,
    resetForm
  };
};
export const registerUserSuccess = (user) => {
  return { 
    type: types.REGISTER_USER_SUCCESS,
    user 
  };
};
export const registerUserError = (message) => {
  return {
    type: types.REGISTER_USER_ERROR,
    message: message,
  };
};
