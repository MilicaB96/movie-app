import React from "react";
import Navbar from "../navbar/Navbar";
import PrivateRoute from "../../shared/routes/routes/PrivateRoute";
import ROUTES from "../../shared/routes/routes";
import CreateMoviePage from "../movie/createmovie/CreateMoviePage";
import MoviePage from "../movie/listmovie/MoivePage";

function HomePage() {
  return (
    <div>
      <Navbar />
      <PrivateRoute
        exact
        path={ROUTES.CREATE_MOVIE}
        component={CreateMoviePage}
      />
      <PrivateRoute exact path={ROUTES.MOVIE_LIST} component={MoviePage} />
    </div>
  );
}

export default HomePage;
