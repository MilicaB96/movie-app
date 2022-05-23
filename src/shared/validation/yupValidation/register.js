import * as Yup from "yup";

const password_regex = /^(?=.{8,255})(?=.*[0-9])(?=.*[@#$!.?%^&+=]).*$/
const required_error_message = "Required"
const REGISTER_SCHEMA = Yup.object().shape({
    name: Yup.string().required(required_error_message).max(255, "First Name too long"),
    email: Yup.string().email("Invalid email format").required(required_error_message),
    password: Yup.string()
      .required(required_error_message)
      .matches(
        password_regex,
        "Password must be 8 characters long and have at least one number and special character"
      ),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  })

export default REGISTER_SCHEMA