import { createSelector } from "reselect";

const selectComments = (state) => state.comment.comments;

export const replySelector = (id) =>
  createSelector(selectComments, (comments) => {
    return comments?.filter?.((comment) => comment?.parent?.id === id);
  });

export const baseCommentsSelector = () =>
  createSelector(selectComments, (comments) => {
    return comments?.filter?.((comment) => !comment.parent);
  });

export const selectIsNext = (state) => state.comment.isNext;
export const selectIsReplyNext = (state) => state.comment.isReplyNext;
