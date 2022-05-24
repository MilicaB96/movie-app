import * as Yup from "yup";
import * as msg from "./messages";
import * as c from "./../../../constatns/auth";

const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email(msg.INVALID_EMAIL_ERROR_MESSAGE)
    .required(msg.REQUIRED_ERROR_MESSAGE),
  password: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .matches(c.PASSWORD_REGEX, msg.INVALID_PASSWORD_ERROR_MESSAGE),
});

export default LOGIN_SCHEMA