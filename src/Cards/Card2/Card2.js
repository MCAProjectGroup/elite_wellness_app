import React from 'react';
import './Card2.css';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';



function Card2() {
  return (
    <div className='card2'>
        <div className='leftside'>
        <div className='img'><img  src={require("../../assets/images/image 13.png")} /></div>
        </div>
        {/* ==========Appointment form===================== */}
        <div className='rightsideform'>
          <p>
            
            Reservations</p>
          <p className='heading'>Book An Appointment Now !</p>
          <p className='para'>Elite Wellness Provides Faster Appointment Booking. You are Just a click! Away</p>
          {/* ================form============= */}
          <div class="login-box" >
      <form id="user-input">
      <div className='user-box' >
      <input type="text" name="" />
      <label>Your Name</label>
    </div>
    <div className='user-box' >
      <input type="email" name="" required=""/>
      <label>Your Email</label>
    </div>
     <div className='user-box' >
      <input type="number" name="" required=""/>
      <label>Appointment Date</label>
    </div>
    <div className='user-box' >
      <input type="number" name=""/>
      <label>Mobile Number</label>
    </div>
    <div className='user-box' >
      <input type="text" name="" required=""/>
      <label>Select Department</label>
    </div> 
   
  </form>
</div>
          

          <button type="button" class="button buttonBlue">Make Appointment
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
  
          
  
</div>
</div>   
        

  )
}

export default Card2