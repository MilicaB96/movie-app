import React from "react";
import { useDispatch } from "react-redux";
import {
  dislikeMovieAction,
  likeMovieAction,
} from "../../../redux/Actions/movie";
import "./LikeDislikeRatio.css";

function LikeDislikeRatio({ movie }) {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeMovieAction(movie.id));
  };

  const handleDislike = () => {
    dispatch(dislikeMovieAction(movie.id));
  };
  return (
    <div>
      <button
        className={movie.user_liked_movie ? "pressed" : "removed"}
        onClick={handleLike}
      >
        Like
      </button>
      <span className="span">{movie.get_likes}</span>
      <button
        className={movie.user_disliked_movie ? "pressed" : "removed"}
        onClick={handleDislike}
      >
        Dislike
      </button>
      <span className="span">{movie.get_dislikes}</span>
      <br />
    </div>
  );
}

export default LikeDislikeRatio;
