import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRepliesAction } from "../../redux/Actions/comment";
import { replySelector } from "../../redux/Selectors/comment";
import CreateComment from "./CreateComment";

function CommentCard({ comment }) {
  const dispatch = useDispatch();
  const commentReplies = useSelector(replySelector(comment.id));
  const [activated, setActivated] = useState(true);

  const handleReplies = (parent_id) => {
    dispatch(fetchCommentsRepliesAction(comment.movie.id, parent_id));
    setActivated(!activated);
  };

  return (
    <div className="comment_card">
      <h1>{comment.user.name}</h1>
      <p>{comment.body}</p>
      {comment.get_number_of_replies > 0 &&
        (activated ? (
          <button onClick={() => handleReplies(comment.id)}>
            View {comment.get_number_of_replies}
            {comment.get_number_of_replies == 1 ? " reply" : " replies"}
          </button>
        ) : (
          <button onClick={() => setActivated(true)}>hide replays</button>
        ))}
      <hr />
      <div className="comment_replies">
        {commentReplies &&
          !activated &&
          commentReplies.map((reply) => (
            <div>
              <CommentCard comment={reply} />
            </div>
          ))}
      </div>
      <CreateComment id={comment.movie.id} parent={comment.id} />
    </div>
  );
}

export default CommentCard;
