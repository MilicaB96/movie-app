import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAction } from "../../redux/Actions/comment";
import { baseCommentsSelector } from "../../redux/Selectors/comment";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import "./Comments.css";

function Comments({ id }) {
  const dispatch = useDispatch();
  const comments = useSelector(baseCommentsSelector());
  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, []);
  return (
    <div className="comments">
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            {comment.parent === null && (
              <div>
                <CommentCard comment={comment} />
              </div>
            )}
          </div>
        ))}
      <hr />
      <CreateComment id={id} />
    </div>
  );
}

export default Comments;
