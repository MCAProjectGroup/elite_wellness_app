import React from 'react'
import MainDash from '../../../components/MainDash/MainDash'
import Sidebar from '../../../components/Sidebar/Sidebar'
import RightSide from '../../../components/RightSide/RightSide'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="bg-container">

      <div className="AppGlass">
      <Sidebar />
      <MainDash />
      <RightSide />
      </div>
    </div>
  )
}

export default Dashboard