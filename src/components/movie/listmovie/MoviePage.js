import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMoviesAction } from "../../../redux/Actions/movie";
import { selectMovies } from "../../../redux/Selectors/movie";
import PageNavigation from "../../pageNavigation/PageNavigation";
import MovieCard from "../moviecard/MovieCard";
import MovieFilter from "../moviefilter/MovieFilter";
import MovieSearch from "../moviesearch/MovieSearch";

function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    dispatch(fetchAllMoviesAction(page, search, genre));
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllMoviesAction(1, search, genre));
    }, 750);
    setPage(1);
    // eslint-disable-next-line
  }, [search]);
  useEffect(() => {
    dispatch(fetchAllMoviesAction(1, null, genre));
    setSearch("");
    // eslint-disable-next-line
  }, [genre]);

  return (
    <div>
      <MovieSearch search={search} setSearch={setSearch} />
      <MovieFilter genre={genre} setGenre={setGenre} />
      {movies && movies.length ? (
        <>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <PageNavigation setPage={setPage} page={page} />
        </>
      ) : (
        <p className="notfound">There are no movies here by that title</p>
      )}
    </div>
  );
}

export default MoviePage;
