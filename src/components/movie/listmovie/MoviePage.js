import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMoviesAction } from "../../../redux/Actions/movie";
import { selectError, selectMovies } from "../../../redux/Selectors/movie";
import MovieCard from "../moviecard/MovieCard";

function MoviePage() {
  const dispatch = useDispatch();
  const fetchedMovies = useSelector(selectMovies);
  const error404 = Boolean(useSelector(selectError).status === 404);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      dispatch(fetchAllMoviesAction(page));
      setIsFetching(false);
    }, 2000);
  };
  useEffect(() => {
    setPage(2);
    dispatch(fetchAllMoviesAction(page));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    setPage(page + 1);
    fetchMoreListItems();
    // eslint-disable-next-line
  }, [isFetching]);

  useEffect(() => {
    setMovies([...movies, ...fetchedMovies]);
    // eslint-disable-next-line
  }, [fetchedMovies]);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) + 10 >
        document.documentElement.offsetHeight ||
      error404
    ) {
      return;
    }
    setIsFetching(true);
  };

  return (
    <div>
      {fetchedMovies && (
        <>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {error404 && (
            <div className="endofline">There are no more movies</div>
          )}
        </>
      )}
    </div>
  );
}

export default MoviePage;
