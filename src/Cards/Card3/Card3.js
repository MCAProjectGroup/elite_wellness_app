import { margin } from '@mui/system'
import React from 'react'


function Card3() {
  return (
    <div>
    <div class="row gy-6 my-4">

      {/* ----------------Images------------ */}
      <div class="col-lg-6 col-md-12" >
      <div class="card">
              <div class="card-img mx-0">
                <img src={require("../../assets/images/image 13.png")}  alt="" style={{width:"100%"}}/>
              </div>
            </div>
        </div>
        {/* ------Appointmenet form---------------- */}
      

        <div class="col-lg-6 col-md-12  mx-0"  style={{backgroundColor:" #111C37",color:"#FFFFFF"}}>
          <div class="container-fluid mx-3 my-4">
        --Reservations
        <h4><strong>Book An </strong> Appointmenet Now !</h4>
        Elite Wellness Provides Faster Appointmenet Booking. You are just a Click! Away
        </div>
        <form>
  <div class="row py-4 my-3" >
    <div class="col-lg-4 col-md-12 my-3 " >
      <input type="text" class="form-control border-bottom" placeholder="First name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div class="col-lg-4 col-md-12 my-3">
      <input type="text" class="form-control border-bottom " placeholder="Last name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div class="col-lg-4 col-md-12 my-3">
      <input type="text" class="form-control border-bottom" placeholder="Last name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
  </div>

  <div class="row my-3">
    <div class="col-lg-4 col-md-12 my-3">
      <input type="text" class="form-control border-bottom" placeholder="First name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div class="col-lg-4 col-md-12  my-3 ">
      <input type="text" class="form-control border-bottom" placeholder="Last name"  style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    </div>
    <button type="submit" class="btn btn-primary" style={{width:"330px",marginTop:"30px",marginBottom:"20px",backgroundColor:"#FF0000"}}>Make Appointmenet</button>
</form>  
    </div>  
    </div>
    </div>
       
   
  )
}

export default Card3