import React from 'react'
import { Link } from 'react-router-dom'
import './Contactus.css'

function Contactus() {
  return (
    <div>
        <section className="contactus">
        <div className="container contact">
            <div className="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><img src="https://i.ibb.co/cbnfrDF/location.png" /></span>
                            <span>
                                2912 Meadowbrook Road<br/>
                                Konnagar, Hooghly<br/>
                                712246
                            </span>
                        </li>
                        <li>
                            <span><img src="https://i.ibb.co/rbbwDkP/mail.png"/></span>
                            <span>Elitewellness12@gmail.com</span>
                        </li>
                        <li>
                            <span><img src="https://i.ibb.co/DGGjsW7/call.png"/></span>
                            <span>310-286-162</span>
                        </li>
                    </ul>
                </div>
                <ul className="sci">
                    <li><Link to=""><img src="https://i.ibb.co/vxjnyw0/1.png"/></Link></li>
                    <li><Link to=""><img src="https://i.ibb.co/xsXK3zW/2.png"/></Link></li>
                    <li><Link to=""><img src="https://i.ibb.co/5jFR49X/3.png"/></Link></li>
                    <li><Link to=""><img src="https://i.ibb.co/1Msgr4S/4.png"/></Link></li>
                    <li><Link to=""><img src="https://i.ibb.co/GtnC2C8/5.png"/></Link></li>
                </ul>

            </div>
            <div className="contactForm">
                <h2>Send Link Message</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" required/>
                        <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" required/>
                        <span>Last Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="email" required/>
                        <span>Email Address</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" required/>
                        <span>Mobile Number</span>
                    </div>
                    <div className="inputBox w100">
                        <textarea required></textarea>
                        <span>Write Your Massage Here...</span>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Send"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contactus