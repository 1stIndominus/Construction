import { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import "./form.scss";
import { postDataFromInputsToTelegram } from "../../api/fetchData";
import { validationSchema } from "../../helpers/formValidation";
import { scrollHandler } from "../../helpers/scrollHandler";
import { FormValues } from "../../types/type";

export const FormWithFormik: React.FC = () => {
  const inputForm = useRef<HTMLFormElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const initialValues: FormValues = {
    userName: "",
    email: "",
    question: "",
  };

  const onSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const { userName, email, question } = values;
    const USER_DATA_MESSAGE = `UserName: ${userName}\nEmail: ${email}\nQuestion: ${question}`;

    postDataFromInputsToTelegram(USER_DATA_MESSAGE);
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
          <div className="coolinput">
            <label htmlFor="name" className="coolinput__text">
              Name
            </label>
            <Field
              type="text"
              id="inputField"
              placeholder="Name"
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
              placeholder="Email"
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
              placeholder="Question"
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
