import * as Yup from "yup";
import * as msg from "./messages";
import * as c from "../../../constatns/constatns";

const CREATE_COMMENT_SCHEMA = Yup.object().shape({
  body: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .max(c.UPPER_CHARACTER_LIMIT_FOR_COMMENT, msg.COMMENT_ERROR_MESSAGE),
});

export default CREATE_COMMENT_SCHEMA;
