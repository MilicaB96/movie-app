import React from "react";
import CreateComment from "../comments/CreateComment";
import "./Modal.css";

function Modal({ show, setShow, movieId, parent }) {
  return (
    <>
      {show && (
        <div className='modal'>
          <div className='modal_content'>
            <div className='modal_body'>
              <CreateComment
                show={show}
                setShow={setShow}
                id={movieId}
                parent={parent}
              />
            </div>
            <div className='modal_footer'>
              <button className='modal_btn' onClick={() => setShow(!show)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
