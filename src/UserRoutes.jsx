import React from 'react'
import Navbar from './components/navbar/Navbar';
// import Signin from './components/Form/Signin';
import Signup from './components/Form/Signup';



import {
    Route,
    Routes,
    BrowserRouter as Router
  } from 'react-router-dom'

import Home from './screens/Home'

function UserRoutes() {
  return (
    <>
      <Navbar/>
      {/* <Signin/> */}
      <Signup/>
      
    <Routes>
   
        {/* <Route  path='/user'  element={<Home title={"User2"} />} /> */}
        {/* <Route  path='/' exect element={<Home title={"User"} />} /> */}
        {/* <Route  path='/*' exect element={<Home title={"404 page not found"} />} /> */}
        
        
    </Routes>
    </>
   
  )
}

export default UserRoutes