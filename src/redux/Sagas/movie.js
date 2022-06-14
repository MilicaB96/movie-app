import * as types from "../Constants/movie";
import MovieService from "../../services/MovieService";
import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  createMovieError,
  createMovieSuccess,
  deleteFromWatchListError,
  deleteFromWatchListSuccess,
  dislikeMovieError,
  dislikeMovieSuccess,
  fetchAllMoviesError,
  fetchAllMoviesSuccess,
  fetchMovieError,
  fetchMovieFromOmdbError,
  fetchMovieFromOmdbSuccess,
  fetchMovieSuccess,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchRelatedMoviesError,
  fetchRelatedMoviesSuccess,
  fetchWatchListError,
  fetchWatchListSuccess,
  likeMovieError,
  likeMovieSuccess,
  toggleWatchedError,
  toggleWatchedSuccess,
  toggleWatchListError,
  toggleWatchListSuccess,
} from "../Actions/movie";
import { fetchGenresAction } from "../Actions/genre";
import { selectGenres } from "../Selectors/genre";
import ROUTES from "./../../shared/routes/routes";
import { createMovieWithOmdb } from "../../helpers/createMovieWithOmdb";

export function* createMovie(action) {
  try {
    const data = yield call(MovieService.createMovie, action.movie);
    yield put(createMovieSuccess(data));
    action.history.push(ROUTES.DASHBOARD);
  } catch (error) {
    yield put(createMovieError(error));
  }
}
export function* fetchMovies(action) {
  try {
    const data = yield call(
      MovieService.getAll,
      action.page,
      action.search,
      action.genre
    );
    yield put(
      fetchAllMoviesSuccess(
        data.results,
        Boolean(data.previous),
        Boolean(data.next)
      )
    );
  } catch (error) {
    yield put(fetchAllMoviesError(error));
  }
}

export function* fetchMovie(action) {
  try {
    const data = yield call(MovieService.getMovie, action.id);
    yield put(fetchMovieSuccess(data));
  } catch (error) {
    yield put(fetchMovieError(error));
  }
}

export function* likeMovie(action) {
  try {
    const data = yield call(MovieService.like, action.id);
    yield put(likeMovieSuccess(data));
  } catch (error) {
    yield put(likeMovieError());
  }
}

export function* dislikeMovie(action) {
  try {
    const data = yield call(MovieService.dislike, action.id);
    yield put(dislikeMovieSuccess(data));
  } catch (error) {
    yield put(dislikeMovieError());
  }
}

export function* toggleWatchList({ id }) {
  try {
    const data = yield call(MovieService.toggleWatchList, id);
    yield put(toggleWatchListSuccess(data));
  } catch (error) {
    yield put(toggleWatchListError(error));
  }
}

export function* toggleWatched({ id }) {
  try {
    const data = yield call(MovieService.toggleWatched, id);
    yield put(toggleWatchedSuccess(data));
  } catch (error) {
    yield put(toggleWatchedError(error));
  }
}

export function* fetchWatchList({ page }) {
  try {
    const data = yield call(MovieService.getWatchList, page);
    yield put(fetchWatchListSuccess(data));
  } catch (error) {
    yield put(fetchWatchListError(error));
  }
}

export function* deleteFromWatchList({ id }) {
  try {
    yield call(MovieService.deleteFromWatchList, id);
    yield put(deleteFromWatchListSuccess(id));
  } catch (error) {
    yield put(deleteFromWatchListError(error));
  }
}
export function* fetchPopularMovies() {
  try {
    const movies = yield call(MovieService.getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError(error));
  }
}

export function* fetchRelatedMovies({ genre }) {
  try {
    const movies = yield call(MovieService.getRelatedMovies, genre);
    yield put(fetchGenresAction());
    yield put(fetchRelatedMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchRelatedMoviesError(error));
  }
}

export function* fetchMovieFromOmdb({ title, year, dispatch, history }) {
  try {
    const movie = yield call(MovieService.getMovieFromOmdb, title, year);
    yield put(fetchMovieFromOmdbSuccess(movie));
    const genres = yield select(selectGenres);
    yield put(createMovieWithOmdb(movie, genres, dispatch, history));
  } catch (error) {
    yield put(fetchMovieFromOmdbError(error));
  }
}

export default function* watchMovies() {
  yield takeLatest(types.CREATE_MOVIE, createMovie);
  yield takeLatest(types.FETCH_ALL_MOVIES, fetchMovies);
  yield takeLatest(types.FETCH_MOVIE, fetchMovie);
  yield takeLatest(types.LIKE_MOVIE, likeMovie);
  yield takeLatest(types.DISLIKE_MOVIE, dislikeMovie);
  yield takeLatest(types.TOGGLE_WATCHLIST, toggleWatchList);
  yield takeLatest(types.TOGGLE_WATCHED, toggleWatched);
  yield takeLatest(types.FETCH_WATCHLIST, fetchWatchList);
  yield takeLatest(types.DELETE_FROM_WATCHLIST, deleteFromWatchList);
  yield takeLatest(types.FETCH_POPULAR_MOVIES, fetchPopularMovies);
  yield takeLatest(types.FETCH_RELATED_MOVIES, fetchRelatedMovies);
  yield takeLatest(types.FETCH_MOVIE_FROM_OMDB, fetchMovieFromOmdb);
}
