import * as types from "../Constants/movie";

export const createMovieAction = (movie, history) => ({
  type: types.CREATE_MOVIE,
  movie,
  history,
});
export const createMovieSuccess = (movie) => ({
  type: types.CREATE_MOVIE_SUCCESS,
  movie,
});
export const createMovieError = (message) => ({
  type: types.CREATE_MOVIE_ERROR,
  message,
});

export const fetchAllMoviesAction = (page = 1) => ({
  type: types.FETCH_ALL_MOVIES,
  page,
});
export const fetchAllMoviesSuccess = (movies, isPrev, isNext) => ({
  type: types.FETCH_ALL_MOVIES_SUCCESS,
  movies,
  isPrev,
  isNext,
});
export const fetchAllMoviesError = (message) => ({
  type: types.FETCH_ALL_MOVIES_ERROR,
  message,
});
export const fecthMovieAction = (id) => ({
  type: types.FETCH_MOVIE,
  id,
});
export const fetchMovieSuccess = (movie) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  movie,
});
export const fetchMovieError = (message) => ({
  type: types.FETCH_MOVIE_ERROR,
  message,
});
