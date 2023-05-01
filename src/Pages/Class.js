import React from "react";
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
  const { selectedLecture, data } = useApp();

  const lecture = data.find((element) => element.id === selectedLecture.id);
  console.log(lecture.author);

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
              What do you want to edit?
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
                  One Lecture
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
                >
                  Schedule
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* ____________________________________________________________________*/}
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
              What do you want to Delete?
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
                >
                  One Lecture
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
                >
                  Schedule
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* ____________________________________________________________________*/}
      <Modal
        open={openScEdit}
        onClose={handleCloseScEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DummyNew/> */}
        <LatestModal />
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Class;
