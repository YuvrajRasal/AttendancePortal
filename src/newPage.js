import { Box, Grid, Paper, Typography } from "@mui/material";
import { boxSizing, Container } from "@mui/system";
import React from "react";
import library from "./images/library.PNG";

const paperStyle = {
  display:'flex',
  alignItems: "center",
  justifyContent: "center",
  // margin: "100px auto",
  borderRadius: "30 px",
  width: "50rem",
  maxWidth:"80%"
  // backgroundColor:'#1589FF'
  // border:"5px solid black",
};

function NewPage() {
  return (
    <>
      {/* <Container alignItems="center" justifyContent="center"  style={{minHeight:'100vh', margin :'auto'}} > */}
      {/* <Paper elevation={10} style={paperStyle} alignItems="center">
        <form>
          <Grid
            alignItems="center"
            flexDirection="row"
            style={{ display: "flex" }}
          >
            <Box sx={{ border: "4px", flexGrow: "1" }}>
              <h1>hello1</h1>
            </Box>
            <Box sx={{ border: "4px", flexGrow: "1" }}>
              <img
                src={library}
                style={{ height: "100%", objectFit: "cover" }}
              ></img>
            </Box>
          </Grid>
        </form>
      </Paper> */}
      <Grid sx={{backgroundColor:'#1589FF',display:'flex',alignItems: "center",justifyContent: "center"
                 ,height:'100vh'}}>
      <Paper elevation={10} style={paperStyle} alignItems="center">
        <Grid container spacing={2} >
          <Grid item xs={5}>
      
              <Box>
                <h1>hello1</h1>
              </Box>
          </Grid>
          <Grid item xs={7}>
            <img
                src={library}
                style={{width:'100%', objectFit: "cover" ,borderRadius:'60px',padding:'1rem', 
                     boxSizing:"border-box"}}
              ></img>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
    </>
  );
}

export default NewPage;
