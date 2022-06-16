import React, { useState } from "react";
import ToggleSwitch from "../../toggleswitch/ToggleSwitch";
import "./MovieSearch.css";

function MovieSearch({ search, setSearch, elastic, setElastic }) {
  const [isElastic, setIsElastic] = useState(false);
  return (
    <div className="search_container">
      <input
        type="text"
        name="search"
        value={search}
        className={isElastic ? "hidden" : "search"}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <input
        type="text"
        name="elastic"
        value={elastic}
        className={isElastic ? "search" : "hidden"}
        onChange={(e) => setElastic(e.target.value)}
        placeholder="Elastic Search"
      />
      <div>
        <ToggleSwitch
          isElastic={isElastic}
          setIsElastic={setIsElastic}
          label="Elastic search"
        />
      </div>
    </div>
  );
}

export default MovieSearch;
