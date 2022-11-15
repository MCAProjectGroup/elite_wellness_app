import React, { useState } from 'react'
import {AnimateSharedLayout, motion} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Card.css"

import {UilTimes} from "@iconscout/react-unicons"
import ReactApexChart from 'react-apexcharts';

const Card = (props) => {
  const [expended, setExpended] = useState(false);

    return (
    <AnimateSharedLayout>
        {
            expended?
            (
                <ExpendedCard params={props} setExpanded={()=>setExpended(false)} />
            ):
            (
                <CompactCard setExpanded={()=>setExpended(true)} params={props} />
            )
        }
    </AnimateSharedLayout>
    )
}

const CompactCard = ({params, setExpanded})=>{
    const Png = params.png
    return(
        <motion.div className="CompactCard"
            style={{
                boxShadow:params.color.boxShadow,
                background:params.color.background
            }}
            onClick={setExpanded}
            layoutId="expendableCard"

        >
            <div className="radialBar">
                <CircularProgressbar 
                value={params.barValue}
                text={`${params.barValue}%`}
                 />
                 <span>{params.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${params.value}</span>
                <span>Last 1 Weeks</span>
            </div>
        </motion.div>
    )
}

// expended


const ExpendedCard =  ({params, setExpanded})=>{
    const data={
        option:{
            chart:{
                type:"area",
                height:"auto"
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35
            },
            fill:{
                color:["#fff"],
                type:"gradient"
            },
            dataLabels:{
                enabled:false
            },
            stroke:{
                curve:"smooth",
                color:["white"]
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm"
                },
                grid:{
                    show:true
                },
                xaxis:{
                    type:"datetime",
                    categories:[
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-18T01:30:00.000Z",
                        "2018-09-17T02:30:00.000Z",
                        "2018-09-16T03:30:00.000Z",
                        "2018-09-15T04:30:00.000Z",
                        "2018-09-14T05:30:00.000Z",
                        "2018-09-13T06:30:00.000Z",
                    ]
                }
            }
        }
    }
    return(
        <motion.div className="ExpendedCard"
        style={{
            boxShadow:params.color.boxShadow,
            background:params.color.background
        }}
        layoutId="expendableCard"
        >
            <div className="" style={{alignSelf:"flex-end", cursor:"pointer", color:"#fff"}}>
                <UilTimes onClick={setExpanded}  />
            </div>
            <span>{params.title}</span>
            <div className="cartContainer">
                <ReactApexChart series={params.series} type={"area"} options={data.option} />
            </div>
            <span>Last 1 Weeks</span>
        </motion.div>
    )
}

export default Card