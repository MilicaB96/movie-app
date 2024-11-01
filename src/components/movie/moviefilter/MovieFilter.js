import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenresAction } from "../../../redux/Actions/genre";
import { selectGenres } from "../../../redux/Selectors/genre";
import "./MovieFilter.css";

function MovieFilter({ genre, setGenre }) {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  useEffect(() => {
    dispatch(fetchGenresAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="filter">
      <select name="genre" onChange={(e) => setGenre(e.target.value)}>
        <option value={"default"}>Genre Filter</option>
        {genres &&
          genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default MovieFilter;
