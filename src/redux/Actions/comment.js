import * as types from "../Constants/comment";
export const fetchCommentsAction = (id, page = 1) => ({
  type: types.FETCH_COMMENTS,
  id,
  page,
});

export const fetchCommentsSuccess = (comments, next) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  comments,
  next,
});

export const fetchCommentsError = (errors) => ({
  type: types.FETCH_COMMENTS_ERROR,
  errors,
});

export const fetchCommentsRepliesAction = (id, parent_id, page) => ({
  type: types.FETCH_COMMENTS_REPLIES,
  id,
  parent_id,
  page,
});

export const fetchCommentsRepliesSuccess = (comments, next) => ({
  type: types.FETCH_COMMENTS_REPLIES_SUCCESS,
  comments,
  next,
});

export const fetchCommentsRepliesError = (errors) => ({
  type: types.FETCH_COMMENTS_REPLIES_ERROR,
  errors,
});

export const createCommentAction = (id, content, parent) => ({
  type: types.CREATE_COMMENT,
  id,
  content,
  parent,
});

export const createCommentSuccess = (comment) => ({
  type: types.CREATE_COMMENT_SUCCESS,
  comment,
});

export const createCommentError = (errors) => ({
  type: types.CREATE_COMMENT_ERROR,
  errors,
});
