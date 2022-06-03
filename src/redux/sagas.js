import { all } from "redux-saga/effects";
import watchAuthentication from "./Sagas/auth";
import watchGenre from "./Sagas/genre";
import watchMovie from "./Sagas/movie";
import watchComment from "./Sagas/comment";

export default function* sagas() {
  yield all([
    watchAuthentication(),
    watchGenre(),
    watchMovie(),
    watchComment(),
  ]);
}
