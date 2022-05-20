import { call, put, takeLatest } from "redux-saga/effects";
import AuthService from "./../../services/AuthService";
import * as types from "../Actions";

export function* registerHandler(action) {
  try {
    const user = yield call(AuthService.register, action.payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, user });
  } catch (error) {
    yield put({
      type: types.REGISTER_USER_ERROR,
      message: error.response.data,
    });
  }
}
export default function* watchAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerHandler);
}
