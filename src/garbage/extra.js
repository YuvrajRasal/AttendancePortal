import React from "react";
import Nav from "../Components/Nav";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./Class.css";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/app-context";

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import Chart from "../Components/Chart";

import { useState, useEffect } from "react";

const drawerWidth = 120;
const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 550,
  fontSize: "17px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Attendance = ({}) => {
  const [isTaken, setIsSubscribed] = useState(true);
  const [isNotTaken, setIsNotSubscribed] = useState(false);

  const handleChange = () => {
    setIsSubscribed((current) => !current);

    console.log(isTaken);
  };

  const handleChange2 = () => {
    setIsNotSubscribed((current) => !current);

    console.log(isNotTaken);
  };

  const handleSubmit = () => {
    sendPostRequest();
  };

  const axios = require("axios").default;

  const newPost = [
    {
      student: "60004210031",
      present: isTaken,
      lecture: 24,
    },
  ];

  const sendPostRequest = async () => {
    try {
      const resp = await axios.post(
        "http://attendanceportal.pythonanywhere.com/attendance/lecture-attendance/",
        newPost
      );
      console.log(newPost);
      console.log(resp);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  //   const url = 'http://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/';
  // const token = localStorage.getItem('accessToken');

  // axios.get(url, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  //   .then(response => {
  //     // handle the response data here
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     // handle the error here
  //     console.error(error);
  //   });

  const [MyData, SetMyData] = useState([]);
  const token = JSON.stringify(localStorage.getItem("accessToken"));
  console.log(token);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
    headers: {
      // 'Authorization': 'Bearer ${token}'
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMjg3MDMxLCJpYXQiOjE2ODMyMDA2MzEsImp0aSI6IjUyN2Q0MDhmZTE2NzQxNzg4ZjYwYTlkMWJiNDdlMjg2IiwidXNlcl9pZCI6MX0.Qy6jgZ6tzOMpGJAufucUpStVijwWRmVNjk2xm-SX1kc",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data.Lectures);
      SetMyData(response.data.Lectures);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(MyData);
  console.log(Array.isArray(MyData));
  // const myArray = Array.from(MyData);
  // console.log(Array.isArray(myArray))
  // console.log(myArray)

  return (
    <Box sx={{ display: "flex" }}>
      <Nav />

      <Box
        component="main"
        className="MainBox"
        sx={{
          flexGrow: 1,
          marginLeft: "15px",
          pr: 10,
          mt: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              SE COMPUTER ENGINEERING A3
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mt: 1,
                mb: 2,
              }}
            >
              Computer Networks
            </Typography>

            <Paper elevation={2}>
              {MyData.length == 0 ? (
                <div></div>
              ) : (
                MyData?.map((values) => (
                  <>
                    <Grid container sx={{ mb: 1 }}>
                      <Grid item xs={6} sx={{ ml: 1 }} lg={7} key={values.id}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold" }}
                          value={"60004210031"}
                        >
                          {values.batch.name}
                        </Typography>
                        <Typography variant="h6">{values.id}</Typography>
                      </Grid>
                      <Grid item lg={2} xs={0} md={0}></Grid>
                      <Grid item xs={2} lg={1.5}>
                        <Checkbox
                          {...label}
                          icon={<CheckCircleOutlineIcon fontSize="large" />}
                          checkedIcon={<CheckCircleIcon fontSize="large" />}
                          defaultChecked={false}
                          onChange={handleChange}
                          value={isTaken}
                        />
                      </Grid>
                      <Grid item xs={2} lg={1}>
                        <Checkbox
                          {...label}
                          icon={<CancelOutlinedIcon fontSize="large" />}
                          checkedIcon={<CancelIcon fontSize="large" />}
                          defaultChecked={false}
                          onChange={handleChange2}
                          value={isNotTaken}
                        />
                      </Grid>
                    </Grid>
                  </>
                ))
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={0} lg={2}></Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              className="buttonAttendance"
              sx={{ width: "10px", ml: "25%" }}
              onClick={handleSubmit}
            >
              <Typography style={txtStyle}>Submit</Typography>
            </Button>
            <Chart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Attendance;
