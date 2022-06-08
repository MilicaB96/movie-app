import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoviesAction } from "../../redux/Actions/movie";
import { selectPopularMovies } from "../../redux/Selectors/movie";
import ROUTES from "../../shared/routes/routes";

function Sidebar() {
  const dispatch = useDispatch();
  const movies = useSelector(selectPopularMovies);
  useEffect(() => {
    dispatch(fetchPopularMoviesAction());
  }, []);
  return (
    <div className="sidebar">
      {movies &&
        movies.map((movie) => (
          <div>
            <Link className="link" to={`${ROUTES.MOVIE_LIST}/${movie.id}`}>
              <h1>{movie.title}</h1>
            </Link>
            <hr className="shorter_hr" />
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
