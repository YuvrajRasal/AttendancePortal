import axios from 'axios';
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

  //Setting the user in useState
  const [user, setUser] = useState();

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

    const sap_id = e.target.username.value
    const password = e.target.password.value

    //Fetching the refresh and access tokens from the backend
    axios.post("http://attendanceportal.pythonanywhere.com/accounts/login/",{
      sap_id, password
    })
    .then(res => {
      console.log(res.data);
      setUser(res.data)
      //Setting the tokens in localStorage
      localStorage.setItem('user', res.data);
    });
  
    
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