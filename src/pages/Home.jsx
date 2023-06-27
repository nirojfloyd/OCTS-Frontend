import React from 'react'
import Navbar from '../components/Navbar'
import Appbar from '../components/Appbar'
import Box from '@mui/material/Box';
import {Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../components/context/UserAuthContext';

import '../App.css';
import SeatList from './Seats/SeatList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






  return (
    <>
    <div className='bg-colour'>
    <Appbar/>
    <Box height={70}/>
      <Box sx={{ display: 'flex' }}>
        
       <Navbar/>    
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <SeatList/>
 
        </Box>
      </Box>

    </div>

    </>
    
  )
}

export default Home;