import React from "react";
import "./Card1.css";
import { Button } from "@mui/material";

function Card1() {
 
  return (
    <div>
      <header id="header" className="header">
        <div className="oval">
          <img src={require("../../assets/images/Rectangle 4.png")} />
        </div>
        <div className="header-content">
          <div className="header-text">
            <p id="hyper1">ADVANCE HEAL THCARE</p>
            <h1>Always Caring Always Here</h1>
          </div>
          <Button variant="contained" className="btn1">
            Get Appointment
          </Button>
          <Button variant="outlined" className="btn2">
            Learn More
          </Button>
        </div>
      </header>
      {/* header end  */}
    </div>
  );
}

export default Card1;
