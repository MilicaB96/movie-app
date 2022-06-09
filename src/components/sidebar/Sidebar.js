import React from "react";
import MovieTitleList from "./MovieTitleList";

function Sidebar({ movies, related }) {
  return (
    <div className="sidebar">
      <h1 className="sidebar_title">
        {related ? "Related movies" : "Popualr movies"}
      </h1>
      {movies &&
        movies.map((movie) => (
          <div>
            <MovieTitleList title={movie.title} id={movie.id} />
            <hr className="shorter_hr" />
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
