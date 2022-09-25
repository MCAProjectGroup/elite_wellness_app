import React, { useRef } from 'react'

function card2() {
  const card = useRef(second)
  return (
    <div>
      {/* <!-- ======= Services Section ======= --> */}
    <section id="service" class="services pt-0">
      <div class="container" >

        <div class="section-header my-2" style={{textAlign:"center"}}>
          <h2 style={{textDecoration:"underline"}}>Our Services</h2>
          <span>We are here to help you</span>

        </div>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6" ref={} >
            <div class="card" style={{backgroundColor:"pink"}}>
              <div class="card-img" style={{backgroundColor:"red", objectFit:"cover"}}>
                <img src={require("../../assets/images/image 10.png")}  alt="" class="img-fluid" style={{objectFit:"cover"}}/>
              </div>
            </div>
          </div>
          {/* <!-- End Card Item --> */}

          <div class="col-lg-4 col-md-6" >
            <div class="card">
              <div class="card-img">
                <img src={require("../../assets/images/image 11.png")}  alt="" style={{width:"100%"}}/>
              </div>
            </div>
          </div>
          {/* <!-- End Card Item --> */}

          <div class="col-lg-4 col-md-6" >
            <div class="card" >
              <div class="card-img">
                <img src={require("../../assets/images/image 12.png")}  alt="" class="img-fluid" />
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