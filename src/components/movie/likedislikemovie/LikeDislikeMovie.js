import React from "react";
import { useDispatch } from "react-redux";
import {
  dislikeMovieAction,
  likeMovieAction,
} from "../../../redux/Actions/movie";
import "./LikeDislikeMovie.css";

function LikeDislikeMovie({ movie }) {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeMovieAction(movie.id));
  };

  const handleDislike = () => {
    dispatch(dislikeMovieAction(movie.id));
  };
  return (
    <div className="vote_container">
      <button
        className={movie.user_liked_movie ? "btn_active" : "btn_primary"}
        onClick={handleLike}
      >
        <span class="material-symbols-outlined">thumb_up</span>
      </button>
      <span className="span">{movie.get_likes}</span>
      <button
        className={movie.user_disliked_movie ? "btn_active" : "btn_primary"}
        onClick={handleDislike}
      >
        <span class="material-symbols-outlined">thumb_down</span>
      </button>
      <span className="span">{movie.get_dislikes}</span>
      <br />
    </div>
  );
}

export default LikeDislikeMovie;
