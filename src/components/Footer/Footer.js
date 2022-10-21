import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Foot() {
  return (
    <div>
        {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" className="footer py-4" style={{backgroundColor:"#111C37",color:"#FFFFFF"}}>

    <div className="footer-content position-relative">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Elite Wellness</h3>
              Lorem ipsum, dolor sit amet
              <br/> consectetur adipisicing elit. Sint 
              <br/>atque porro repellat? 
    
            </div>
          </div>
          {/* <!-- End footer info column--> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Explore</h4>
            <ul  style={{listStyle:"none",marginLeft:"-30px"}} >
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Home</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>About us</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Contact Us</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Terms and conditions</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>FAQs</Link></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4> Services</h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>online Doctor Consulation</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>All Doctor List</Link></li>
             
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Top Specialties </h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Covid Consulation</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Physicians</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Dermatologists</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Diabetologists</Link></li>
              <li><Link to="#"style={{textDecoration:"none",color:"#FFFFFF"}}>Consult Cardiologists</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}>Others</Link></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Social</h4>
            <ul style={{listStyle:"none",marginLeft:"-30px"}}>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}><FacebookIcon/> Facebook</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}><InstagramIcon/>  Instagram</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}> <TwitterIcon/> Twitter</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}><LinkedInIcon/> Linkedln</Link></li>
              <li><Link to="#" style={{textDecoration:"none",color:"#FFFFFF"}}><YouTubeIcon/> YouTube</Link></li>
            </ul>
          </div>
          {/* <!-- End footer links column--> */}

        </div>
      </div>
    </div>

    <div className="footer-legal text-center position-relative">
      <div className="container">
        <div className="copyright">
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