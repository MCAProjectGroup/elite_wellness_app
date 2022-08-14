import React from 'react'
import {
    Route,
    Routes,
    BrowserRouter as Router
  } from 'react-router-dom'

import Home from './screens/Home'

function UserRoutes() {
  return (
    <Routes>
   

        <Route  path='/user'  element={<Home title={"User2"} />} />
        <Route  path='/' exect element={<Home title={"User"} />} />
        
        
    </Routes>
   
  )
}

export default UserRoutes