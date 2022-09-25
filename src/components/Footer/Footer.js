import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Foot() {
  return (
    <div>
        {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" class="footer py-4" style={{backgroundColor:"#111C37",color:"#FFFFFF"}}>

    <div class="footer-content position-relative">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
              <h3>Elite Wellness</h3>
              Lorem ipsum, dolor sit amet
              <br/> consectetur adipisicing elit. Sint 
              <br/>atque porro repellat? 
    
            </div>
          </div>
          {/* <!-- End footer info column--> */}

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Explore</h4>
            <ul  style={{listStyle:"none",marginLeft:"-30px"}} >
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Home</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>About us</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Contact Us</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Terms and conditions</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>FAQs</a></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div class="col-lg-2 col-md-3 footer-links">
            <h4> Services</h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>online Doctor Consulation</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>All Doctor List</a></li>
             
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Top Specialties </h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Covid Consulation</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Physicians</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Dermatologists</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Diabetologists</a></li>
              <li><a href="#"style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Cardiologists</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Others</a></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Social</h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}><FacebookIcon/> Facebook</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}><InstagramIcon/>  Instagram</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}> <TwitterIcon/> Twitter</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}><LinkedInIcon/> Linkedln</a></li>
              <li><a href="#" style={{textDecoration:"none",color:"#FFFFFF"}}><YouTubeIcon/> YouTube</a></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

        </div>
      </div>
    </div>

    <div class="footer-legal text-center position-relative">
      <div class="container">
        <div class="copyright">
          &copy; Copyright Since Satyush Elite Wellness. All Rights Reserved
        </div>
        
      </div>
    </div>

  </footer>
  {/* <!-- End Footer --> */}

    </div>
  )
}

export default Foot