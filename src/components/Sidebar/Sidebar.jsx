import React, { useState } from 'react'
import "./Sidebar.css"
import Logo from "../../assets/icons/logo.png"
import {motion} from "framer-motion"
import { UilSignOutAlt,UilBars } from '@iconscout/react-unicons'
import { SidebarArray } from '../../store/static'




const Sidebar = () => {
    const [ActiveMenu, setActiveMenu] = useState(0)
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
                    <span>
                        Sh<span>o</span>ps
                    </span>
                </div>

                {/* menu */}
                <div className="menu">
                    {SidebarArray.map((item, index) => (
                        <div onClick={()=>setActiveMenu(index)} className={ActiveMenu===index?"menuItem active":"menuItem"} key={index + item.heading}>
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