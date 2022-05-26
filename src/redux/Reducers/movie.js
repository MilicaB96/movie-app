import * as types from "../Constants/movie";

const initialState = { movies: [], error: [] };

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, action.data] };
    case types.CREATE_MOVIE_ERROR:
      return { ...state, error: action.message };
    default:
      return state;
  }
}
