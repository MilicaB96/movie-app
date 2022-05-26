import React from "react";
import Navbar from "../navbar/Navbar";
import PrivateRoute from "../../../shared/routes/routes/PrivateRoute";
import ROUTES from "../../../shared/routes/routes";
import CreateMoviePage from "../movie/CreateMoviePage";

function HomePage() {
  return (
    <div>
      <Navbar />
      <PrivateRoute
        exact
        path={ROUTES.CREATE_MOVIE}
        component={CreateMoviePage}
      />
    </div>
  );
}

export default HomePage;
