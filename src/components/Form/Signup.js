import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div>
      <div className="container sign" style={{marginTop:"40px"}}>
 
    <form action="/" method='post'>
 
     <h1 style={{color:"black",textAlign:"center",marginBottom:"20px"}}>Sign Up</h1>
     

     <label className="label" for="name" >Full Name</label>
     <input type="text" placeholder="Name" required autofocus/>

     <label className="label" for="phone" >Phone</label>
     <input type="tel" placeholder="Mobile Number" required/>

     <label className="label" for="Email" >Email id</label>
     <input type="email" placeholder="Email" required/>

     <label className="label" for="Password" >Password</label>
     <input type="password" placeholder="Password" required/>

     <label className="label" for="ConfirmPassword" >Confirm Password</label>
     <input type="password" placeholder="Confirm Password" required/>
     
     <input type="submit" value="Submit"/>
     <p className="message" style={{marginTop:"20px",textAlign:"center"}}>Already have an account? <Link to="#">Login</Link></p>
 </form>
</div>       
    </div>
  )
}

export default Signup