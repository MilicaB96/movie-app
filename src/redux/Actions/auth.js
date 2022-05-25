import * as types from "../Constants/auth";

export const registerUserAction = (user, history, resetForm) => {
  return {
    type: types.REGISTER_USER,
    user,
    history,
    resetForm,
  };
};
export const registerUserSuccess = (user) => {
  return {
    type: types.REGISTER_USER_SUCCESS,
    user,
  };
};
export const registerUserError = (message) => {
  return {
    type: types.REGISTER_USER_ERROR,
    message: message,
  };
};

export const loginUserAction = (credentials, histroy, resetForm) => ({
  type: types.LOGIN_USER,
  credentials,
  histroy,
  resetForm,
});
export const loginUserSuccess = (credentials) => ({
  type: types.LOGIN_USER_SUCCESS,
  credentials,
});

export const loginUserError = (message) => ({
  type: types.LOGIN_USER_ERROR,
  message,
});

export const logoutUserAction = (history) => ({
  type: types.LOGOUT_USER,
  history,
});
export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});
export const logoutUserError = () => ({
  type: types.LOGOUT_USER_ERROR,
});
