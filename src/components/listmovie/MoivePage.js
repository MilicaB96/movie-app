import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllMoviesAction } from "../../redux/Actions/movie";
import { selectMovies } from "../../redux/Selectors/movie";
import ROUTES from "../../shared/routes/routes";
import "./MoviePage.css";
function MoviePage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchAllMoviesAction());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {movies &&
        movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <h1>
              <Link className="link" to={`${ROUTES.MOVIE_LIST}/${movie.id}`}>
                {movie.title}
              </Link>
            </h1>
            <p>{movie.description.substring(0, 200)}...</p>
            <img src={movie.cover_image} alt="cover" />
            <hr />
          </div>
        ))}
    </div>
  );
}

export default MoviePage;
