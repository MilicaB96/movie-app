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

export const fetchAllMoviesAction = (
  page = 1,
  search = null,
  genre = null
) => ({
  type: types.FETCH_ALL_MOVIES,
  page,
  search,
  genre,
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

export const likeMovieAction = (id) => ({
  type: types.LIKE_MOVIE,
  id,
});

export const likeMovieSuccess = (movie) => ({
  type: types.LIKE_MOVIE_SUCCESS,
  movie,
});
export const likeMovieError = () => ({
  type: types.LIKE_MOVIE_ERROR,
});

export const dislikeMovieAction = (id) => ({
  type: types.DISLIKE_MOVIE,
  id,
});

export const dislikeMovieSuccess = (movie) => ({
  type: types.DISLIKE_MOVIE_SUCCESS,
  movie,
});
export const dislikeMovieError = () => ({
  type: types.DISLIKE_MOVIE_ERROR,
});
