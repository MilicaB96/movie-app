import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMoviesAction } from "../../../redux/Actions/movie";
import {
  selectIsNext,
  selectIsPrev,
  selectMovies,
} from "../../../redux/Selectors/movie";
import MovieCard from "../moviecard/MovieCard";

function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const isPrev = useSelector(selectIsPrev);
  const isNext = useSelector(selectIsNext);
  const [page, setPage] = useState(1);
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    dispatch(fetchAllMoviesAction(page));
    // eslint-disable-next-line
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {movies && (
        <>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <div className="navbuttons">
            {isPrev && (
              <button type="button" onClick={handlePrev}>
                Prev
              </button>
            )}
            {isNext && (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MoviePage;
