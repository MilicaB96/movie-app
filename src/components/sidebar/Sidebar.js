import React from "react";
import MovieTitleList from "./MovieTitleList";

function Sidebar({ movies, title }) {
  return (
    <div className="sidebar">
      <h1 className="sidebar_title">{title}</h1>
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
