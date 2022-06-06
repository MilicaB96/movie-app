import { call, put, takeLatest } from "redux-saga/effects";
import CommentService from "../../services/CommentService";
import {
  createCommentError,
  createCommentSuccess,
  fetchCommentsError,
  fetchCommentsRepliesError,
  fetchCommentsRepliesSuccess,
  fetchCommentsSuccess,
} from "../Actions/comment";
import * as types from "../Constants/comment";

export function* fetchComments({ id, page }) {
  try {
    const comments = yield call(CommentService.getMovieComments, id, page);
    yield put(fetchCommentsSuccess(comments.results, Boolean(comments.next)));
  } catch (error) {
    yield put(fetchCommentsError(error));
  }
}

export function* fetchCommentReplies({ id, parent_id, page }) {
  try {
    const comments = yield call(
      CommentService.getCommentReplies,
      id,
      parent_id,
      page
    );
    yield put(
      fetchCommentsRepliesSuccess(comments.results, Boolean(comments.next))
    );
  } catch (error) {
    yield put(fetchCommentsRepliesError(error));
  }
}

export function* createComment({ id, content }) {
  try {
    const comment = yield call(CommentService.createComment, id, content);
    yield put(createCommentSuccess(comment));
  } catch (error) {
    yield put(createCommentError(error));
  }
}

export default function* watchComment() {
  yield takeLatest(types.FETCH_COMMENTS, fetchComments);
  yield takeLatest(types.CREATE_COMMENT, createComment);
  yield takeLatest(types.FETCH_COMMENTS_REPLIES, fetchCommentReplies);
}
