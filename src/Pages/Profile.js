import React from "react";
import Nav from "../Components/Nav";
import Calendar from "react-calendar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Typography, Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CancelIcon from "@mui/icons-material/Cancel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddIcon from "@mui/icons-material/Add";

import "./Profile.css";

// import DummyNew from './DummyNew';
import DummyNew from "../Components/DummyNew";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LatestModal from "../Components/LatestModal";
import { useEffect } from "react";
import { useState } from "react";

import { data } from "../Data/DummyData";
import { useApp } from "../context/app-context";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const drawerWidth = 120;

const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  // fontWeight: 700,
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  // textAlign: "center",
  // color:"blue"
};

function Profile() {
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const navigate = useNavigate();
  //   const [data, setData] = useState([]);
  //getting posts

  const {
    search,
    selectedLecture,
    setSelectedLecture,
    filterData,
    setFilterData,
    setAll,
    all,

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
  } = useApp();

  const [superSearch, setSuperSearch] = useState("");
  console.log(superSearch);
  // const [search,setSearch] = useState('');
  // const [search,setSearch] = useState({});

  //IF we dont console log it keeps calling array even after we make chanes in modal
  // console.log(data);

  const [item, setItem] = useState(data);

  //previous code where we search through whole array
  {
    useEffect(() => {
      const newFilter = data.filter((data) => {
        return search === "" ? data : data?.subject?.includes(search);
      });
      setFilterData(newFilter);
    }, [search]);
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Box
        component="main"
        className="card"
        sx={{
          flexGrow: 1,
          mt: 0,
          width: "20rem",
          padding: "15px",
          position: "relative",
          top: "40px",
          marginLeft: "35px",
          marginRight: "60px",
        }}
      >
        <Toolbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            className="Name"
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: "2.5rem ",
              //   flex: "1",
            }}
          >
            Full Name
          </Typography>
          <Typography
            className="position"
            style={txtStyle}
            sx={{ fontWeight: 100, color: "#000000de", fontSize: "24px" }}
          >
            Assistant Professor {search}
          </Typography>
          {/* <Calendar/>*/}
        </div>

        {/* <Paper elevation={1}> */}
        {/* <Link to="/class"> */}

        {filterData.map((data) => (
          //   data.map((data) =>(

          <Card
            sx={{
              maxWidth: "100%",
              display: "flex",
              position: "relative",
              flexDirection: "row",
              justifyContent: "space-between",
              variant: "outlined",
              borderRadius: "10px",
              border: "2px solid #DEDEDE",
              boxShadow: "none",
              // margin: "0.8rem",
              marginTop: "0.8rem",
            }}
            className="Card"
            // onClick={()=>{navigate('/class')}}
          >
            <CardContent>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={txtStyle}
                  sx={{ fontWeight: 450, fontSize: "30px" }}
                  className="Heading"
                >
                  Subject : {data.subject}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "2px",
                }}
                className="Detail"
              >
                <Typography
                  variant="body2"
                  color="#000000ab"
                  fontSize={"17px"}
                  marginRight={"10px"}
                >
                  {data.startTime} - {data.endTime}
                </Typography>
                <Typography variant="body2" color="#000000ab" fontSize={"17px"}>
                  Room No.{data.room_number}
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ float: "right" }}>
              <Button
                size="40rem"
                onClick={() => {
                  //   setSelectedNews(data);
                  setSelectedLecture(data);
                  navigate(`/class/${data.id}`);
                  // console.log(data);
                }}
              >
                <ArrowCircleRightIcon
                  fontSize="large"
                  color="blue"
                  variant="filled"
                />
              </Button>
            </CardActions>
          </Card>
        ))}
        {/* </Link> */}
        {/* </Paper> */}
      </Box>
    </Box>
  );
}

export default Profile;
