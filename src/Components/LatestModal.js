import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import "./LatestModal.css";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import DatePicker from "react-date-picker";

// use context
import { useApp } from "../context/app-context";
import { Form } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "20px",
  transform: "translate(-50%, -50%)",
  //   width: 600,
  bgcolor: "background.paper",
  p: 4,
  width: "32rem",
  // height: '480px'
};
const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
const BoxStyle = {
  marginTop: "1rem",
};

function LatestModal() {
  // const [batch, setBatch] = React.useState("");
  // const [from, setFrom] = React.useState("");
  // const [to, setTo] = React.useState("");
  // const [freq, setFreq] = React.useState("");
  // const [room, setRoom] = React.useState("");
  // const [teacher, setTeacher] = React.useState("");
  // const [subject, setSubject] = React.useState("");
  // // const [startDate, setStartDate] = useState(new Date());
  // const [date, setDate] = React.useState("");

  const {
    batch,
    setBatch,
    from,
    setFrom,
    to,
    setTo,
    freq,
    setFreq,
    room,
    setRoom,
    teacher,
    setTeacher,
    subject,
    setSubject,
    date,
    setDate,
    lecCreated,
    setLecCreated,

    MyDataNew,
    SetMyDataNew,
    MyDataProfile,
    SetMyDataProfile,
    MyData,
    SetMyData,
  } = useApp();

  //////////////////////////////////////////////
  const ModalSubmit = (e) => {
    console.log(subject);
  };
  const handleChangeSub = (event) => {
    setSubject(event.target.value);
    console.log(subject);
  };
  const handleChangeBatch = (event) => {
    setBatch(event.target.value);
    console.log(batch);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
    console.log(date);
  };
  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
    console.log(from);
  };
  const handleChangeTo = (event) => {
    setTo(event.target.value);
    console.log(to);
  };
  const handleChangeTeacher = (event) => {
    setTeacher(event.target.value);
    console.log(teacher);
  };
  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
    console.log(room);
  };
  const handleChangeFreq = (event) => {
    setFreq(event.target.value);
    console.log(freq);
  };
  const funcLecCreated = (event) => {
    // setLecCreated(true);
    // console.log(lecCreated);
    console.log(batch);
    sendPostRequest();
    console.log("func Executed");
  };

  const axios = require("axios").default;

  const newPost = {
    // userId: 1,
    // title: "A new post",
    // body: "This is the body of the new post",
    room_number: room,
    startTime: from,
    endTime: to,
    date: date,
    note: freq,
    attendance_taken: true,
    teacher: teacher,
    batch: batch,
    subject: subject,
  };

  const sendPostRequest = async () => {
    try {
      // const resp = await axios.post(
      //   "https://jsonplaceholder.typicode.com/posts",
      //   newPost
      // );
      console.log(newPost);
      const resp = await axios.post(
        "http://attendanceportal.pythonanywhere.com/attendance/lecture/",
        newPost
      );
      console.log(newPost);
      console.log(resp);
      getData();
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const getData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
      headers: {
        // Authorization: "Bearer ${token}",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzNTI3OTA3LCJpYXQiOjE2ODM0NDE1MDcsImp0aSI6IjcwNDdlZTEyZGQ4NTRhODI4N2RlN2Y0ZGFiZWYwMjA3IiwidXNlcl9pZCI6MX0.E0K824FAm8Bh85x1NAvGbQctYmTMdzT3PULJdL370TA",
      },
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

  /*
    {
  "room_number": "1",
  "startTime": "12:12",
  "endTime": "12:25",
  "date": "2023-04-28",
  "note": "string",
  "attendance_taken": true,
  "teacher": 1,
  "batch": 0,
  "subject": 1
}
  const newPost = {
    userId: 1,
    title: 'A new post',
    body: 'This is the body of the new post'
};

const sendPostRequest = async () => {
    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
*/
  let items = [];
  for (let index = 0; index < MyDataNew.length; index++) {
    items.push(
      <MenuItem value={MyDataNew[index].id}>
        Batch {MyDataNew[index].name}
      </MenuItem>
    );
  }

  // let itemsSubject = [];
  // for (let index = 0; index < MyDataProfile.subjects.length; index++) {
  //   itemsSubject.push(
  //     <MenuItem value={MyDataProfile.subjects[index].id}>
  //       Batch {MyDataProfile.subjects[index].name}
  //     </MenuItem>
  //   );
  // }

  return (
    <>
      <div>
        <Box id="Box" sx={style}>
          <form onSubmit={ModalSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              style={BoxStyle}
            >
              <TextField
                className="SmlBtn"
                // id="From"
                label="Subject"
                variant="outlined"
                // value={subject}
                // defaultValue="car"
                onChange={handleChangeSub}
                sx={{
                  width: "13.562rem",
                  height: "50px",
                  background: "#FFFFFF",
                  borderRadius: " 10px",
                  // border: "2px solid #DEDEDE",
                  //   marginLeft: "10px",
                }}
              />
              {/* <TextField
                className="SmlBtn"
                // id="To"
                label="Batch."
                variant="outlined"
                value={batch}
                onChange={handleChangeBatch}
                sx={{
                  width: "13.562rem",
                  height: "50px",
                  background: "#FFFFFF",
                  borderRadius: " 10px",
                  // border: "2px solid #DEDEDE",
                  //   marginLeft: "10px",
                }}
              /> */}
              <FormControl>
                <InputLabel>Batch</InputLabel>
                <Select
                  className="SmlBtn"
                  labelId="From-id"
                  value={batch}
                  label="Batch"
                  onChange={handleChangeBatch}
                  sx={{
                    width: "13.562rem",
                    height: "50px",
                    background: "#FFFFFF",
                    padding: "28px",
                    // borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {/* failed for loop so made one before return and then pushed data */}
                  {/* for (let index = 0; index < MyDataNew.length; index++) {
                  <MenuItem value={8}>Batch C</MenuItem>
                  // <MenuItem value={9}>Batch A</MenuItem>
                  // <MenuItem value={10}>Batch A1</MenuItem>
                    
                  } */}
                  {items}
                </Select>
              </FormControl>
            </Box>
            <Box style={BoxStyle}>
              {/* <DemoContainer components={['DatePicker']}> */}
              {/* <DatePicker label="Basic date picker" /> */}
              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)}  /> */}
              <TextField
                fullWidth
                type="date"
                className="BigBtn"
                onChange={handleChangeDate}
              />
            </Box>
            <Box style={BoxStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                style={BoxStyle}
              >
                <TextField
                  className="SmlBtn"
                  type="time"
                  labelId="From-id"
                  id="FromId"
                  // value={from}
                  label="From"
                  // placeholder="11-11"
                  value={from}
                  // disabled={true}
                  onChange={handleChangeFrom}
                  sx={{
                    width: "13.562rem",
                    height: "50px",
                    background: "#FFFFFF",
                    borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                    //   marginLeft: "10px",
                  }}
                />
                <TextField
                  className="SmlBtn"
                  type="time"
                  labelId="To-id"
                  id="ToId"
                  // value={to}
                  // defaultValue="0000"
                  value={to}
                  label="To"
                  onChange={handleChangeTo}
                  sx={{
                    width: "13.562rem",
                    height: "50px",
                    background: "#FFFFFF",
                    borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                    //   marginLeft: "10px",
                  }}
                />
              </Box>
              {/* <Box sx={{  display:'flex' ,justifyContent:'space-between'}}> */}
              <Box
                sx={{
                  margin: "0",
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                style={BoxStyle}
              >
                <TextField
                  className="SmlBtn"
                  id="Tecaher"
                  label="Teacher"
                  variant="outlined"
                  value={teacher}
                  onChange={handleChangeTeacher}
                  sx={{
                    width: "13.562rem",
                    height: "50px",
                    background: "#FFFFFF",
                    borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                    //   marginLeft: "10px",
                  }}
                />
                <TextField
                  className="SmlBtn"
                  id="Room"
                  label="Room No."
                  variant="outlined"
                  value={room}
                  onChange={handleChangeRoom}
                  sx={{
                    width: "13.562rem",
                    height: "50px",
                    background: "#FFFFFF",
                    borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                    //   marginLeft: "10px",
                  }}
                />
              </Box>
              <Box style={BoxStyle}>
                <TextField
                  className="BigBtn"
                  labelId="freq-id"
                  id="freqId"
                  value={freq}
                  label="Note"
                  onChange={handleChangeFreq}
                  sx={{
                    width: "27.9rem",
                    height: "50px",
                    background: "#FFFFFF",
                    borderRadius: " 10px",
                    // border: "2px solid #DEDEDE",
                    //   marginLeft: "10px",
                  }}
                />
              </Box>
              <Box style={BoxStyle}>
                <Button
                  id="Create"
                  sx={{
                    width: "27.9rem",
                    height: "60px",
                    background: " #0056D2",
                    borderRadius: " 10px",
                    marginTop: "10px",
                  }}
                  onClick={funcLecCreated}
                >
                  <Typography style={txtStyle} sx={{ color: "#FFFFFF" }}>
                    Create Lecture
                  </Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </div>
    </>
  );
}

export default LatestModal;
