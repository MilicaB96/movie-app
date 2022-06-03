import { combineReducers } from "redux";
import authReducer from "./Reducers/auth";
import genreReducer from "./Reducers/genre";
import movieReducer from "./Reducers/movie";
import commentReducer from "./Reducers/comment";
const rootReducer = combineReducers({
  auth: authReducer,
  genre: genreReducer,
  movie: movieReducer,
  comment: commentReducer,
});
export default rootReducer;
