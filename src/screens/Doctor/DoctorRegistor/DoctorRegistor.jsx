import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DoctorRegistor.css';

function DoctorRegistor() {

  const [SignUpForm, setSignUpForm] = useState({
    email:"",
    name:"",
    password:"",
    phoneNumber:"",
    cpassowrd:"",
    type:"doctor",
    doctor_speciality:""
  })
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }
  const SubmitSignUpHandler = async(e)=>{
    e.preventDefault();
    if(SignUpForm.cpassowrd !==SignUpForm.password){
      return alert("Confirm Password not matched");
    }
    const res = await axios(
      {
        url:"https://glacial-plains-48105.herokuapp.com/auth/signup",
        data:SignUpForm,
        method:"post"
      }
      )
    console.log(res);
    localStorage.setItem("@token", res.data.data.token)
    localStorage.setItem("name", res.data.data.name)
    localStorage.setItem("doctor", "true")

    alert(res.data.message+" "+res.data.data.name)
    handleClick()
  }
  return (
    <div>
      <div className="container sign" style={{marginTop:"40px"}}>
 
    <form onSubmit={SubmitSignUpHandler}>
 
     <h1 style={{color:"black",textAlign:"center",marginBottom:"20px"}}>Doctor Sign Up</h1>
     

     <label className="label" for="name" >Full Name</label>
     <input type="text" placeholder="Name" required autofocus  onChange={(e)=>{
      setSignUpForm((state)=> ({...state, name:e.target.value}))
     }}/>

     <label className="label" for="phone" >Phone</label>
     <input type="tel" placeholder="Mobile Number" required onChange={(e)=>{
      setSignUpForm((state)=> ({...state, phoneNumber:e.target.value}))
     }}/>

     <label className="label" for="Email" >Email id</label>
     <input type="email" placeholder="Email" required onChange={(e)=>{
      setSignUpForm((state)=> ({...state, email:e.target.value}))
     }}/>

     <label className="label" for="Password" >Password</label>
     <input type="password" placeholder="Password" required onChange={(e)=>{
      setSignUpForm((state)=> ({...state, password:e.target.value}))
     }}/>

     <label className="label" for="ConfirmPassword" >Confirm Password</label>
     <input type="password" placeholder="Confirm Password" required onChange={(e)=>{
      setSignUpForm((state)=> ({...state, cpassowrd:e.target.value}))
     }}/>
     <label className="label" for="Speciality" >Speciality</label>
     <input type="text" placeholder="Speciality" required onChange={(e)=>{
      setSignUpForm((state)=> ({...state, doctor_speciality:e.target.value}))
     }}/>
     
     <input type="submit" value="Submit"/>
     <p className="message" style={{marginTop:"20px",textAlign:"center"}}>Already have an account? <Link to="/doctor/login">Login</Link></p>
 </form>
</div>       
    </div>
  )
}

export default DoctorRegistor