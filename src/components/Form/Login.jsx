import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';

function Login() {
  return (
    <div>
      <div className="container sign" style={{marginTop:"40px"}}>
 
    <form action="/" method='post'>
 
     <h1 style={{color:"black",textAlign:"center",marginBottom:"20px"}}>Login</h1>
     
     <label className="label " for="Email" >Email or Phone</label>
     <input type="email" placeholder="Email" required  />

     <label className="label input" for="Password"  >Password</label>
     <input type="password" placeholder="Password" required  />
     <Link to="#">Forgot Password?</Link>

     <input type="submit" value="Submit"/>
     <p class="message" style={{marginTop:"20px",textAlign:"center"}}>Not Link member? <Link to="#">Signup now</Link></p>
 </form>
</div>       
    </div>
  )
}

export default Login