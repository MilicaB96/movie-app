import * as types from "../Constants/movie";
import MovieService from "../../services/MovieService";
import { call, put, takeLatest } from "redux-saga/effects";
import { createMovieError, createMovieSuccess } from "../Actions/movie";
import ROUTES from "./../../shared/routes/routes";

export function* createMovie(action) {
  try {
    const data = yield call(MovieService.createMovie, action.movie);
    yield put(createMovieSuccess(data));
    action.history.push(ROUTES.DASHBOARD);
  } catch (error) {
    yield put(createMovieError(error));
  }
}
export default function* watchMovies() {
  yield takeLatest(types.CREATE_MOVIE, createMovie);
}
