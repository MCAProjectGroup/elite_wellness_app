import React, { useRef } from 'react'

function card2() {
  
  return (
    <div>
      {/* <!-- ======= Services Section ======= --> */}
    <section id="service" className="services pt-0" style={{marginBottom:"60px"}}>
      <div className="container" >

        <div className="section-header my-2" style={{textAlign:"center"}}>
          <h2 style={{textDecoration:"underline"}}>Our Services</h2>
          <div style={{color:"black",fontSize:"20px"}}>We are here to help you</div>

        </div>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6"  >
            <div className="card" >
              <div className="card-img" style={{ objectFit:"cover"}}>
                <img src={require("../../assets/images/image 10.png")}  alt="" className="img-fluid" style={{objectFit:"cover",width:"420px" }}/>
              </div>
            </div>
          </div>
          {/* <!-- End Card Item --> */}

          <div className="col-lg-4 col-md-6" >
            <div className="card">
              <div className="card-img">
                <img src={require("../../assets/images/image 11.png")}  alt="" className="img-fluid" style={{width:"420px"}}/>
              </div>
            </div>
          </div>
          {/* <!-- End Card Item --> */}

          <div className="col-lg-4 col-md-6" >
            <div className="card" >
              <div className="card-img">
                <img src={require("../../assets/images/image 12.png")}  alt="" className="img-fluid" style={{width:"420px"}}/>
              </div>
            </div>
          </div>
          {/* <!-- End Card Item --> */}
        </div>
      </div>
    </section>
    {/* <!-- End Services Section --> */}
    </div>
  )
}

export default card2