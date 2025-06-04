import * as Yup from "yup";
import { ErrorMessages } from "../constants";

export const nameValidationField = (userName: string) => {
  const isNameIncludeDigit = /(\d)|([!~+-@#$%^&*])/gi;

  if (isNameIncludeDigit.test(userName)) {
    return "Name does not have to include digit or symbol";
  } else if (userName.length < 3) {
    return "Name is too short";
  } else {
    return ErrorMessages.VERIFIED;
  }
};

export const emailValidationField = (userEmail: string) => {
  const regexp = /^[a-zA-Z0-9_.-]+@[a-z0-9.]+\.[a-z]{2,12}$/g;

  if (userEmail.length < 6) {
    return "Email is too chort";
  }
  if (regexp.test(userEmail.trim())) {
    return ErrorMessages.VERIFIED;
  } else {
    return "Email is not valid";
  }
};

export const textAreaValidation = (text: string) => {
  if (!text.length) {
    return "Write your Question";
  } else if (text.length > 5 && text.length < 20) {
    return "At least 20 symbols";
  }
  if (text.length >= 20) {
    return ErrorMessages.VERIFIED;
  }
};

const isNameIncludeDigit = /^[a-zA-Z\s]*$/;

export const validationSchema = Yup.object({
  userName: Yup.string()
    .matches(
      isNameIncludeDigit,
      "Name does not have to include digit or symbol"
    )
    .min(3, "Name is too short")
    .required("Field is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Field is Required"),
  question: Yup.string()
    .min(20, "At least 20 symbols")
    .required("Field is Required"),
});
