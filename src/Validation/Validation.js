import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const error = evt.target.validationMessage;
    const isValid = evt.target.closest('form').checkValidity();
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: error });
    setIsValid(isValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
export default useFormWithValidation;