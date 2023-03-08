import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import x from './images/djLogo.PNG';
import y from './images/library.PNG'

import Link from '@mui/material/Link';
import { flexbox } from '@mui/system';


import './App.css';
import { TableBody } from '@mui/material';

import { useState } from 'react';
import Validation from './Validation';


const LoginNew = () => {

  const [inputs,setInputs]=useState({
    sapid:"",password:""});

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:[e.target.value]

     }))
  };

  const [errors,setErrors]=useState({});

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(inputs);    
    setErrors(Validation(inputs));
  
  }



  return (
  <>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 10,
        
        width: '100vw',
        height: '70vh',
        backgroundColor: 'white',
        zIndex: 'tooltip',
        padding:5

      },
    }}
  >


    <Paper elevation={5} component='form' >


      <Box className='form' sx={{
          display: 'flex',
          flexdirection: 'rows',
          width: '80vw',
          height: '70vh',
      }}>



        <Grid item  sx={{mr:5}}>
              <img className='imag' src={x} 
              style={{
                width: '20%',
                height:'7%',
                marginLeft:80

            }}/>
            <h1 class="MuiTypography-root MuiTypography-h5 css-zq6grw ">WELCOME BACK</h1>   

            <form class="MuiBox-root css-164r41r" novalidate="">

            
            
            

              <Grid sx={{mt:7}}>
              <Textfield 
              name="sapid"
              placeholder="600042100XX"
              label="Sap-id"
              size='small'
              onChange={handleChange}
              value={inputs.sapid} />

              {errors.sapid && <p className='error'>{errors.sapid}</p>}
              
              </Grid>

              <Grid sx={{mt: 2, mb: 7}}
              >
                <Textfield 
              name="password"
              type="password"
              placeholder="password"
              label="Password"
              size='small' 
              onChange={handleChange}
              value={inputs.password}/>
              {errors.password && <p className='error'>{errors.password}</p>}
              
              </Grid>
            

              <Button onClick={handleSubmit} sx = {{
                  backgroundColor: 'blue',
                  color : 'white',
                  width: 100,
                  mb:2,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'blue',
                    boxShadow: 5
                  }

                  
              }}> sign in</Button>


              <Typography 
                endDecorator={<Link href="./Faculty-login ">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
              are you faculty?
              </Typography>

          
            
            

            </form>
      </Grid>  

            
      <Grid item
      sx={{
        width: '80vw',
        height: '70vh',

      }}>

        <img class='lib' src={y}  style={{width: '60vw',height: '70vh' }}/>


      </Grid>

      
    </Box>

           
            
   </Paper>
      
      
  </Box>

    


  <Box  sx={{
      
      width: '70vw',
      height: '100vh',
      // left: 400,
      top: 0,
      position: 'absolute',
      zIndex: 'modal'
  }}/>

  <Box  sx={{
      
      width: '30vw',
      height: '100vh',
      left: 0,
      top: 0,
      backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 'modal'
  }}/>

   
    
</>
   
  )
}

export default LoginNew;