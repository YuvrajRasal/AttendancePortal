import React from 'react'
import Nav from '../Components/Nav';
import { Box } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import './Class.css'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
const drawerWidth=120
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
const Class = () => {
  return (
    <Box sx={{display:'flex'}}>
        <Nav/>
        
        <Box
            component="main"
            className='MainBox'
            sx={{ flexGrow: 1, marginLeft: "15px",pr:10,mt:10, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <Grid container>
                <Grid item xs={12} lg={10} md={6} >
                    <Typography variant='h3'>
                        SE COMPUTER ENGINEERING -A3
                    </Typography>
                    <Typography variant='h5' sx={{mt:2}}>
                        Computer Networks
                    </Typography>
                </Grid>
                <Grid Item xs={6} lg={2} md={6.5}>
                    <Button className='buttonAttendance'sx={{width:"10px"}}>
                        <Typography style={txtStyle}>Take attedance</Typography>
                        </Button>
                </Grid>
                <Grid item xs={12} lg={12} md={6} sx={{mt:5}}>
                    <Grid sx={{mb:2}}>
                        <Typography variant='h6'>
                            Repetition
                        </Typography>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            Once a week
                        </Typography>
                    </Grid>
                    <Grid sx={{mb:2}}>
                        <Typography variant='h6'>
                            Timings
                        </Typography>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            12:30-2:30
                        </Typography>
                    </Grid>
                    <Grid sx={{mb:2}}>
                        <Typography variant='h6'>
                            Date
                        </Typography>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>
                            March 4,2023
                        </Typography>
                    </Grid>
                    <Grid container >
                        <Grid item xs={2.5} lg={1} md={2.5}>
                            <Button className='edit' variant='outlined'>Edit</Button>
                        </Grid>
                        <Grid item xs={2.5} lg={1} md={2.5}>
                            <Button className='delete' variant='outlined'>Delete</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>

    </Box>
  )
}


export default Class;