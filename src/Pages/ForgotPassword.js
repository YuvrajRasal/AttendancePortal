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
import useForm from "../UseForm";
import validateInfo from "../garbage/validateInfo";
import library from "../images/library.PNG";
import logo from "../images/djLogo.PNG";
import { createTheme } from "@mui/material/styles";
import "../Login.css";
import validateInfoNew from "../Validation";
import fullStop from "../images/blueFullstop.png";

import { useNavigate } from "react-router-dom";

//
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const paperStyle = {
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15px",
  marginBottom: "15px",
  width: "60rem",

  padding: "35px",
};

const avatarStyle = { backgroundColor: "lightBlue" };
//

function ForgotPassword() {
  //functions for form validation
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfoNew,
    "login"
  );

  const navigate = useNavigate();

  //

  const bull = (
    <Box component="span" sx={{ color: "#0056D2", fontSize: "40px" }}>
      ․
    </Box>
  );

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
            // backgroundColor: "#0055d2",
            backgroundColor: "#0056D2",
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
                    className="logoImage"
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
                    Forgot Password<>{bull}</>
                    {/* Welcome Back */}
                    {/* <><img src={fullStop}/></> */}
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid align="center">
                      {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
                    </Grid>
                    <Box mb={1} mt={4}>
                      <Box mb={1}>
                        <TextField
                          className="SapIdTF"
                          variant="outlined"
                          label="email"
                          autoComplete="email"
                          autoFocus
                          fullWidth
                          required
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="...@gmail.com"
                          sx={{ width: "100%" }}
                          width="80%"
                        />
                        {errors.email && (
                          <Typography
                            color="#bcbcbc"
                            sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                          >
                            {errors.email}
                          </Typography>
                        )}
                      </Box>
                      <Box mb={2.5}></Box>
                    </Box>
                    <Box mb={5}>
                      <Button
                        className="LoginBtn"
                        type="submit"
                        variant="contained"
                        sx={{
                          width: "100%",
                          backgroundColor: "#0056D2",
                          "&:hover": {
                            backgroundColor: "white",
                            color: "#0056D2",
                            boxShadow: 5,
                          },
                        }}
                      >
                        <Typography
                          className="SubmitBtnTypo"
                          sx={{ fontSize: "20px", fontFamily: "Roboto:ital" }}
                        >
                          Submit
                        </Typography>
                      </Button>
                    </Box>
                    <Typography sx={{ fontSize: "18px" }}>
                      Want to go back?
                      <span
                        id="BackToLogin"
                        sx={{ color: "#0056D2" }}
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Login
                      </span>
                    </Typography>
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
                  onClick={() => {
                    navigate("/teacher");
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

export default ForgotPassword;
