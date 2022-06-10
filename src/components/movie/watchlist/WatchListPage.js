import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromWatchListAction,
  fetchWatchListAction,
  toggleWatchedAction,
} from "../../../redux/Actions/movie";
import { selectWatchList } from "../../../redux/Selectors/movie";
import MovieCard from "../moviecard/MovieCard";
import "./WatchListPage.css";

function WatchListPage() {
  const dispatch = useDispatch();
  const watchlist = useSelector(selectWatchList);

  useEffect(() => {
    dispatch(fetchWatchListAction());
  }, []);

  const handleWatched = (id) => {
    dispatch(toggleWatchedAction(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteFromWatchListAction(id));
  };
  return (
    <div className="movie_container">
      {watchlist &&
        watchlist.map((item) => (
          <div key={item.movie.id} className="movie_item">
            <MovieCard movie={item.movie} />
            <button onClick={() => handleWatched(item.id)} className="btn">
              {item.watched ? "Unmark as watched" : "Mark as Watched"}
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => handleDelete(item.id)}
            >
              Remove from Watchlist
            </button>
          </div>
        ))}
    </div>
  );
}

export default WatchListPage;
