import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../shared/routes/routes";
import LikeDislikeRatio from "../likedislikeratio/LikeDislikeRatio";
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
      <LikeDislikeRatio movie={movie} />
      <hr />
    </div>
  );
}

export default MovieCard;
