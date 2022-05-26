import React from "react";
import Navbar from "../navbar/Navbar";
import PrivateRoute from "../../../shared/routes/routes/PrivateRoute";
import ROUTES from "../../../shared/routes/routes";
import CreateMoviePage from "../movie/CreateMoviePage";
import MoviePage from "../../listmovie/MoivePage";

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
      <PrivateRoute exact path={ROUTES.DASH} />
    </div>
  );
}

export default HomePage;
