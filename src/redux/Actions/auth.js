import * as types from ".";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    payload: user,
  };
};
