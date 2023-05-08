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
import { CSVLink } from "react-csv";

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
        "http://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
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

  const [MyDataNew, SetMyDataNew] = useState([]);

  // useEffect(() => {
  const token = JSON.parse(localStorage.getItem("accessToken"));
  console.log(token);
  // }, []);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://attendanceportal.pythonanywhere.com/attendance/teachers-batch/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        SetMyDataNew(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(MyDataNew);
  // console.log(Array.isArray(MyDataNew));

  // const myArray = Array.from(MyDataNew);
  // console.log(Array.isArray(myArray))
  // console.log(myArray)

  const headers = [
    { label: "Id", key: "id" },
    { label: "name", key: "name" },
    // {label:"name", key:"name"}
  ];

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

            {MyDataNew.length == 0 ? (
              <div>NO DATA</div>
            ) : (
              MyDataNew?.map((values) => (
                <>
                  <Paper elevation={2}>
                    <Grid container sx={{ mb: 1, mt: 1 }}>
                      <Grid item xs={6} sx={{ ml: 1 }} lg={7} key={values.id}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold" }}
                          value={"60004210031"}
                        >
                          {values.id}
                        </Typography>
                        <Typography variant="h6">{values.name}</Typography>
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
                  </Paper>
                </>
              ))
            )}
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
            {/* <CSVLink data={MyDataNew} headers={MyDataNew} filename="csvData">
              <Button
                className="buttonDownload"
                sx={{ width: "10px", ml: "25%" }}
              >
                <Typography style={txtStyle}>Download</Typography>
              </Button>
            </CSVLink> */}
            <Chart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Attendance;
