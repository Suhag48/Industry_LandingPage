import "./ServiceStyle.css"

import { ImMagicWand } from "react-icons/im"
import { BsFillRocketTakeoffFill, BsBugFill } from "react-icons/bs"

const Service = () => {
    return(
        <div className="service" id="services" 
            data-aos="flip-right" 
            data-aos-duration="2000">
            <div className="service-items">
                <div className="icon">
                    <ImMagicWand />
                </div>
                <div className="content">
                    <h2>Maintenance</h2>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
                    </p>
                </div>
            </div>

            <div className="service-items">
                <div className="icon">
                    <BsFillRocketTakeoffFill />
                </div>
                <div className="content">
                    <h2>Residental Service</h2>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
                    </p>
                </div>
            </div>

            <div className="service-items">
                <div className="icon">
                    <BsBugFill />
                </div>
                <div className="content">
                    <h2>Commercial Service</h2>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Service