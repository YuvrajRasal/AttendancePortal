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

import "./Teacher.css";

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

const drawerWidth = 120;

const txtStyle = {
  //  fontFamily: 'Montserrat',
  fontFamily: "sans-serif",
  fontStyle: "normal",
  // fontWeight: 700,
  fontSize: "30px",
  lineHeight: "35px",
  display: "flex",
  alignItems: "center",
  // textAlign: "center",
  // color:"blue"
};

const TeacherNewData = () => {
  const current = new Date();
  const currentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [alignment, setAlignment] = React.useState("Upcoming");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  //To see all lectures
  useEffect(() => {
    const newItemAll = data.filter((data) => {
      return all === true ? data : data[0];
    });
    setFilterData(newItemAll);
  }, [all]);

  //upcoming lec taken attendance is false
  const filterItem1 = () => {
    const newItem1 = data.filter((data) => {
      return data.attendance_taken === false ? data : data[0];
      // return data.attendance_taken === false ? data : data[0];doubt about part after :
      // if part one is getting accepted why does the answer change when i change part 2
      // try using data[0] , data , data.attendance_taken
    });
    // setItem(newItem);
    setFilterData(newItem1);
  };

  //completed lec taken attendance is true
  const filterItem2 = () => {
    const newItem2 = data.filter((data) => {
      return data.attendance_taken === true ? data : data.attendance_taken;
      // return data.attendance_taken === true ? data : data.attendance_taken; doubt about part after :
      // is part one getting accepted
    });
    // setItem(newItem);
    setFilterData(newItem2);
  };

  //new code where we search through updated array through toggle buttons
  //PROBLEM WITH THIS IS IF WE TYPE SOMETHING NOT PRESENT IN ARRAY IT WONT DISPLAY BACK THE FULL ARRAY
  //WHEN WE BACKSPACE *******
  //CLICK ON THE BUTTONS AGAIN TO SEE COMPLETED OR UPCOMING ARRAY
  useEffect(() => {
    const newFilter = filterData.filter((filterData) => {
      return search === "" ? filterData : filterData?.subject?.includes(search);
    });
    setFilterData(newFilter);
  }, [search]);

  //previous code where we search through whole array
  {
    /*
  useEffect(() => {
    const newFilter = data.filter((data) => {
      return search === "" ? data : data?.subject?.includes(search);
    });
    setFilterData(newFilter);
  }, [search]);
  */
  }
  //func to display whole arrray
  // useEffect(() => {
  //   const newFilterAll = data.filter((data) => {
  //     return all === true ? data : data[0];
  //   });
  //   setFilterData(newFilterAll);
  // });

  // POST FUNC THRO CREATEDLEC IN MODAL
  /*
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
  return (
    // <Box
    // component="main"
    // sx={{ flexGrow: 1, pl: '10%',pr:'10%', width: '100%'}}>
    <Box sx={{ display: "flex" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <DummyNew/> */}
        <LatestModal />
      </Modal>

      {/* <Nav setSearch={superSearch =>setSuperSearch(superSearch)}/> */}
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
        <Box sx={{ display: "flex", flexDirection: "row", flex: "1" }}>
          <Box sx={{ display: "flex", flexDirection: "row", flex: "1" }}>
            <ToggleButtonGroup
              display="flex"
              color="primary"
              // class="btn btn-primary btn-lg active"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{ top: "60", marginBottom: "27px", color: "#0056D2" }}
              flex="1"
            >
              <ToggleButton
                value="Upcoming"
                className="button"
                onClick={() => filterItem1(data.attendance_taken)}
              >
                Upcoming
              </ToggleButton>

              <ToggleButton
                value="Completed"
                className="button"
                onClick={() => filterItem2(data.attendance_taken)}
              >
                Completed
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          {/* <Box sx={{alignItems: "center",justifyContent:"center",margin:"0.6rem"}}>
            <Button onClick={handleOpen}>
            <AddIcon></AddIcon>
            </Button>
          </Box> */}
          <Box>
            <ListItemButton
              onClick={handleOpen}
              sx={{
                boxShadow: 2,
                borderRadius: "0.5em",
                // justifyContent:"right"
              }}
            >
              <AddOutlinedIcon fontSize="large" />
            </ListItemButton>
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
          }}
        >
          <Typography
            className="currentDate"
            style={txtStyle}
            sx={{ fontWeight: 700, color: "#0056D2" }}
          >
            {currentDate}
          </Typography>
          <Typography
            className="currentDate"
            style={txtStyle}
            sx={{ fontWeight: 100, color: "#0056d2cf" }}
          >
            &nbsp;
            {/* Today */}
            {/* {search} */}
            {search}
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
            onClick={() => {
              //   setSelectedNews(data);
              setSelectedLecture(data);
              navigate(`/class/${data.id}`);
              // console.log(data);
            }}
          >
            <CardContent>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={txtStyle}
                  sx={{ fontWeight: 450 }}
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
              <Button size="40rem">
                {/* <CancelIcon fontSize="large" color="blue" variant="filled" /> */}
              </Button>
            </CardActions>
          </Card>
        ))}
        {/* </Link> */}
        {/* </Paper> */}
      </Box>
    </Box>
  );
};

export default TeacherNewData;
