import * as types from "../Constants/genre";
export const fetchGenresAction = () => ({
  type: types.FETCH_GENRES,
});
export const fetchGenresSuccess = (data) => ({
  type: types.FETCH_GENRES_SUCCESS,
  data,
});
export const fetchGenresError = (message) => ({
  type: types.FETCH_GENRES_SUCCESS,
  message,
});
