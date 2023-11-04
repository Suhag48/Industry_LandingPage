import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./WorkHistoryStyle.css"

const WorkHistoryData = [
    {
        amount : "2k+",
        heading : "Projects Completed"
    },
    {
        amount : "5.5k",
        heading : "Total Employees"
    },
    {
        amount : 959, 
        heading : "Happy Clients"
    },
    {
        amount : 367,
        heading : "Tickets Submitted"
    }
]

const WorkHistory = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="workHistory" id="workhistory">
            <div className="circle-content">
                {
                    WorkHistoryData.map((data, index) => {
                        return(
                            <div className="circle-body" key={index}
                                data-aos="zoom-in"
                                data-aos-duration="3000">
                                <div className="outer-circle">
                                    <div className="inner-circle"> {data.amount} </div>
                                </div>
                                <h2> {data.heading} </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WorkHistory