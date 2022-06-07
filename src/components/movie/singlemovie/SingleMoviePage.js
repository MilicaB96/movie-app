import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fecthMovieAction } from "../../../redux/Actions/movie";
import { selectMovie } from "../../../redux/Selectors/movie";
import Comments from "../../comments/Comments";
import LikeDislikeMovie from "../likedislikemovie/LikeDislikeMovie";
import MovieWatched from "../moviewatched/MovieWatched";
import SingleMovieViews from "../singlemovieviews/SingleMovieViews";
import WatchListBtn from "../watchlistbutton/WatchListBtn";
import "./SingleMoviePage.css";

function SingleMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    dispatch(fecthMovieAction(id));
  }, []);

  return (
    <>
      {movie && (
        <div>
          <div className="single_movie">
            <div>
              <WatchListBtn movie={movie} />
            </div>
            <img src={movie.cover_image} alt="cover" />
            <h1>{movie.title}</h1>
            <h2>{movie.genre.name}</h2>
            <p>{movie.description}</p>
            <br />
            {movie.user_watched && <MovieWatched />}
            <SingleMovieViews movie={movie} />
            <LikeDislikeMovie movie={movie} />
          </div>
        </div>
      )}
      <Comments id={id} />
    </>
  );
}

export default SingleMoviePage;
