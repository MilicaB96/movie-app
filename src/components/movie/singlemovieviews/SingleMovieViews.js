import React from "react";

function SingleMovieViews({ movie }) {
  return (
    <div>
      {movie.number_of_views === 1 ? (
        <p>This movie page has been viewed 1 time</p>
      ) : (
        <p>This movie page has been viewed {movie.number_of_views} times</p>
      )}
    </div>
  );
}

export default SingleMovieViews;
