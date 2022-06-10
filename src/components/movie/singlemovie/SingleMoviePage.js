import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fecthMovieAction,
  fetchRelatedMoviesAction,
} from "../../../redux/Actions/movie";
import {
  selectMovie,
  selectRelatedMovies,
} from "../../../redux/Selectors/movie";
import Comments from "../../comments/Comments";
import Sidebar from "../../sidebar/Sidebar";
import LikeDislikeMovie from "../likedislikemovie/LikeDislikeMovie";
import MovieWatched from "../moviewatched/MovieWatched";
import SingleMovieViews from "../singlemovieviews/SingleMovieViews";
import WatchListBtn from "../watchlistbutton/WatchListBtn";
import "./SingleMoviePage.css";

function SingleMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const relatedMovies = useSelector(selectRelatedMovies);

  useEffect(() => {
    dispatch(fecthMovieAction(id));
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (movie != null) {
      dispatch(fetchRelatedMoviesAction(movie.genre.id));
    }
  }, [movie]);

  return (
    <div className="page_container content">
      {movie && (
        <div className="container">
          <Sidebar movies={relatedMovies} title={"Related Movies"} />
          <div className="single_movie">
            <div className="single_movie_header">
              <h1>{movie.title}</h1>
              <h2>{movie.genre.name}</h2>
            </div>
            <img src={movie.cover_image} alt="cover" />
            <div className="single_movie_right">
              <p>{movie.description}</p>
              <div>{movie.user_watched && <MovieWatched />}</div>
              <SingleMovieViews movie={movie} />
              <LikeDislikeMovie movie={movie} />
              <WatchListBtn movie={movie} />
            </div>
          </div>
        </div>
      )}
      <Comments id={id} />
    </div>
  );
}

export default SingleMoviePage;
