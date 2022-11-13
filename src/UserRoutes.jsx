import React from 'react'
// import Navbar from './components/navbar/Navbar';
// import Signin from './components/Form/Signin';
// import Signup from './components/Form/Signup';
// import Footer from './components/Footer/Footer';
// import Card3 from './Cards/Card3/Card3';
// import Card2 from './Cards/Card2/Card2';
// import Card1 from './Cards/Card1/Card1';



import {
    Route,
    Routes,
    BrowserRouter as Router
  } from 'react-router-dom'

import Home from './screens/Home'
import { Grid } from '@mui/material';
import Navbar from './Admin_Dash/Navbar/Navbar';

function UserRoutes() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Card1/> */}
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Card3/> */}
      {/* <Card2/> */}
      {/* <Footer/> */}
      
      
    <Routes>
   
        {/* <Route  path='/user'  element={<Home title={"User2"} />} /> */}
        {/* <Route  path='/' exect element={<Home title={"User"} />} /> */}
        {/* <Route  path='/*' exect element={<Home title={"404 page not found"} />} /> */}
        <Navbar/>
        
    </Routes>
    </>
   
  )
}

export default UserRoutes