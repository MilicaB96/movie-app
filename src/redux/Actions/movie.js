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

export const toggleWatchListAction = (id) => ({
  type: types.TOGGLE_WATCHLIST,
  id,
});
export const toggleWatchListSuccess = (movie) => ({
  type: types.TOGGLE_WATCHLIST_SUCCESS,
  movie,
});
export const toggleWatchListError = (message) => ({
  type: types.TOGGLE_WATCHLIST_ERROR,
  message,
});

export const fetchWatchListAction = () => ({
  type: types.FETCH_WATCHLIST,
});
export const fetchWatchListSuccess = (movies, isPrev, isNext) => ({
  type: types.FETCH_WATCHLIST_SUCCESS,
  movies,
});
export const fetchWatchListError = (message) => ({
  type: types.FETCH_WATCHLIST_ERROR,
  message,
});

export const toggleWatchedAction = (id) => ({
  type: types.TOGGLE_WATCHED,
  id,
});
export const toggleWatchedSuccess = (movie) => ({
  type: types.TOGGLE_WATCHED_SUCCESS,
  movie,
});
export const toggleWatchedError = (message) => ({
  type: types.TOGGLE_WATCHED_ERROR,
  message,
});

export const deleteFromWatchListAction = (id) => ({
  type: types.DELETE_FROM_WATCHLIST,
  id,
});
export const deleteFromWatchListSuccess = (id) => ({
  type: types.DELETE_FROM_WATCHLIST_SUCCESS,
  id,
});
export const deleteFromWatchListError = (message) => ({
  type: types.DELETE_FROM_WATCHLIST_ERROR,
  message,
});
export const fetchPopularMoviesAction = () => ({
  type: types.FETCH_POPULAR_MOVIES,
});
export const fetchPopularMoviesSuccess = (movies) => ({
  type: types.FETCH_POPULAR_MOVIES_SUCCESS,
  movies,
});
export const fetchPopularMoviesError = (message) => ({
  type: types.FETCH_POPULAR_MOVIES_ERROR,
  message,
});

export const fetchRelatedMoviesAction = (genre) => ({
  type: types.FETCH_RELATED_MOVIES,
  genre,
});
export const fetchRelatedMoviesSuccess = (movies) => ({
  type: types.FETCH_RELATED_MOVIES_SUCCESS,
  movies,
});
export const fetchRelatedMoviesError = (message) => ({
  type: types.FETCH_RELATED_MOVIES_ERROR,
  message,
});
export const fetchMovieFromOmdbAction = (title, year, dispatch, history) => ({
  type: types.FETCH_MOVIE_FROM_OMDB,
  title,
  year,
  dispatch,
  history,
});
export const fetchMovieFromOmdbSuccess = (movie) => ({
  type: types.FETCH_MOVIE_FROM_OMDB_SUCCESS,
  movie,
});
export const fetchMovieFromOmdbError = (message) => ({
  type: types.FETCH_MOVIE_FROM_OMDB_ERROR,
  message,
});

export const elasticSearchAction = (search, page, isPrev, isNext) => ({
  type: types.ELASTIC_SEARCH,
  search,
  page,
  isPrev,
  isNext,
});
export const elasticSearchSuccess = (movies) => ({
  type: types.ELASTIC_SEARCH_SUCCESS,
  movies,
});
export const elasticSearchError = (message) => ({
  type: types.ELASTIC_SEARCH_ERROR,
  message,
});
