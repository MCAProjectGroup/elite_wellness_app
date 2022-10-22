import React from 'react'

function Services() {
  return (
    <div>
      <div className="container mt-5 " >
    <div className="d-flex justify-content-center row" >
        <div className="col-md-10">
          <div> <h5>100 Results Found for Doctors </h5></div>
          </div>
          </div>
        </div>
      <div className="container mt-5 mb-5" >
    <div className="d-flex justify-content-center row" style={{heigh:"200px"}}>
        <div className="col-md-10">
            <div className="row bg-white border rounded">
                <div className="col-md-2 mt-1"><img className="img-fluid img-responsive rounded product-image" src={require("../../assets/images/image 16.png")}  style={{height:"100px"}}/>
                </div>
                <div className="col mt-1" >
                    <div style={{color:"blue"}}>Nuerologist</div>
                    <div> <strong>Dr. Chales Warner</strong> </div>
                    <div> MBBS,MCPS,MSc(neurologist)</div>
                    <div className="d-flex">
                        <div className="ratings mr-2" style={{color:"yellow"}}><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i></div> 2000 Feedback
                    </div>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                    <i className="fa-sharp fa-solid fa-location-dot" style={{marginRight:"10px"}}></i>
                    <div><h6>Manchester,UK </h6> </div>
                    
                    </div>

                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                    <i className="fa-sharp fa-solid fa-calendar-day" style={{marginRight:"10px"}}></i>
                    <div><h6>Mo,Tu,We,<span className="text-danger">Th</span>,Fr,Sa </h6> </div>
                    
                    </div>
                    </div>

                    



                    <div className="d-flex ">  
                      <button className="btn btn-outline-primary my-2 " type="button">Book Now</button>
                     <div style={{marginLeft:"10px",color:"red",marginTop:"10px"}}><i className="fa-solid fa-heart" ></i></div> 
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