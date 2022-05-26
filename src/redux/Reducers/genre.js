import * as types from "../Constants/genre";

const initialState = { genres: [] };

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GENRES_SUCCESS:
      return { ...state, genres: action.data };
    case types.FETCH_GENRES_ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
