import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@mui/material/Button';
// import "./Home.css"

const Home = (props) => {
  return (
    <div>
     
      {props.title || "Home"}
      <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default Home