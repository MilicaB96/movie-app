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
  }, [id]);

  useEffect(() => {
    if (movie != null) {
      dispatch(fetchRelatedMoviesAction(movie.genre.id));
    }
  }, [movie]);

  return (
    <div>
      {movie && (
        <div className="container">
          <Sidebar movies={relatedMovies} />
          <div className="single_movie">
            <div>
              <h1>{movie.title}</h1>
              <h2>{movie.genre.name}</h2>
              {movie.user_watched && <MovieWatched />}
            </div>
            <img src={movie.cover_image} alt="cover" />
            <div>
              <p>{movie.description}</p>
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
