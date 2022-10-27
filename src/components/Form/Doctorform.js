import React from 'react'

function Doctorform() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
                <div className="col-12">
                    <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment form</h3>
                </div>
                <form action="">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First Name"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div className="col-md-6">
                            <input type="tel" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Enter Email"/>
                        </div>
                        <div className="col-md-6">
                            <input type="date" className="form-control" placeholder="Enter Date"/>
                        </div>
                        <div className="col-md-6">
                            <input type="time" className="form-control" placeholder="Enter Email"/>
                        </div>
                        <div className="col-12">
                            <select className="form-select">
                                <option selected>Purpose Of Appointment</option>
                                <option value="1">Digestive System</option>
                                <option value="2">Fever</option>
                                <option value="3">Skin Disease</option>
                                <option value="3">Others</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" placeholder="Explain in Details"></textarea>
                        </div>
                        <div className="col-12 mt-5">                        
                            <button type="submit" className="btn btn-primary float-end">Book Appointment</button>
                            <button type="button" className="btn btn-outline-secondary float-end me-2">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Doctorform