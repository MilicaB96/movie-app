import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loginUserAction } from "../../../redux/Actions/auth";
import { selectLoginError } from "../../../redux/Selectors/auth";
import ROUTES from "../../../shared/routes/routes";
import ValidationError from "../../../shared/validation/message/ValidationError";
import LOGIN_SCHEMA from "../../../shared/validation/yupValidation/login";
import "./LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState([]);
  const loginError = useSelector(selectLoginError);
  useEffect(() => {
    if (loginError) {
      setError(loginError);
      setTimeout(() => {
        setError([]);
      }, 3000);
    }
  }, [loginError]);
  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUserAction(values, history, resetForm));
  };
  return (
    <div className="login">
      <span>Don't have an account? </span>
      <Link className="link" to={ROUTES.REGISTER}>
        Register
      </Link>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <Field
              className="field"
              type="email"
              name="email"
              placeholder="email"
            />
            <ValidationError name="email"></ValidationError>
            <br />
            <Field
              className="field"
              type="password"
              name="password"
              placeholder="password"
            />
            <ValidationError name="password"></ValidationError>
            <br />
            {error["detail"] && <div>{error["detail"]}</div>}
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
