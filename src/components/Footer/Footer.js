import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="container">
<footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo" >Elite Wellness</h1>
        
    <address >
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint atque porro repellat? <br/>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Exlpore</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
            
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Terms and conditions</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item ">
      <h2 className="nav__title">Services</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Online Doctor Consulation</a>
        </li>
        
        <li>
          <a href="#">All Doctor List</a>
        </li>
      </ul>
    </li>
    <li className="nav__item ">
      <h2 className="nav__title">Top Specialties</h2>
      
      <ul className="nav__ul ">
        <li>
          <a href="#">Covid Consultation</a>
        </li>
        
        <li>
          <a href="#">Consult Physicians</a>
        </li>
        <li>
          <a href="#">Consult Dermatologists</a>
        </li>
        <li>
          <a href="#">Consult Diabetologists</a>
        </li>
        <li>
          <a href="#">Consult Cardiologists</a>
        </li>
        <li>
          <a href="#">Others</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Social</h2>
      
      <ul className="nav__ul">
        <li>
        
          <a href="#" className="icon"> <FacebookIcon/> Facebook</a>
        </li>
        
        <li>

        
          <a href="#" className="icon"> <InstagramIcon/>  Instagram</a>
        </li>
        
        <li>
          <a href="#" className="icon">   <TwitterIcon/> Twitter</a>
        </li>
        <li>
          <a href="#" className="icon"><LinkedInIcon/> Linkedln</a>
        </li>
        <li>
          <a href="#" className="icon"><YouTubeIcon/> YouTube</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p> Copyright &copy; Since Satyugh. All rights reserved.</p>
    
  </div>
</footer>
    </div>
  )
}

export default Footer