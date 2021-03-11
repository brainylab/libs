import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

const getValidationErrors = (err: ValidationError): IErrors => {
  const validationErrors: IErrors = {};

  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export { getValidationErrors };
