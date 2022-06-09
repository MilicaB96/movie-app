import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMoviesAction,
  fetchPopularMoviesAction,
} from "../../../redux/Actions/movie";
import {
  selectMovies,
  selectPopularMovies,
} from "../../../redux/Selectors/movie";
import PageNavigation from "../../pageNavigation/PageNavigation";
import Sidebar from "../../sidebar/Sidebar";
import MovieCard from "../moviecard/MovieCard";
import MovieFilter from "../moviefilter/MovieFilter";
import MovieSearch from "../moviesearch/MovieSearch";
import WatchListBtn from "../watchlistbutton/WatchListBtn";

function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(null);
  const popularMovies = useSelector(selectPopularMovies);
  useEffect(() => {
    dispatch(fetchPopularMoviesAction());
  }, []);

  useEffect(() => {
    dispatch(fetchAllMoviesAction(page, search, genre));
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllMoviesAction(1, search, genre));
    }, 750);
    setPage(1);
  }, [search]);

  useEffect(() => {
    dispatch(fetchAllMoviesAction(1, null, genre));
    setSearch("");
  }, [genre]);
  return (
    <div>
      <MovieSearch search={search} setSearch={setSearch} />
      <MovieFilter genre={genre} setGenre={setGenre} />
      <div className="container">
        <Sidebar movies={popularMovies} />
        {movies && movies.length ? (
          <div>
            <div className="movie_container">
              {movies.map((movie) => (
                <div className="movie_item" key={movie.id}>
                  <MovieCard key={movie.id} movie={movie} />
                  <WatchListBtn movie={movie} />
                </div>
              ))}
            </div>
            <PageNavigation setPage={setPage} page={page} />
          </div>
        ) : (
          <p className="movie_notfound">
            There are no movies here by that title
          </p>
        )}
      </div>
    </div>
  );
}

export default MoviePage;
