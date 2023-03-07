import { useState, useEffect } from 'react';

const useForm = (callback, validate, page) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    gender:'',
    DOB:''
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

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values, page));
    setIsSubmitting(true);
  
    
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