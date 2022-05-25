import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUserAction } from "../../../redux/Actions/auth";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logoutUserAction(history));
  };
  return (
    <nav>
      <button onClick={handleLogout} className="logout" type="submit">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
