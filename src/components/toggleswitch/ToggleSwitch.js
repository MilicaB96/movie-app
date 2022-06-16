import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, isElastic, setIsElastic }) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          onChange={() => setIsElastic(!isElastic)}
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <p> {label}</p>
    </div>
  );
};

export default ToggleSwitch;
