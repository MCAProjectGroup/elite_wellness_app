import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../config/request';

function Doctorform() {
    let { doctor_id } = useParams();
    console.log(doctor_id);
    const [BookingForm, setBookingForm] = useState({
        doctor_id:doctor_id,
        appointment_date: null,
        name: "",
        // lname: "",
        phone_number:"",
        purpose: "",
        explain: ""
    })

    const SubmitBookingFormHandler = async (e) => {
        e.preventDefault();
        const res = await request(
            "post",
            "/user/doctor-appontment-booking",
            BookingForm

        )
        console.log(res);
        // localStorage.setItem("@token", res.data.data.token)
        // localStorage.setItem("name", res.data.data.name)
        // dispatch(userLoginSuccess(res.data.data.token))

        alert(res.data.message)
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
                        <div className="col-12">
                            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment form</h3>
                        </div>
                        <form onSubmit={SubmitBookingFormHandler}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, name: e.target.value }))
                                    }} />
                                </div>
                                {/* <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Last Name"  onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, lname: e.target.value }))
                                    }} />
                                </div> */}
                                <div className="col-md-6">
                                    <input type="tel" className="form-control" placeholder="Phone Number"  onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, phone_number: e.target.value }))
                                    }} />
                                </div>
                                {/* <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Enter Email"  />
                                </div> */}
                                <div className="col-md-6">
                                    <input type="date" className="form-control" placeholder="Enter Date"  onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, appointment_date: e.target.value }))
                                    }} />
                                </div>
                                {/* <div className="col-md-6">
                                    <input type="time" className="form-control" placeholder="Enter Email"  onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, phone_number: e.target.value }))
                                    }} />
                                </div> */}
                                <div className="col-12">
                                    <select className="form-select" onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, purpose: e.target.value }))
                                    }}>
                                        <option selected value="Purpose Of Appointment">Purpose Of Appointment</option>
                                        <option value="Digestive System">Digestive System</option>
                                        <option value="Fever">Fever</option>
                                        <option value="Skin Disease">Skin Disease</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" placeholder="Explain in Details"  onChange={(e) => {
                                        setBookingForm((state) => ({ ...state, explain: e.target.value }))
                                    }}></textarea>
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