import React from 'react'
import Navbar from './components/navbar/Navbar';
import Login from './components/Form/Login';
import Signup from './components/Form/Signup';
import Doctorform from './components/Form/Doctorform';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Card3 from './Cards/Card3/Card3';
import Card2 from './Cards/Card2/Card2';
import Card1 from './Cards/Card1/Card1';



import {
    Route,
    Routes,
    BrowserRouter as Router
  } from 'react-router-dom'

import Home from './screens/User/Home/Home'
import { Grid } from '@mui/material';
import Faqs from './components/Faqs/Faqs';
// import Contactus from './components/Contactus/Contactus';
import About from './components/About/About';
import Terms from './components/Terms/Terms';
import Page from './components/Pagenotfound/Page';
import Doctor from './screens/User/DoctorList/Doctor';

// import Loginscreen from './screens/User/Loginscreen/Loginscreen';







function UserRoutes() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Card1/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Card2/> */}
      {/* sideline aa raha h  */}
      {/* <Card3/>         */}
      <Services/>

      
      {/* <Faqs/> */}
      {/* <Contactus/> */}
       {/* sideline aa raha h  */}
      {/* <About/> */}
      {/* <Terms/> */}
      {/* <Page/> */}
      {/* <Doctor/> */}
      <Doctorform/>

     
      
     {/* <Home /> */}
 
      
     {/* <Routes>  */}
     {/* <Route  path='/' exect element={<Home title={"User"} />} />  */}
        {/* <Route  path='/list'  element={<Doctor title={"User2"} />} /> */}
        {/* <Route  path='/login'  element={<Loginscreen />} /> */}

        
        {/* <Route  path='/*' exect element={<Page title={"404 page not found"} />} /> */}
        
        
    {/* </Routes> */}
    {/* <Footer/> */}
    </>
   
  )
}

export default UserRoutes