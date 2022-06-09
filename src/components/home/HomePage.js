import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PrivateRoute from "../../shared/routes/routes/PrivateRoute";
import ROUTES from "../../shared/routes/routes";
import CreateMoviePage from "../movie/createmovie/CreateMoviePage";
import MoviePage from "../movie/listmovie/MoviePage";
import SingleMoviePage from "../movie/singlemovie/SingleMoviePage";
import WatchListPage from "../movie/watchlist/WatchListPage";
import { Route } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Route
        exact
        path={ROUTES.DASHBOARD}
        render={() => <Redirect to={ROUTES.MOVIE_LIST} />}
      />
      <PrivateRoute
        exact
        path={ROUTES.CREATE_MOVIE}
        component={CreateMoviePage}
      />
      <PrivateRoute exact path={ROUTES.MOVIE_LIST} component={MoviePage} />
      <PrivateRoute
        exact
        path={ROUTES.SINGLE_MOVIE}
        component={SingleMoviePage}
      />
      <PrivateRoute exact path={ROUTES.WATCH_LIST} component={WatchListPage} />
    </div>
  );
}

export default HomePage;
