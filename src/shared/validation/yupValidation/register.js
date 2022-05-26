import * as Yup from "yup";
import * as msg from "./messages";
import * as c from "./../../../constatns/constatns";

const REGISTER_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .max(c.UPPER_CHARACTER_LIMIT, msg.NAME_LENGTH_ERROR_MESSAGE),
  email: Yup.string()
    .email(msg.INVALID_EMAIL_ERROR_MESSAGE)
    .required(msg.REQUIRED_ERROR_MESSAGE),
  password: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .matches(c.PASSWORD_REGEX, msg.INVALID_PASSWORD_ERROR_MESSAGE),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], msg.PASSWORD_CONFIRMATION_ERROR_MESSAGE)
    .required(msg.REQUIRED_ERROR_MESSAGE),
});

export default REGISTER_SCHEMA;
