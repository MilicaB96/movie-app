import React from "react";
import { ErrorMessage } from "formik";
function RegisterError(props) {
  return (
    <>
      <ErrorMessage className="error" {...props}>
        {(msg) => <div>{msg}</div>}
      </ErrorMessage>
    </>
  );
}

export default RegisterError;
