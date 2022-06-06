import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRepliesAction } from "../../redux/Actions/comment";
import {
  replySelector,
  selectIsReplyNext,
} from "../../redux/Selectors/comment";
import Modal from "../modal/Modal";

function CommentCard({ comment }) {
  const dispatch = useDispatch();
  const commentReplies = useSelector(replySelector(comment.id));
  const isNext = useSelector(selectIsReplyNext);
  const [activated, setActivated] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  const handleModal = () => {
    setShowModal(true);
  };
  const handleReplies = (parent_id) => {
    dispatch(fetchCommentsRepliesAction(comment.movie.id, parent_id));
    setActivated(!activated);
  };
  const handleLoadMore = (parent_id, page) => {
    dispatch(fetchCommentsRepliesAction(comment.movie.id, parent_id, page));
    setPage(page);
  };
  return (
    <div className="comment_card">
      <h1>{comment.user.name}</h1>
      <p>{comment.body}</p>
      {comment.get_number_of_replies > 0 &&
        (activated ? (
          <button
            className="comment_btn"
            onClick={() => handleReplies(comment.id)}
          >
            View {comment.get_number_of_replies}
            {comment.get_number_of_replies == 1 ? " reply" : " replies"}
          </button>
        ) : (
          <button className="comment_btn" onClick={() => setActivated(true)}>
            hide replays
          </button>
        ))}
      <hr />
      <div className="comment_replies">
        {commentReplies &&
          !activated &&
          commentReplies.map((reply) => <CommentCard comment={reply} />)}
        {isNext && !activated && (
          <button
            className="load_btn"
            type="button"
            onClick={() => handleLoadMore(comment.id, page + 1)}
          >
            Load More
          </button>
        )}
      </div>
      <button className="comment_btn" type="submit" onClick={handleModal}>
        Reply
      </button>
      <Modal
        show={showModal}
        setShow={setShowModal}
        movieId={comment.movie.id}
        parent={comment.id}
      />
    </div>
  );
}

export default CommentCard;
