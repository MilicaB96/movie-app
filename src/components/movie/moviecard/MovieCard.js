import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../shared/routes/routes";
import LikeDislikeMovie from "../likedislikemovie/LikeDislikeMovie";
import SingleMovieViews from "../singlemovieviews/SingleMovieViews";
import MovieWatched from "../moviewatched/MovieWatched";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <h1>
        <Link className="link" to={`${ROUTES.MOVIE_LIST}/${movie.id}`}>
          {movie.title}
        </Link>
      </h1>
      <p className="overflow">{movie.description}</p>
      <img src={movie.cover_image} alt="cover" />
      <LikeDislikeMovie className="ratio" movie={movie} />
      {movie.user_watched && <MovieWatched />}
      <SingleMovieViews className="views" movie={movie} />
    </div>
  );
}

export default MovieCard;
