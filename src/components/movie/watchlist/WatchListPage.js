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
    <div>
      {watchlist &&
        watchlist.map((item) => (
          <div key={item.movie.id}>
            <button
              onClick={() => handleWatched(item.id)}
              className="btn_watched"
            >
              {item.watched ? "Unmark as watched" : "Mark as Watched"}
            </button>
            <button
              type="button"
              className="btn_remove"
              onClick={() => handleDelete(item.id)}
            >
              Remove from Watchlist
            </button>
            <MovieCard movie={item.movie} />
          </div>
        ))}
    </div>
  );
}

export default WatchListPage;
