import React from "react";
import Nav from "../Components/Nav";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import "./Class.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/app-context";
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
const Class = ({}) => {
  const { selectedLecture, data } = useApp();

  const lecture = data.find((element) => element.id === selectedLecture.id);
  console.log(lecture.author);
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
          <Grid item xs={12} lg={10} md={6}>
            <Typography variant="h3">
              {/* SE COMPUTER ENGINEERING -A3 */}
              Subject {lecture.subject}
            </Typography>
            {/* <Typography variant="h4" sx={{ mt: 2 }}>
              Teacher: {lecture.teacher}
            </Typography> */}
            <Typography variant="h5" sx={{ mt: 2 }}>
              Note: {lecture.note}
            </Typography>
          </Grid>
          <Grid Item xs={6} lg={2} md={6.5}>
            <Button className="buttonAttendance" sx={{ width: "10px" }}>
              <Typography style={txtStyle}>Take attedance</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} lg={12} md={6} sx={{ mt: 1.5 }}>
            <Typography variant="h6">Teacher</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {lecture.teacher}
            </Typography>
            <Grid sx={{ mb: 2 }}>
              <Typography variant="h6">Room No.</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.room_number}
              </Typography>
            </Grid>
            <Grid sx={{ mb: 2 }}>
              <Typography variant="h6">Timings</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.startTime} - {lecture.endTime}
              </Typography>
            </Grid>
            <Grid sx={{ mb: 2 }}>
              <Typography variant="h6">Date</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.date}
              </Typography>
            </Grid>
            <Grid sx={{ mb: 2 }}>
              {/* <Typography variant="h6">Note</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.note}
              </Typography> */}
            </Grid>
            <Grid container>
              <Grid item xs={3.5} lg={1.2} md={2.5}>
                <Button className="edit" variant="outlined">
                  Edit
                </Button>
              </Grid>
              <Grid item xs={3.5} lg={1.2} md={2.5}>
                <Button className="delete" variant="outlined">
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Class;
