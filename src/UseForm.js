import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppProvider } from "./context/app-context";

const useForm = (callback, validate, page, SetMyData, MyData) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    DOB: "",
  });

  const navigate = useNavigate();

  //Setting the user in useState
  const [user, setUser] = useState();
  const [sap, setSap] = useState();

  const [loginStatus, setLoginStatus] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, page));
    setIsSubmitting(true);

    const sap_id = e.target.SapId.value;
    const password = e.target.password.value;

    // fetching data of home when we login
    // const { SetMyData, MyData } = useApp();

    //Fetching the refresh and access tokens from the backend
    axios
      .post("http://attendanceportal.pythonanywhere.com/accounts/login/", {
        sap_id,
        password,
      })
      .then((res) => {
        if (res.errors) {
          console.log(res.errors);
          setLoginStatus(false);
        } else {
          console.log("Login Success");
          navigate("/teacher");
          setLoginStatus(true);
          //console.log(res.config.data);
          setUser(res.config.data);
          console.log(user);
          setSap(sap_id);
          console.log(sap);
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.refresh)
          );
          localStorage.setItem("accessToken", JSON.stringify(res.data.access));
          localStorage.setItem("user", JSON.stringify(res.config.data));
          //localStorage.setItem('user', JSON.stringify(user));

          loadHomeData(SetMyData, MyData);
        }
      });
  };

  const token = JSON.parse(localStorage.getItem("accessToken"));
  console.log(token);

  const loadHomeData = (SetMyData, MyData) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      //   Authorization:
      //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMzc3Mjg4LCJpYXQiOjE2ODMyOTA4ODgsImp0aSI6IjZiMTQzMTE2YjJjMDRlNzBhNDA3ZGFiMDVmNDM4YjM2IiwidXNlcl9pZCI6MTF9.z0cUTQGB4MCNycsvQmJkFnhjQFml9qmWAoAwCPvetNc",
      // },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data.Lectures);
        SetMyData(response.data.Lectures);
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
