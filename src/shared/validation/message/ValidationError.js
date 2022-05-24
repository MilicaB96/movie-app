import React from "react";
import { ErrorMessage } from "formik";
function ValidationError(props) {
  return (
    <>
      <ErrorMessage className="error" {...props}>
        {(msg) => <div>{msg}</div>}
      </ErrorMessage>
    </>
  );
}

export default ValidationError;
