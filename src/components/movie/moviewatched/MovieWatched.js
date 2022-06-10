import React from "react";
import "./MovieWatched.css";

function MovieWatched() {
  return (
    <div className="movie_watched">
      <div>Watched</div>
      <div className="movie_checkmark">
        <span className="material-symbols-outlined">task_alt</span>
      </div>
    </div>
  );
}

export default MovieWatched;
