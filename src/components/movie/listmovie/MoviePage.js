import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMoviesAction } from "../../../redux/Actions/movie";
import { selectMovies } from "../../../redux/Selectors/movie";
import PageNavigation from "../../pageNavigation/PageNavigation";
import MovieCard from "../moviecard/MovieCard";

function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchAllMoviesAction(page));
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      {movies && (
        <>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <PageNavigation setPage={setPage} page={page} />
        </>
      )}
    </div>
  );
}

export default MoviePage;
