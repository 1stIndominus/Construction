import React, { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./form.scss";
import { postDataFromInputsToTelegram } from "../../apis/fetchData";
import { validationSchema } from "../../helpers/validationForm";
import { scrollHandler } from "../../helpers/scrollHandler";

export const FormWithFormik = () => {
  const inputForm = useRef(null);
  const textareaRef = useRef(null);

  const initialValues = {
    userName: "",
    email: "",
    question: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("values", values);
    postDataFromInputsToTelegram(values);
    resetForm();
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  };
  
  useEffect(() => {
    scrollHandler(inputForm);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid }) => (
        <Form className="coolinput__container" ref={inputForm}>
          <div class="coolinput">
            <label htmlFor="name" className="coolinput__text">
              Name
            </label>
            <Field
              type="text"
              id="inputField"
              placeholder="Type your Name"
              name="userName"
              className={
                touched.userName && errors.userName
                  ? "coolinput__input--error"
                  : "coolinput__input"
              }
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="coolinput__error"
            />
          </div>

          <div className="coolinput">
            <label htmlFor="email" className="coolinput__text">
              E-mail
            </label>
            <Field
              type="email"
              id="email"
              placeholder="Type your Email"
              name="email"
              className={
                touched.email && errors.email
                  ? "coolinput__input--error"
                  : "coolinput__input"
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="coolinput__error"
            />
          </div>

          <div className="coolinput">
            <label htmlFor="question" className="coolinput__text">
              Question
            </label>
            <Field
              innerRef={textareaRef} 
              component="textArea"
              placeholder="Type your Question"
              name="question"
              className={
                touched.question && errors.question
                  ? "coolinput__input--textarea-error"
                  : "coolinput__input--textarea"
              }
            />
            <ErrorMessage
              name="question"
              component="div"
              className="coolinput__error"
            />
          </div>
          <button
            type="submit"
            className={
              isValid
                ? "coolinput__submit--button"
                : "coolinput__submit--button-disabled"
            }
            disabled={!isValid}
          >
            <span className="coolinput__submit--button-text">Send</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};
