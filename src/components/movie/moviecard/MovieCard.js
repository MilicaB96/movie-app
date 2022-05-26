import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../shared/routes/routes";
function MovieCard({ movie }) {
  return (
    <div className="movie">
      <h1>
        <Link className="link" to={`${ROUTES.MOVIE_LIST}/${movie.id}`}>
          {movie.title}
        </Link>
      </h1>
      <p>{movie.description.substring(0, 200)}...</p>
      <img src={movie.cover_image} alt="cover" />
      <hr />
    </div>
  );
}

export default MovieCard;
