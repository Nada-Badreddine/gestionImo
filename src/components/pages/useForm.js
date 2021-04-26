import { useState, useEffect } from 'react';
import { createClient } from '../../services/clientsServices';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors(validate(values));
    console.log("values", values)
    setIsSubmitting(true);
    //backend
    const { password, email, username } = values
     await createClient( { password, email, username })
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;