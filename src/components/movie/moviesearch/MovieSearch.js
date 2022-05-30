import React from "react";
import "./MovieSearch.css";

function MovieSearch({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}

export default MovieSearch;
