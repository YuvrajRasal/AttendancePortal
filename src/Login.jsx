import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Avatar, Button, Card, Checkbox, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import useForm from './UseForm';
import validateInfo from './validateInfo';
import library from "./images/library.PNG";
import logo from "./images/djLogo.PNG";
import { createTheme } from '@mui/material/styles';
import './Login.css'


//
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const paperStyle = {
  display:'flex',
  alignItems: "center",
  justifyContent: "center",
   marginTop: "15px",
   marginBottom: "15px",
  // width: "80rem",
  width: "100%",
  maxWidth:"100%",
  padding:'35px'
};

const avatarStyle={backgroundColor:'lightBlue'}
//

function Login() {
    //functions for form validation 
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validateInfo,
      "login"
    );
    //
  return (
    <>
    <Box style={{display: 'flex'}} sx={{backgroundColor:'#1589FF',display:'flex',alignItems: "center",justifyContent: "center"
                 ,height:'100vh'}}>
    <Box
      sx={{
        width: '40vw',
        height: '100vh',
        backgroundColor: '#0055d2'
      }}
    />
    <Box
      sx={{
        width: '60vw',
        height: '100vh',
        backgroundColor: '#E9EBEB'
 
      }}
    />
   <Grid  alignItems="center" justify="center" style={{position:'absolute',display:'flex',
       alignItems:"center", justifyContent:"center"}} >
       
        <Paper elevation={10} style={paperStyle} alignItems="center">
        <Grid container spacing={2} >
          {/* left side starts */}
           <Grid item xs={5.5} sx={{padding:'20px'}}>{/* ----inserted padding */}
              <Box>
              <img
                src={logo}
                style={{width:'32%', objectFit: "cover" ,borderRadius:'60px',padding:'1rem', 
                     boxSizing:"border-box"}}
              ></img>
                <Typography sx={{fontWeight: 800,fontSize:'2.5rem'}}>
                  Welcome Back.</Typography>
                <form onSubmit={handleSubmit}>
      <Grid align='center'>
    {/* <Container maxWidth='xs' mb={4}  variant='outlined'
     color='primary'> */}
       </Grid>
       <Box mb={1} mt={4} >
          <Box mb={1}>
            <Typography 
            sx={{postition:'relative',display:'flex',marginLeft:'10%',fontWeight: 800,fontSize:'1.2rem'}} >
              {/* <strong>Sap Id :</strong> */}
              Sap Id:
              </Typography>
        <TextField variant='outlined'
        //  label='Sap Id'
         autoComplete='Sap Id' autoFocus
         placeholder='Sap Id'
          // fullWidth required     -----previous code
          sx={{width:'80%'}}
          width="80%" 
          name='username'
          value={values.username}
          onChange={handleChange}/> 
        {errors.username && <Typography color='#bcbcbc' sx={{fontWeight: 600,fontSize:'0.9rem'}}>
          {errors.username}</Typography>} 
        </Box>
        
        <Box mb={2}>
        <Typography 
        sx={{postition:'relative',display:'flex',marginLeft:'10%',fontWeight: 800,fontSize:'1.2rem'}} >
          {/* <strong>Password :</strong> */}
          Password:
          </Typography>
          {/* <box sx={{width:'65%'}} display="flex"> */}
        <TextField variant='outlined'
         type='Password'
         placeholder='Password'
          // label='Password'
          autoComplete='password'
        //  fullWidth required     -----previous code
        sx={{width:'80%'}}
          name='password'
            value={values.password}
            onChange={handleChange}/>
            <div sx={{display:'flex', flexDirection:'row'}} >
        {errors.password && <Typography color='#bcbcbc'sx={{fontWeight: 600,fontSize:'0.9rem'}}>
          invalid password</Typography>} 

        <Link to='/' sx={{color:'#0055d2'}}><strong>forgot password ?</strong></Link>
        </div>
        {/* </box> */}

        {/* <Typography mb={2} mt={4}> 
        <Link to='/'>forgot password?</Link>   -----previous code
      </Typography> */}

        </Box>    
      </Box>
      <Box  mb={2} >
      <Button type='submit' variant='contained'
        sx={{width:'80%'}}><strong>Login</strong></Button>
              
      </Box>
      
      <Typography>Are you a faculty? 
      <Link to="/" sx={{color:'#0055d2'}}><strong>Signup</strong></Link>
      </Typography>
    {/* </Container> */}
    </form>  
              </Box>
          </Grid>
          {/* left side ends */}
          {/* right side starts */}
          <Grid item xs={6.5}>
            <img
                src={library}
                style={{width:'100%', objectFit: "cover" ,borderRadius:'60px',padding:'1rem', 
                     boxSizing:"border-box"}}
              ></img>
          </Grid>
          {/* right side ends */}
        </Grid>
      </Paper>
      
        
    </Grid> 
    </Box>
    
    </>
  )
}

export default Login