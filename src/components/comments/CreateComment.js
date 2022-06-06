import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { createCommentAction } from "../../redux/Actions/comment";
import CREATE_COMMENT_SCHEMA from "../../shared/validation/yupValidation/createComment";
import ValidationError from "../../shared/validation/message/ValidationError";

function CreateComment({ id, show, setShow, parent = null }) {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(createCommentAction(id, { ...values, parent }));
    resetForm();
    if (show) setShow(!show);
  };
  return (
    <div className="create">
      <Formik
        initialValues={{ body: "" }}
        validationSchema={CREATE_COMMENT_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field as="textarea" name="body" placeholder="Enter your reply" />
          <button className="create_btn" type="submit">
            Reply
          </button>
          <ValidationError name="body" />
        </Form>
      </Formik>
    </div>
  );
}

export default CreateComment;
