import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Requests.css"
import {
    UilEdit
} from '@iconscout/react-unicons'
import StatusChangePopup from './StatusChangePopup';
import { useState } from 'react';
import { request } from '../../../config/request';
import { useEffect } from 'react';
import moment from 'moment/moment';

function createData(name, trackingID, date, status) {
    return {name, trackingID, date, status };
}

const rows = [
    createData("Laanta Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freasher", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908441, "2 March 2022", "Delivered"),
];

const makeStyles = (status)=>{
    let response;
    switch (status) {
        case "Approved":
            response = {
                background:"rgb(145 254 159 / 47%)",
                color:"green"
            }
            break;
        case "Pending":
            response = {
                background:"#ffadad8f",
                color:"red"
            }
            break;

    
        default:
            response = {
                background:"#59bfff",
                color:"white"
            }
            break;
    }
    return response
}

export default function Requests() {
    const [ShowStatusChangePopUp, setShowStatusChangePopUp] = useState({
        status:false,
        id:'sadsadas',
        // default:"pending"
    })
    const [AppointmentsList, setAppointmentsList] = useState([])
    const isDoctor = localStorage.getItem("doctor")
    
    const getAppointmentData = async()=>{
        let url = isDoctor?"/doctor/get-appointment-list":"/doctor/get-appointment-list/user"
        const response = await request("get",url);
        console.log({response});
        setAppointmentsList(response.data.data)
    }

    useEffect(() => {
      getAppointmentData()
    
      return () => {
        
      }
    }, [])
    

    //  const isDoctor = localStorage.getItem("doctor")

    return (
        <div className="Table">
            <h3 style={{marginBottom:"1.5rem"}}>Recent Orders</h3>
            <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029"}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="left">Problem</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {AppointmentsList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.purpose}</TableCell>
                                <TableCell align="left">{moment(row.appointment_date).format("DD MMM YY")}</TableCell>
                                <TableCell align="left">{row.phone_number.toString()}</TableCell>
                                <TableCell align="left">
                                    <span className="status" onClick={()=> isDoctor && setShowStatusChangePopUp({
                                        status:true,
                                        id:"dsaasdasd"
                                        })} style={makeStyles(row.status)}>
                                    {row.status} {isDoctor && <UilEdit size="20" color="#61DAFB"/>}
                                    </span>
                                </TableCell>
                                <TableCell className='Details' align="left">details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <StatusChangePopup open={ShowStatusChangePopUp.status} onClose = {()=>{setShowStatusChangePopUp({...ShowStatusChangePopUp,status:false})}} />
        </div>

    );
}
