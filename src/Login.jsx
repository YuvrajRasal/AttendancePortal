import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "./UseForm";
import validateInfo from "./validateInfo";
import library from "./images/library.PNG";
import logo from "./images/djLogo.PNG";
import { createTheme } from "@mui/material/styles";
import "./Login.css";

//
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const paperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15px",
  marginBottom: "15px",
  width: "60rem",
  // width: "100%",
  // maxWidth:"80%",
  padding: "35px",
};

const avatarStyle = { backgroundColor: "lightBlue" };
//

function Login() {
  //functions for form validation
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo,
    "login"
  );
  //
  return (
    <>
      <Box
      className="OuterMostBox"
        style={{ display: "flex" }}
        sx={{
          // backgroundColor: "#1589FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
        className="FirstBox"
          sx={{
            width: "40vw",
            height: "100vh",
            backgroundColor: "#0055d2",
          }}
        />
        <Box
        className="SecondBox"
          sx={{
            width: "60vw",
            height: "100vh",
            backgroundColor: "#E9EBEB",
          }}
        />
        <Grid
          className="innerPaper"
          alignItems="center"
          justify="center"
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "80%",
          }}
        >
          <Paper
            elevation={10}
            style={paperStyle}
            alignItems="center"
            className="Paper"
          >
            <Grid fluidContainer spacing={2} className="lrGrid">
              {/* left side starts */}
              <Grid item xs={5.5} sx={{ padding: "20px" }} className="leftGrid">
                {/* ----inserted padding */}
                <Box className="box">
                  <img
                  className="libraryImage"
                    src={logo}
                    style={{
                      width: "32%",
                      objectFit: "cover",
                      borderRadius: "60px",
                      padding: "1rem",
                      boxSizing: "border-box",
                    }}
                  ></img>
                  <Typography sx={{ fontWeight: 400, fontSize: "2.5rem" }}>
                    Welcome Back.
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid align="center">
                      {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
                    </Grid>
                    <Box mb={1} mt={4}>
                      <Box mb={1}>
                        <Typography
                        className="SapIdTypo"
                          sx={{
                            postition: "relative",
                            display: "flex",
                            marginLeft: "10%",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          {/* <strong>Sap Id :</strong> */}
                          Sap Id:
                        </Typography>
                        <TextField
                        className="SapIdTF"
                          variant="outlined"
                          //  label='Sap Id'
                          autoComplete="Sap Id"
                          autoFocus
                          placeholder="Sap Id"
                          // fullWidth required     -----previous code
                          sx={{ width: "80%" }}
                          width="80%"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <Typography
                            color="#bcbcbc"
                            sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                          >
                            {errors.username}
                          </Typography>
                        )}
                      </Box>

                      <Box mb={2}>
                        <Typography
                        className="PasswordTypo"
                          sx={{
                            postition: "relative",
                            display: "flex",
                            marginLeft: "10%",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          {/* <strong>Password :</strong> */}
                          Password:
                        </Typography>
                        {/* <box sx={{width:'65%'}} display="flex"> */}
                        <TextField
                        className="PasswordTF"
                          variant="outlined"
                          type="Password"
                          placeholder="Password"
                          // label='Password'
                          autoComplete="password"
                          //  fullWidth required     -----previous code
                          sx={{ width: "80%" }}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                        <div sx={{ display: "flex", flexDirection: "row" }}>
                          {errors.password && (
                            <Typography
                              color="#bcbcbc"
                              sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                            >
                              invalid password
                            </Typography>
                          )}

                          <Link to="/" sx={{ color: "#0055d2" }}>
                            <strong>forgot password ?</strong>
                          </Link>
                        </div>
                        {/* </box> */}

                        {/* <Typography mb={2} mt={4}> 
        <Link to='/'>forgot password?</Link>   -----previous code
      </Typography> */}
                      </Box>
                    </Box>
                    <Box mb={2}>
                      <Button
                      className="LoginBtn"
                        type="submit"
                        variant="contained"
                        sx={{ width: "80%" }}
                      >
                        <Typography className="LoginBtnTypo" sx={{fontSize:'20px', fontFamily:'Roboto'}}>Login</Typography>
                      </Button>
                    </Box>

                    <Typography className="SignUp">
                      Are you a faculty?
                      <Link to="/" sx={{ color: "#0055d2" }}>
                        <strong>Signup</strong>
                      </Link>
                    </Typography>
                    {/* </Container> */}
                  </form>
                </Box>
              </Grid>
              {/* left side ends */}
              {/* right side starts */}
              <Grid
                item
                xs={6.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="rightGrid"
              >
                <img
                  src={library}
                  style={{
                    maxWidth: "90%",
                    width: "30rem",
                    objectFit: "cover",
                    borderRadius: "40px",
                    padding: "1rem",
                    boxSizing: "border-box",
                  }}
                ></img>
              </Grid>
              {/* right side ends */}
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
