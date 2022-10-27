import React from 'react'
import './About.css';

function About() {
  return (
    <div>
       
       <section className="about" id="about">
            <div className="container">
                <div className="heading text-center">
                    <h2>About
                        <span>Us</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br/>
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <img src={require("../../assets/images/image 13.png")}  alt="" style={{width:"100%"}}/>
                    </div>
                    <div className="col-lg-6">
                        <h3>Excellention in Healthcare </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>Dental Care</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>
                                    Medicine</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>Specialist Medical Advice</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>
                                    Cardiology</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>Diagnostics</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>
                                    <i className="far fa-star"></i>
                                   Medical surgury</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About