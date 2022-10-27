import { margin } from '@mui/system'
import React from 'react'


function Card3() {
  return (
    <div style={{overflowX:"hidden"}}>
    <div className="row gy-6 my-4">

      {/* ----------------Images------------ */}
      <div className="col-lg-6 col-md-12 col-xs-12 " >
      <div className="card">
              <div className="card-img mx-0">
                <img src={require("../../assets/images/image 13.png")}  alt="" style={{width:"100%"}}/>
              </div>
            </div>
        </div>
        {/* ------Appointmenet form---------------- */}
      

        <div className="col-lg-6 col-md-12 col-xs-12   mx-0"  style={{backgroundColor:" #111C37",color:"#FFFFFF"}}>
          <div className="container-fluid mx-3 my-4">
        --Reservations
        <h4><strong>Book An </strong> Appointmenet Now !</h4>
        Elite Wellness Provides Faster Appointmenet Booking. You are just a Click! Away
        </div>
        <form>
  <div className="row py-4 my-3" >
    <div className="col-lg-4 col-md-12  col-xs-12 my-3 " >
      <input type="text" className="form-control border-bottom" placeholder="First name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div className="col-lg-4 col-md-12col-xs-12  my-3">
      <input type="text" className="form-control border-bottom " placeholder="Last name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div className="col-lg-4 col-md-12 col-xs-12  my-3">
      <input type="text" className="form-control border-bottom" placeholder="Last name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
  </div>

  <div className="row my-3">
    <div className="col-lg-4 col-md-12 col-xs-12  my-3">
      <input type="text" className="form-control border-bottom" placeholder="First name" style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    <div className="col-lg-4 col-md-12  col-xs-12  my-3 ">
      <input type="text" className="form-control border-bottom" placeholder="Last name"  style={{backgroundColor:" transparent",border:"0"}}/>
    </div>
    </div>
    <button className="btn-lg my-2" type="button" style={{backgroundColor:"#FF0000", color:"#FFFFFF"}}>Make Appointmenet</button>
    
</form>  
    </div>  
    </div>
    </div>
       
   
  )
}

export default Card3