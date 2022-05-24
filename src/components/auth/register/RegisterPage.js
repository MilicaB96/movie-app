import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/Actions/auth";
import REGISTER_SCHEMA from "../../../shared/validation/yupValidation/register";
import "./RegisterPage.css";
import ValidationError from "../../../shared/validation/message/ValidationError";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "../../../shared/routes/routes";
import { selectRegisterError } from "../../../redux/Selectors/auth";

function RegisterPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectRegisterError);
  const history = useHistory();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUserAction(values, history, resetForm));
  };
  return (
    <div className="register">
      <span>Alreay have an account? </span>
      <Link className="link" to={ROUTES.LOGIN}>
        Login
      </Link>
      <h1>Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={REGISTER_SCHEMA}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <Field
              className="field"
              type="name"
              name="name"
              placeholder="First Name"
            />
            <ValidationError name="name" />
            <br />
            <Field
              className="field"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError name="email" />
            {error["email"] && <div>{error["email"]}</div>}
            <br />
            <Field
              className="field"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ValidationError name="password" />
            <br />
            <Field
              className="field"
              type="password"
              name="password_confirmation"
              placeholder="Confirm password"
            />
            <ValidationError name="password_confirmation" />
            <br />
            <button type="submit">Submit!</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
