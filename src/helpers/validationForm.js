export const nameValidationField = (userName) => {
  const nameValidationRegexp = /^[a-zA-Z]{3,20}$/;
  const isNameIncludeDigit = /(\d)|([!~+-@#$%^&*])/ig;

  if (isNameIncludeDigit.test(userName)) {
    return 'Name does not have to include digit or symbol'
  } else if (userName.length < 3) {
    return 'Name is too short'
  } else {
    return 'Verified'
  } 
};

export const emailValidationField = (userEmail) => {
  const regexp = /^[a-zA-Z0-9_.-]+@[a-z0-9.]+\.[a-z]{2,12}$/g;

  if (userEmail.length < 6) {
    return 'Email is too chort'
  } if (regexp.test(userEmail.trim())) {
    return 'Verified'
  } else {
    return 'Email is not valid'
  } 
};

export const textAreaValidation = (text) => {
  if (text.length > 5 && text.length < 20) {
    return 'At least 20 symbols'
  } if (text.length >= 20) {
    return 'Verified'
  }
}