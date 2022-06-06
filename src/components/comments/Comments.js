import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAction } from "../../redux/Actions/comment";
import {
  baseCommentsSelector,
  selectIsNext,
} from "../../redux/Selectors/comment";
import CommentCard from "./CommentCard";
import CreateComment from "./CreateComment";
import "./Comments.css";

function Comments({ id }) {
  const dispatch = useDispatch();
  const comments = useSelector(baseCommentsSelector());
  const isNext = useSelector(selectIsNext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, []);

  useEffect(() => {
    dispatch(fetchCommentsAction(id, page));
  }, [page]);

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
      {isNext && (
        <button
          className="load_btn"
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      )}
      <hr />
      <CreateComment id={id} />
    </div>
  );
}

export default Comments;
