import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../redux/Actions/auth";
import { selectRegisterError } from "../redux/Selectors/auth";

function RegisterPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectRegisterError);
  console.log(error);
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Required").max(255, "First Name too long"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short")
      .matches(
        /^(?=.{8,255})(?=.*[0-9])(?=.*[@#$!.?%^&+=]).*$/,
        "Password must have at least one number and special character"
      ),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <div>
      <h1>Register: </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(registerUserAction(values));
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field type='name' name='name' placeholder='First Name' />
            <ErrorMessage name='name'>{(msg) => <div>{msg}</div>}</ErrorMessage>
            <br />
            <Field type='email' name='email' placeholder='Email' />
            <ErrorMessage name='email'>
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            {error["email"] && <div>{error["email"]}</div>}
            <br />
            <Field type='password' name='password' placeholder='Password' />
            <ErrorMessage name='password'>
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            <br />
            <Field
              type='password'
              name='password_confirmation'
              placeholder='Confirm password'
            />
            <ErrorMessage name='password_confirmation'>
              {(msg) => <div>{msg}</div>}
            </ErrorMessage>
            <br />
            <button type='submit'>Submit!</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;
