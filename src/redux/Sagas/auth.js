import { call, fork, put, takeLatest } from "redux-saga/effects";
import AuthService from "./../../services/AuthService";
import * as types from "../Constants/auth"
import { registerUserSuccess,registerUserError } from "../Actions/auth";

export function* registration(action) {
  try {
    const user = yield call(AuthService.register, action.payload.content);
    yield put(registerUserSuccess(user));
    if (action.payload.meta.onSuccess) {
      yield call(action.payload.meta.onSuccess);
    }
  } catch (error) {
    if(error.response){
    yield put(registerUserError(error.response.data));
  }
  }
}
export function* registrationSaga(){
  yield takeLatest(types.REGISTER_USER, registration);
}

export default function* watchAuthentication(){
  yield fork(registrationSaga)
}