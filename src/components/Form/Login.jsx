import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLoginSuccess } from '../../store/auth';
// import { request } from '../../config/request';
import './Signup.css';

function Login() {
  
  const [LoginForm, setLoginForm] = useState({
    email:"",
    password:"",
    type:"patient"
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }
  const SubmitLoginHandler = async(e)=>{
    e.preventDefault();
    const res = await axios(
      {
        url:"https://glacial-plains-48105.herokuapp.com/auth/login",
        data:LoginForm,
        method:"post"
      }
      )
    console.log(res);
    localStorage.setItem("@token", res.data.data.token)
    localStorage.setItem("name", res.data.data.name)
    dispatch(userLoginSuccess(res.data.data.token))
    handleClick()
    alert(res.data.message+" "+res.data.data.name)
  }
  return (
    <div>
      <div className="container sign" style={{marginTop:"40px"}}>
 
    <form onSubmit={SubmitLoginHandler}>
 
     <h1 style={{color:"black",textAlign:"center",marginBottom:"20px"}}>Login</h1>
     
     <label className="label " for="Email" >Email or Phone</label>
     <input type="email" placeholder="Email" required onChange={(e)=>{
      setLoginForm((state)=> ({...state, email:e.target.value}))
     }} />

     <label className="label input" for="Password"  >Password</label>
     <input type="password" placeholder="Password" required  onChange={(e)=>{
      setLoginForm((state)=> ({...state, password:e.target.value}))
     }} />
     <Link to="#">Forgot Password?</Link>

     <input type="submit" value="Submit"/>
     <p class="message" style={{marginTop:"20px",textAlign:"center"}}>Not Link member? <Link to="/signup">Signup now</Link></p>
     <p class="message" style={{marginTop:"20px",textAlign:"center"}}><Link to="/doctor/login">Doctor Login</Link></p>
 </form>
</div>       
    </div>
  )
}

export default Login