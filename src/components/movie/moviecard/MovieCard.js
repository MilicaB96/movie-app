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
      <div className="movie_content">
        <div className="movie_image_container">
          <img src={movie.thumbnail} alt="cover" />
        </div>
        <div className="movie_description_container">
          <p className="overflow">{movie.description}</p>
        </div>
      </div>
      <hr />
      <div className="movie_settings">
        <LikeDislikeMovie className="ratio" movie={movie} />
        {movie.user_watched && <MovieWatched />}
      </div>
      <SingleMovieViews className="views" movie={movie} />
    </div>
  );
}

export default MovieCard;
