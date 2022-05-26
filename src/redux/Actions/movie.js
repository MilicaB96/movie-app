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
