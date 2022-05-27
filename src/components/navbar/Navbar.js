import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logoutUserAction } from "../../redux/Actions/auth";
import "./Navbar.css";
import ROUTES from "../../shared/routes/routes";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logoutUserAction(history));
  };
  return (
    <nav>
      <Link className="link" to={ROUTES.MOVIE_LIST}>
        Movies
      </Link>
      <Link className="link" to={ROUTES.CREATE_MOVIE}>
        Add Movie
      </Link>
      <button onClick={handleLogout} className="logout" type="submit">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
