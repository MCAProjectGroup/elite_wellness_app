import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import "./Card1.css"
const Card1 = () => {
  return (
    <Container maxWidth={"100%"} sx={{
        backgroundColor:"#E6FBFD",
        height:"100vh",
        width:"100%"
    }}>
      <Grid container>
        <Grid md={6} sx={12}>
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
                    <Button variant="contained"  style={{
                      marginRight:"1rem",backgroundColor:"002FA9"
                    }}>Get Appointment</Button>
                    <Button variant="outlined">Learn More</Button>
            </div>  
                </div>
            </div>
          </div>
        </Grid>
        <Grid md={6} sm={12}>
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