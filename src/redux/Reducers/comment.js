import * as types from "../Constants/comment";

const initialState = {
  comments: [],
  commentReplies: [],
  errors: [],
};
export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.comments };
    case types.FETCH_COMMENTS_ERROR:
      return { ...state, errors: action.errors };
    case types.FETCH_COMMENTS_REPLIES_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, ...action.comments],
      };
    case types.FETCH_COMMENTS_REPLIES_ERROR:
      return { ...state, errors: action.errors };
    case types.CREATE_COMMENT_SUCCESS:
      return action.comment.parent
        ? {
            ...state,
            comments: [
              ...state.comments?.map?.((comment) => {
                if (comment.id === action.comment?.parent.id) {
                  comment.get_number_of_replies += 1;
                }
                return comment;
              }),
              action.comment,
            ],
          }
        : { ...state, comments: [...state.comments, action.comment] };
    case types.CREATE_COMMENT_ERROR:
      return { ...state, errors: action.errors };
    default:
      return { ...state };
  }
}
