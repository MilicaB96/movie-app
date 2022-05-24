import * as types from "../Constants/auth";

const initialState = {
  isAuthenticated: Boolean(localStorage.getItem("token")),
  registerError: [],
  loginError: [],
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, user: action.user };
    case types.REGISTER_USER_ERROR:
      return { ...state, registerError: action.message };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, credentials: action.credentials, isAuthenticated:true };
    case types.LOGIN_USER_ERROR:
      return { ...state, loginError: action.message };
    default:
      return state;
  }
}
