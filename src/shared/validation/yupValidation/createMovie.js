import * as Yup from "yup";
import * as msg from "./messages";
import * as c from "./../../../constatns/constatns";

const CREATE_MOVIE_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .max(c.UPPER_CHARACTER_LIMIT, msg.TITTLE_ERROR_MESSAGE),
  description: Yup.string()
    .required(msg.REQUIRED_ERROR_MESSAGE)
    .max(c.UPPER_CHARCTER_LIMIT_FOR_TEXT, msg.DESCRIPTION_ERROR_MESSAGE),
  cover_image: Yup.mixed().required(msg.REQUIRED_ERROR_MESSAGE),
  genre: Yup.number("Pls choose a genre").required(msg.REQUIRED_ERROR_MESSAGE),
});

export default CREATE_MOVIE_SCHEMA;
