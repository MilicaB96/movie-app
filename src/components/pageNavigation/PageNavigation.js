import React from "react";
import { useSelector } from "react-redux";
import { selectIsNext, selectIsPrev } from "../../redux/Selectors/movie";

function PageNavigation({ setPage, page }) {
  const isPrev = useSelector(selectIsPrev);
  const isNext = useSelector(selectIsNext);
  const handleNext = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="navbuttons">
      {isPrev && (
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
      )}
      {isNext && (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}

export default PageNavigation;