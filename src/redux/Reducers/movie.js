import * as types from "../Constants/movie";

const initialState = {
  movies: [],
  error: [],
  paginationState: {
    isPrev: true,
    isNext: false,
  },
  movie: null,
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
        movie: action.movie,
      };
    case types.DISLIKE_MOVIE_ERROR:
      return { ...state };
    default:
      return state;
  }
}
