import React, { useState } from 'react'
import "./Sidebar.css"
import Logo from "../../images/logo.png"
import {motion} from "framer-motion"
import { UilSignOutAlt,UilBars } from '@iconscout/react-unicons'
import { SidebarArray } from '../../Data/Data'
import { SecurityUpdateGood } from '@mui/icons-material'



const Sidebar = ({setPage}) => {
    const isDoctor = localStorage.getItem("doctor")
    const [ActiveMenu, setActiveMenu] = useState(isDoctor?0:1)
    const [expended, setExpended] = useState(true)
    
    const sideBarVariants = {
        true:{
            lef:"0"
        },
        false:{
            left:"-60%"
        }
    }
    return (
        <>
            
            <div className="bars" onClick={()=>{
                setExpended(!expended)
            }}  style={expended?{left:"50%"}:{left:'5%'}}>
                <UilBars />
                
            </div>
            <motion.div 
            className='Sidebar'
            variants={sideBarVariants}
            animate={window.innerWidth<=768?`${expended}`:""}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span style={{fontSize:13}}>
                        Elite<span>Well</span>ness
                    </span>
                </div>

                {/* menu */}
                <div className="menu">
                    {SidebarArray.map((item, index) =>!isDoctor&&index===0?null: (
                        <div onClick={()=>{
                            setActiveMenu(index);
                            setPage(index);
                            }} className={ActiveMenu===index?"menuItem active":"menuItem"} key={index + item.heading}>
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    ))}
                    <div className="menuItem">
                        <UilSignOutAlt />
                        <span>{"Log Out"}</span>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar