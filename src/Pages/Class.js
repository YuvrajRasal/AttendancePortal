import React, { useState } from "react";
import Nav from "../Components/Nav";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import "./Class.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/app-context";

import Modal from "@mui/material/Modal";
import LatestModal from "../Components/LatestModal";
import { useNavigate } from "react-router-dom";
import BatchModal from "../Components/BatchModal";
import EditModal from "../Components/EditModal";

import axios from "axios";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "300px",
  bgcolor: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  borderRadius: "10px",
};
const btnStyle = {
  // paddingLeft: "30px",
  // paddingRight: "30px",
  // paddingTop: "20px",
  // paddingBottom: "20px",
  // margin: "20px",
  alignItems: "center",
  justifyContent: "center",
};

const drawerWidth = 120;

const txtStyle = {
  //  fontFamily: 'Montserrat',
  // fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 550,
  fontSize: "17px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
const DownloadtxtStyle = {
  //  fontFamily: 'Montserrat',
  // fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 550,
  fontSize: "15px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
const modalTxtStyle = {
  //  fontFamily: 'Montserrat',
  // fontFamily: "sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  // fontSize: "25px",
  lineHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
};
const Class = ({}) => {
  const {
    selectedLecture,
    data,
    BatchData,
    SetBatchData,
    MyDataNew,
    SetMyDataNew,
    SetMyData,
    MyData,
    userToken,
  } = useApp();

  // SetBatchData(lecture.batch);

  // console.log(BatchData);

  // const lecture = data.find((element) => element.id === selectedLecture.id);

  let lecture = 0;
  if (selectedLecture.length == 0) {
    // lecture = localStorage.getItem("LectureLocalStorage");
    lecture = JSON.parse(localStorage.getItem("LectureLocalStorage"));
    // console.log(lecture);
  } else {
    lecture = selectedLecture;
    // console.log(selectedLecture);
  }

  SetBatchData(lecture.batch);
  //     console.log(lecture.batch);
  //     console.log(BatchData);

  //Bunch of console logs to check objects and state workings
  // useEffect(() => {
  //   return () => {
  //     SetBatchData(lecture.batch); //*******/
  //     console.log(lecture.batch);
  //     console.log(BatchData);
  //     console.log(MyDataNew);
  //     console.log(
  //       JSON.parse(localStorage.getItem("MyDataNewLocal")),
  //       "myDataNew"
  //     );
  //   };
  // }, []);

  //These logs were to check if correct batch value is getting set
  // console.log(BatchData);
  localStorage.setItem("BatchDataLocal", JSON.stringify(BatchData));
  // console.log(
  //   JSON.parse(localStorage.getItem("BatchDataLocal")),
  //   "BatchDataLocal"
  // );

  // console.log(lecture.id);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleScheduleEdit = () => {
    handleCloseEdit();
    handleOpenScEdit();
  };
  const [openScEdit, setOpenScEdit] = React.useState(false);
  const handleOpenScEdit = () => setOpenScEdit(true);
  const handleCloseScEdit = () => setOpenScEdit(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const [openBatchModal, setOpenBatchModal] = React.useState(false);
  const handleOpenBatchModal = () => setOpenBatchModal(true);
  const handleCloseBatchModal = () => setOpenBatchModal(false);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //-----------------------Reload-------------------------
  let token = 0;

  if (userToken.length == 0) {
    token = JSON.parse(localStorage.getItem("accessToken"));
  } else {
    token = JSON.parse(userToken);
  }
  useEffect(() => {
    return () => {
      console.log(userToken);
      console.log("hello");
    };
  }, []);
  //-----------------------Reload-------------------------
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/attendance/teachers-batch/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        SetMyDataNew(response.data);
        localStorage.setItem("MyDataNewLocal", JSON.stringify(response.data));
        // console.log(
        //   JSON.parse(localStorage.getItem("MyDataNewLocal")),
        //   "myDataNew"
        // );
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(MyDataNew);
    // console.log(Array.isArray(MyDataNew));
  }, []);

  const handleDownload = () => {
    const data = { lecture: lecture?.id }; // POST data (if required)
    const url =
      "https://attendanceportal.pythonanywhere.com/attendance/download-attendance/";
    setLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response, "Hello");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error downloading CSV file:", error);
        setLoading(false);
      });
  };

  const delete_data = () => {
    console.log("Delete");
    const deleteData = lecture?.id;
    console.log(deleteData);

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://attendanceportal.pythonanywhere.com/attendance/lecture/${deleteData}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: lecture,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // SetMyData(MyData.filter((item) => item.id !== deleteData));
        console.log(MyData);
      })
      // .then(console.log("success"))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate("/teacher");
      });
  };

  //To check data of csv
  // useEffect(() => {
  //   return () => {
  //     const data = { lecture: lecture?.id };
  //     let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'https://attendanceportal.pythonanywhere.com/attendance/download-attendance/',
  //     headers: { },
  //     data : data
  //   };

  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //       }
  // }, [])

  //Adding this componenet to check for view batch error
  const BatchDataTeacher = MyDataNew.find(
    (element) => element.id === BatchData.id
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="ModalUpperBox"
          >
            <Typography
              style={modalTxtStyle}
              sx={{ fontSize: "25px" }}
              className="font"
            >
              Are you sure you want to Edit ?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                border: "1px solid grey",
                flexBasis: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={btnStyle}
                display="flex"
                // onClick={handleOpenScEdit}
                onClick={handleScheduleEdit}
              >
                <Typography
                  style={modalTxtStyle}
                  sx={{ fontSize: "20px" }}
                  // sx={{
                  //   paddingLeft: "30px",
                  //   paddingRight: "30px",
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                  className="Btnfont"
                >
                  Yes
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                flexBasis: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={btnStyle} display="flex">
                <Typography
                  style={modalTxtStyle}
                  sx={{ fontSize: "20px" }}
                  // sx={{
                  //   paddingLeft: "30px",
                  //   paddingRight: "30px",
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                  className="Btnfont"
                  onClick={handleCloseEdit}
                >
                  No
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* ________________________*/}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
            id="ModalUpperBox"
          >
            <Typography
              style={modalTxtStyle}
              sx={{ fontSize: "25px" }}
              className="font"
            >
              Are you sure you want to delete ?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                border: "1px solid grey",
                flexBasis: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={btnStyle} display="flex" onClick={delete_data}>
                <Typography
                  style={modalTxtStyle}
                  sx={{ fontSize: "20px" }}
                  // sx={{
                  //   paddingLeft: "30px",
                  //   paddingRight: "30px",
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                  className="Btnfont"
                >
                  Yes
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                border: "1px solid grey",
                flexBasis: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={btnStyle}
                display="flex"
                onClick={handleCloseDelete}
                onClose={handleCloseDelete}
              >
                <Typography
                  style={modalTxtStyle}
                  sx={{ fontSize: "20px" }}
                  // sx={{
                  //   paddingLeft: "30px",
                  //   paddingRight: "30px",
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                  className="Btnfont"
                >
                  No
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* ________________________*/}
      <Modal
        open={openScEdit}
        onClose={handleCloseScEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DummyNew/> */}
        <EditModal />
      </Modal>
      <Modal
        open={openBatchModal}
        onClose={handleCloseBatchModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DummyNew/> */}
        <BatchModal BatchDataTeacher={BatchDataTeacher} />
      </Modal>
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
              Subject {lecture.subject.name}
            </Typography>
            {/* <Typography variant="h4" sx={{ mt: 2 }}>
              Teacher: {lecture.teacher}
            </Typography> */}
            <Typography variant="h5" sx={{ mt: 2 }}>
              Note: {lecture.note}
            </Typography>
          </Grid>
          <Grid Item xs={6} lg={2} md={6.5}>
            <Button
              className="buttonAttendance"
              sx={{ width: "10px" }}
              onClick={() => {
                navigate("/attendance");
              }}
            >
              <Typography style={txtStyle}>Take attedance</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} lg={12} md={6} sx={{ mt: 1.5 }}>
            <Grid sx={{ mb: 1 }}>
              <Button
                className="buttonAttendance"
                sx={{ width: "10px", ml: "1px" }}
                onClick={handleDownload}
              >
                <Typography style={DownloadtxtStyle}>
                  Download Attendance
                </Typography>
              </Button>
            </Grid>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Batch</Typography>
              <Button onClick={handleOpenBatchModal}>View Batch</Button>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {lecture.batch.name}
            </Typography>
            <Grid sx={{ mb: 2 }}>
              <Typography variant="h6">Semester</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.batch.semester}
              </Typography>
            </Grid>
            <Grid sx={{ mb: 2 }}>
              <Typography variant="h6">Lec Id</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {lecture.id}
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
                <Button
                  className="edit"
                  variant="outlined"
                  onClick={handleOpenEdit}
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={3.5} lg={1.2} md={2.5}>
                <Button
                  className="delete"
                  variant="outlined"
                  onClick={handleOpenDelete}
                >
                  Delete
                </Button>
              </Grid>{" "}
              {/* <Button
                className="buttonAttendance"
                sx={{ width: "10px", ml: "25%" }}
                onClick={handleDownload}
              >
                <Typography style={txtStyle}>Download </Typography>
              </Button> */}
              {/* <Grid Item xs={6} lg={1} md={6.5}>
            <Button
              className="buttonAttendance"
              sx={{ width: "10px", ml: "25%" }}
              onClick={handleDownload}
            >
              <Typography style={txtStyle}>Download </Typography>
            </Button>
          </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Class;
