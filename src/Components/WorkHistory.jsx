import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./WorkHistoryStyle.css"

const WorkHistory = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="workHistory" data-aos="zoom-in-up" data-aos-duration="3000">
            <div className="circle-content">
                <div className="circle-body">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            2k+
                        </div>
                    </div>
                    <h2>Projects Completed</h2>
                </div>

                <div className="circle-body">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            5.5k
                        </div>
                    </div>
                    <h2>Total Employees</h2>
                </div>

                <div className="circle-body">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            959
                        </div>
                    </div>
                    <h2>Happy Clients</h2>
                </div>

                <div className="circle-body">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            367
                        </div>
                    </div>
                    <h2>Tickets Submited</h2>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory