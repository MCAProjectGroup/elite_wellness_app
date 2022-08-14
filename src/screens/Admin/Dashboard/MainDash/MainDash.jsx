import React from 'react'
import Cards from '../../../../components/Cards/Cards'
import TableComp from '../../../../components/TableComp/TableComp'
import "./MainDash.css"
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <TableComp />
    </div>
  )
}

export default MainDash