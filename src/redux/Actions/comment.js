import * as types from "../Constants/comment";
export const fetchCommentsAction = (id) => ({
  type: types.FETCH_COMMENTS,
  id,
});

export const fetchCommentsSuccess = (comments) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  comments,
});

export const fetchCommentsError = (errors) => ({
  type: types.FETCH_COMMENTS_ERROR,
  errors,
});

export const fetchCommentsRepliesAction = (id, parent_id) => ({
  type: types.FETCH_COMMENTS_REPLIES,
  id,
  parent_id,
});

export const fetchCommentsRepliesSuccess = (comments) => ({
  type: types.FETCH_COMMENTS_REPLIES_SUCCESS,
  comments,
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
