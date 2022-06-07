import React from "react";
import { useDispatch } from "react-redux";
import { toggleWatchListAction } from "../../../redux/Actions/movie";
import "./WatchListBtn.css";

function WatchListBtn({ movie }) {
  const dispatch = useDispatch();
  const handleToggleWatchlist = () => {
    dispatch(toggleWatchListAction(movie.id));
  };
  return (
    <div className="watchlist_btn_div">
      <button
        className="watchlist_btn"
        type="button"
        onClick={handleToggleWatchlist}
      >
        {movie.user_added_movie ? "Remove from watchlist" : "Add to watchlist"}
      </button>
    </div>
  );
}

export default WatchListBtn;
