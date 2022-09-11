import React from 'react'
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from 'react-router-dom'
// import Dashboard from './screens/Admin/Dashboard/Dashboard'
import Home from './screens/Home'

const AdminRoute = () => {
    return (

            <Routes>
                {/* <div>
      <img className="background" src={BgPoster} alt="background" />
    </div> */}
                {/* <Login /> */}
                {/* <Navbar LoginUser={LoginUser} /> */}

                {/* <Route path={"/"} exact element={<Dashboard  />} /> */}
                <Route path={'/'} exact element={<Home title={"Admin2"} />} />
                <Route path={'/plan'} exact element={<Home title={"Plan"} />} />


            </Routes>


    )
}

export default AdminRoute