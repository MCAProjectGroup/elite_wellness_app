import React ,{useState}from 'react';
import './Navbar.css';
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom';

function Navbar() {
  const[showlinks,setshowlinks]=useState(false);
  return (
    <div className='navbar'>
      <div className="rightside">
    <div className="logoContainer">
      <img  src={require("../../assets/icons/logo.png")} style={{height:32, width:32, objectFit:"contain"}}/>
      <div className="name">Elite Wellness</div>
    </div>
      </div>
      <div className="leftside">
        <input  className="input " type="text" placeholder='search...' />
        <button className='search middle'>
          <SearchIcon/>
          </button>
        <div className="links" id={showlinks ? "hidden" : ""}>
        <Link to="/Specialist" class="a">Specialist</Link>
        <Link to="/videoConsult" class="a" >Video consult</Link>
        <Link to="/theme" class="a"><img  src={require("../../assets/images/theme.png")} style={{height:33, width:33, objectFit:"contain"}}/>Theme</Link>
        {/* <button>Login</button> */}
        <Button variant="outlined" id="btn">Login</Button>
      </div>
      <button  id="button" onClick={() => setshowlinks(!showlinks)}>
        {" "}
        <ReorderIcon/>
      </button>
      </div>
    </div>
  )
}

export default Navbar