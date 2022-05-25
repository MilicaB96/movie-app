import { call, fork, put, takeLatest } from "redux-saga/effects";
import AuthService from "./../../services/AuthService";
import * as types from "../Constants/auth";
import {
  registerUserSuccess,
  registerUserError,
  loginUserSuccess,
  loginUserError,
  logoutUserSuccess,
  logoutUserError,
} from "../Actions/auth";
import ROUTES from "./../../shared/routes/routes";

export function* registration(action) {
  try {
    const { user, history, resetForm } = action;
    const response = yield call(AuthService.register, user);
    resetForm();
    yield put(registerUserSuccess(response));
    history.push(ROUTES.LOGIN);
  } catch (error) {
    if (error.response) {
      yield put(registerUserError(error.response.data));
    }
  }
}
export function* registrationSaga() {
  yield takeLatest(types.REGISTER_USER, registration);
}

export function* login(action) {
  try {
    const { credentials, history, resetForm } = action;
    const response = yield call(AuthService.login, credentials);
    yield put(loginUserSuccess(response));
    resetForm();
    history.push(ROUTES.DASHBOARD);
  } catch (error) {
    if (error.response) {
      yield put(loginUserError(error.response.data));
    }
  }
}
export function* loginSaga() {
  yield takeLatest(types.LOGIN_USER, login);
}

export function* logout(action) {
  try {
    yield call(AuthService.logout);
    yield put(logoutUserSuccess());
    action.history.push(ROUTES.LOGIN);
  } catch (error) {
    yield put(logoutUserError());
  }
}

export function* logoutSaga() {
  yield takeLatest(types.LOGOUT_USER, logout);
}

export default function* watchAuthentication() {
  yield fork(registrationSaga);
  yield fork(loginSaga);
  yield fork(logoutSaga);
}
