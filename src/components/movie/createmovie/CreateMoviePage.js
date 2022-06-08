/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import ValidationError from "../../../shared/validation/message/ValidationError";
import CREATE_MOVIE_SCHEMA from "../../../shared/validation/yupValidation/createMovie";
import { selectGenres } from "../../../redux/Selectors/genre";
import { fetchGenresAction } from "../../../redux/Actions/genre";
import { createMovieAction } from "../../../redux/Actions/movie";
import "./CreateMoviePage.css";

function CreateMoviePage() {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchGenresAction());
  }, []);
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("cover_image", values.cover_image);
    formData.append("genre", values.genre);
    dispatch(createMovieAction(formData, history));
  };
  return (
    <div className="create">
      <h1>Input your Movie</h1>
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
            cover_image: "",
            genre: "",
          }}
          validationSchema={CREATE_MOVIE_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="form">
              <Field
                className="field"
                type="text"
                name="title"
                placeholder="Enter movie title "
              />
              <ValidationError name="title" />
              <br />
              <Field
                className="field"
                type="text"
                name="description"
                placeholder="Enter description "
              />
              <ValidationError name="description" />
              <br />
              <input
                className="image"
                type="file"
                name="cover_image"
                onChange={(e) =>
                  setFieldValue("cover_image", e.target.files[0])
                }
              />
              <ValidationError name="cover_image" />
              <br />
              <p>Choose a genre</p>
              <Field as="select" className="select" name="genre">
                <option value={null}></option>
                {genres &&
                  genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
              </Field>
              <ValidationError name="genre" />
              <br />
              <button type="submit">Add</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateMoviePage;
