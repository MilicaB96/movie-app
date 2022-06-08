import * as types from "../Constants/movie";

const initialState = {
  movies: [],
  error: [],
  paginationState: {
    isPrev: true,
    isNext: false,
  },
  movie: null,
  watchlist: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, action.movie] };
    case types.CREATE_MOVIE_ERROR:
      return { ...state, error: action.message };
    case types.FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        paginationState: {
          isPrev: action.isPrev,
          isNext: action.isNext,
        },
      };
    case types.FETCH_ALL_MOVIES_ERROR:
      return { ...state, error: action.message };
    case types.FETCH_MOVIE_SUCCESS:
      return { ...state, movie: action.movie };
    case types.FETCH_MOVIE_ERROR:
      return { ...state, error: action.message };
    case types.LIKE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [
          ...state.movies?.map?.((movie) => {
            if (movie.id === action.movie.id) {
              movie = action.movie;
            }
            return movie;
          }),
        ],
        watchlist: [
          ...state?.watchlist?.map((item) => {
            if (item.movie.id === action.movie.id) {
              item.movie = action.movie;
            }
            return item;
          }),
        ],
        movie: action.movie,
      };
    case types.LIKE_MOVIE_ERROR:
      return { ...state };
    case types.DISLIKE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [
          ...state.movies?.map?.((movie) => {
            if (movie.id === action.movie.id) {
              movie = action.movie;
            }
            return movie;
          }),
        ],
        watchlist: [
          ...state?.watchlist?.map((item) => {
            if (item.movie.id === action.movie.id) {
              item.movie = action.movie;
            }
            return item;
          }),
        ],
        movie: action.movie,
      };
    case types.DISLIKE_MOVIE_ERROR:
      return { ...state };
    case types.TOGGLE_WATCHLIST_SUCCESS:
      return {
        ...state,
        movies: [
          ...state.movies?.map?.((movie) => {
            if (movie.id === action.movie.id) {
              movie = action.movie;
            }
            return movie;
          }),
        ],
        movie: action.movie,
      };
    case types.TOGGLE_WATCHLIST_ERROR:
      return { ...state, error: action.message };
    case types.TOGGLE_WATCHED_SUCCESS:
      return {
        ...state,
        watchlist: [
          ...state?.watchlist?.map((item) => {
            if (item.id === action.movie.id) {
              item.watched = action.movie.watched;
            }
            return item;
          }),
        ],
      };
    case types.TOGGLE_WATCHED_ERROR:
      return { ...state, error: action.message };
    case types.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: action.movies,
        paginationState: {
          isPrev: action.isPrev,
          isNext: action.isNext,
        },
      };
    case types.FETCH_WATCHLIST_ERROR:
      return {
        ...state,
        error: action.message,
      };
    case types.DELETE_FROM_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: [...state.watchlist?.filter((item) => item.id != action.id)],
      };
    case types.DELETE_FROM_WATCHLIST_ERROR:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
}
