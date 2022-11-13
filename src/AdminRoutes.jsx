import React from 'react'
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from 'react-router-dom'
import Chart from './Component1/chart/Chart'
// import Dashboard from './screens/Admin/Dashboard/Dashboard'
import Home from './pages/home/Home'

const AdminRoute = () => {
    return (

            <Routes>
                 {/* <div>
    //   <img className="background" src={BgPoster} alt="background" />
    // </div> */}
                 {/* <Login /> */}
                {/* <Navbar LoginUser={LoginUser} /> */}

                {/* <Route path={"/"} exact element={<Dashboard  />} /> */}
                 <Route path={'/'} exact element={<Home title={"Admin2"} />} />


             </Routes>
    // <Home> </Home>



    )
}

export default AdminRoute