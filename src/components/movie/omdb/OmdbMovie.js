import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMovieFromOmdbAction } from "../../../redux/Actions/movie";
import { selectOmdbMovie } from "../../../redux/Selectors/movie";
import "./OmdbMovie.css";

function OmdbMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const movie = useSelector(selectOmdbMovie);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovieFromOmdbAction(title, year, dispatch, history));
  };

  return (
    <div className="omdb_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title "
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          step="1"
          placeholder="Enter Year"
          onChange={(e) => setYear(e.target.value)}
        />
        <div>{movie?.Error && <p>{movie.Error}</p>}</div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default OmdbMovie;
