import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./Card1.css"
const Card1 = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false} sx={{
        backgroundColor:"#E6FBFD",
        height:"100vh",
        width:"100%",
        alignItems:"center",
    }}>
      <Grid container sx={{
          overflowX:"hidden",
          height:"100vh",
          width:"100%",
        overflowY:"hidden"

      }}>
        <Grid lg={6} md={6} xs={12} sx={{
          // bgcolor:"red"
        }} >
          <div className="topBanner_leftSide">
            <div className="topBanner_leftSide_img">
                <img src={require("../../assets/images/Rectangle 4.png")}  alt="" />
                <div className="contant">
                    <Typography component={"p"}  className={"themeLabel1"} >
                    ADVANCED HEALTHCARE
                    </Typography>
                    <Typography component={"h2"}  className={"themeLabel2"}  >
                    Always Caring Always Here
                    </Typography>
                <div className='option_btn'>   
                    <Button variant="contained" onClick={()=>{
                      navigate("appointment-book")
                    }}  style={{
                      marginRight:"1rem",backgroundColor:"002FA9"
                    }}>Get Appointment</Button>

                    <Button variant="outlined" onClick={()=>{
                      navigate("about-us")
                    }}>Learn More</Button>
            </div>  
                </div>
            </div>
          </div>
        </Grid>
        <Grid lg={6} md={6}  xs={12}>
           <div className="topBanner_RightSide">
            <div className="mid">
              <div className="img">
              <img src={require("../../assets/images/Rectangle 6.png")} width={230} height={295} style={{objectFit:"contain"}} alt="" className="img1" />

              </div>
              <div className="img">
              <img src={require("../../assets/images/Rectangle 8.png")} width={235} height={335} style={{objectFit:"contain"}} alt="" className="img1" />

              </div>
              <div className="img">
              <img src={require("../../assets/images/Rectangle 10.png")} width={312} height={319} style={{objectFit:"contain"}} alt="" className="img1" />

              </div>
              <div className="img">
              <img src={require("../../assets/images/Rectangle 1.png")}  style={{objectFit:"contain"}} alt="" className="person_banner" />

              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Card1