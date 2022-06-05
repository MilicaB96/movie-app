import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { createCommentAction } from "../../redux/Actions/comment";

function CreateComment({ id, parent, show, setShow }) {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(createCommentAction(id, { ...values, parent }));
    resetForm();
    if (show) setShow(!show);
  };
  return (
    <div className='create'>
      <Formik initialValues={{ body: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field as='textarea' name='body' placeholder='Enter your reply' />
          <button className='create_btn' type='submit'>
            Reply
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateComment;
