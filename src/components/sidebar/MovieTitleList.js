import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../shared/routes/routes";

function MovieTitleList({ title, id }) {
  return (
    <div>
      <Link className="link" to={`${ROUTES.MOVIE_LIST}/${id}`}>
        <h1 className="sidebar_item">{title}</h1>
      </Link>
    </div>
  );
}

export default MovieTitleList;
