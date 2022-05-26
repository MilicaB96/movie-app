import { combineReducers } from "redux";
import authReducer from "./Reducers/auth";
import genreReducer from "./Reducers/genre";
import movieReducer from "./Reducers/movie";
const rootReducer = combineReducers({
  auth: authReducer,
  genre: genreReducer,
  movie: movieReducer,
});
export default rootReducer;
