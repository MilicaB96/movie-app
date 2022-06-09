import React from "react";
import MovieTitleList from "./MovieTitleList";

function Sidebar({ movies }) {
  return (
    <div className="sidebar">
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
