import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/Actions/auth";
import { selectRegisterError } from "../../../redux/Selectors/auth";
import REGISTER_SCHEMA from "../../../shared/validation/yupValidation/register";
import "./RegisterPage.css";
import RegisterError from "../../../shared/validation/message/register";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectRegisterError);
  const history = useHistory();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      registerUserAction(
        { content: values, meta: { onSuccess: () => history.push("/login") } },
        { resetForm }
      )
    );
  };
  return (
    <div className="register">
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
            <RegisterError name="name" />
            <br />
            <Field
              className="field"
              type="email"
              name="email"
              placeholder="Email"
            />
            <RegisterError name="email" />
            {error["email"] && <div>{error["email"]}</div>}
            <br />
            <Field
              className="field"
              type="password"
              name="password"
              placeholder="Password"
            />
            <RegisterError name="password" />
            <br />
            <Field
              className="field"
              type="password"
              name="password_confirmation"
              placeholder="Confirm password"
            />
            <RegisterError name="password_confirmation" />
            <br />
            <button type="submit">Submit!</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
