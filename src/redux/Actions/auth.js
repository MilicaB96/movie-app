import * as types from "../Constants/auth";

export const registerUserAction = (user, { resetForm }) => {
  resetForm();
  return {
    type: types.REGISTER_USER,
    payload: user,
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
