import React from 'react'

function Services() {
  return (
    <div>
      <div class="container mt-5 " >
    <div class="d-flex justify-content-center row" >
        <div class="col-md-10">
          <div> <h5>100 Results Found for Doctors </h5></div>
          </div>
          </div>
        </div>
      <div class="container mt-5 mb-5" >
    <div class="d-flex justify-content-center row" style={{heigh:"200px"}}>
        <div class="col-md-10">
            <div class="row bg-white border rounded">
                <div class="col-md-2 mt-1"><img class="img-fluid img-responsive rounded product-image" src={require("../../assets/images/image 16.png")}  style={{height:"100px"}}/>
                </div>
                <div class="col mt-1" >
                    <div style={{color:"blue"}}>Nuerologist</div>
                    <div> <strong>Dr. Chales Warner</strong> </div>
                    <div> MBBS,MCPS,MSc(neurologist)</div>
                    <div class="d-flex">
                        <div class="ratings mr-2" style={{color:"yellow"}}><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <i class="fa fa-star"></i></div> 2000 Feedback
                    </div>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                    <i class="fa-sharp fa-solid fa-location-dot" style={{marginRight:"10px"}}></i>
                    <div><h6>Manchester,UK </h6> </div>
                    
                    </div>

                    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                    <i class="fa-sharp fa-solid fa-calendar-day" style={{marginRight:"10px"}}></i>
                    <div><h6>Mo,Tu,We,<span class="text-danger">Th</span>,Fr,Sa </h6> </div>
                    
                    </div>
                    </div>

                    



                    <div class="d-flex ">  
                      <button class="btn btn-outline-primary my-2 " type="button">Book Now</button>
                     <div style={{marginLeft:"10px",color:"red",marginTop:"10px"}}><i class="fa-solid fa-heart" ></i></div> 
                       </div>
                       
                </div>
            </div>
            
        </div>
    </div>
</div>

   
     
</div>


  )
}

export default Services