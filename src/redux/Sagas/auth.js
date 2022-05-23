import { call, fork, put, takeLatest } from "redux-saga/effects";
import AuthService from "./../../services/AuthService";
import * as types from "../Constants/auth";
import { registerUserSuccess, registerUserError } from "../Actions/auth";
import ROUTES from "./../../shared/routes/routes";

export function* registration(action) {
  try {
    const { user, history, resetForm } = action;
    const response = yield call(AuthService.register, user);
    resetForm();
    history.push(ROUTES.LOGIN);
    yield put(registerUserSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(registerUserError(error.response.data));
    }
  }
}
export function* registrationSaga() {
  yield takeLatest(types.REGISTER_USER, registration);
}

export default function* watchAuthentication() {
  yield fork(registrationSaga);
}
