import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../Constants/genre";
import GenreService from "../../services/GenreService";
import { fetchGenresError, fetchGenresSuccess } from "../Actions/genre";

export function* fetchGenres() {
  try {
    const data = yield call(GenreService.getAll);
    yield put(fetchGenresSuccess(data));
  } catch (error) {
    yield put(fetchGenresError(error));
  }
}

export default function* watchGenre() {
  yield takeLatest(types.FETCH_GENRES, fetchGenres);
}
