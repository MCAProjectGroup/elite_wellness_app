import React from 'react'
import Navbar from './components/navbar/Navbar';
// import Login from './components/Form/Login';
// // import Signup from './components/Form/Signup';
// import Doctorform from './components/Form/Doctorform';
import Footer from './components/Footer/Footer';
// import Services from './components/Services/Services';
// import Card3 from './Cards/Card3/Card3';
// import Card2 from './Cards/Card2/Card2';
// import Card1 from './Cards/Card1/Card1';



import {
    Route,
    Routes,
    BrowserRouter as Router
  } from 'react-router-dom'

import Home from './screens/User/Home/Home'
// import { Grid } from '@mui/material';
import Faqs from './components/Faqs/Faqs';
import Contactus from './components/Contactus/Contactus';
import About from './components/About/About';
import Terms from './components/Terms/Terms';
import Page from './components/Pagenotfound/Page';
import Doctor from './screens/User/DoctorList/Doctor';

import Loginscreen from './screens/User/Loginscreen/Loginscreen';
import SignUp from './screens/User/SignUp/SignUp';
import Doctorform from './components/Form/Doctorform';
import DoctorRegistor from './screens/Doctor/DoctorRegistor/DoctorRegistor';
import Panel from './screens/Panel/Panel';
import DoctorLogin from './screens/Doctor/DoctorLogin/Login';
import { useSelector } from 'react-redux';







function UserRoutes() {
  const token = useSelector((state) => state.auth.token)
  
  return (
    <>
      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Card2/> */}
      {/* sideline aa raha h  */}
      {/* <Card3/>         */}
      {/* <Services/> */}

      
      {/* <Faqs/> */}
      {/* <Contactus/> */}
       {/* sideline aa raha h  */}
      {/* <About/> */}
      {/* <Terms/> */}
      {/* <Page/> */}
      {/* <Doctor/> */}
      {/* <Doctorform/> */}

     
      
     {/* <Home /> */}
 
      
      <Navbar/>
     <Routes> 

     <Route  path='/' exect element={<Home title={"User"} />} /> 
        {
          !token && (
            <>
            <Route  path='/login'  element={<Loginscreen />} />
            <Route  path='/signup'  element={<SignUp />} />
            <Route  path='/doctor/signUp'  element={<DoctorRegistor />} />
            <Route  path='/doctor/login'  element={<DoctorLogin />} />
            </>
          )
        }

        <Route  path='/doctorlist'  element={<Doctor  />} />
        <Route  path='/appointment-book/:doctor_id'  element={<Doctorform />} />
        <Route  path='/about-us'  element={<About />} />
        <Route  path='/terms'  element={<Terms />} />
        <Route  path='/contact-us'  element={<Contactus />} />
        <Route  path='/faq'  element={<Faqs />} />
        <Route  path='/Profile'  element={<Panel />} />

        
        <Route  path='/*' exect element={<Page title={"404 page not found"} />} />
        
        
    </Routes>
    <Footer/>
    </>
   
  )
}

export default UserRoutes