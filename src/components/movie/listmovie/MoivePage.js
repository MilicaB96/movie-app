import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMoviesAction } from "../../../redux/Actions/movie";
import { selectMovies } from "../../../redux/Selectors/movie";
import MovieCard from "../moviecard/MovieCard";
import "./MoviePage.css";
function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchAllMoviesAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {Boolean(movies) &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default MoviePage;
