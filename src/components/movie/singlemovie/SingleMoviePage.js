import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fecthMovieAction } from "../../../redux/Actions/movie";
import { selectMovie } from "../../../redux/Selectors/movie";
import LikeDislikeMovie from "../likedislikemovie/LikeDislikeMovie";
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
            <img src={movie.cover_image} alt="cover" />
            <h1>{movie.title}</h1>
            <h2>{movie.genre.name}</h2>
            <p>{movie.description}</p>
          </div>
          <div>
            <LikeDislikeMovie movie={movie} />
          </div>
        </div>
      )}
    </>
  );
}

export default SingleMoviePage;
