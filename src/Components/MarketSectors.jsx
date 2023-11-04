import "./MarketSectorsStyle.css"
import { MarketSectorsData } from "./MarketSectorsData"

const MarketSectors = () => {
    return(
        <div className="marketsector" id="marketsector">
            <h2>Our Capturing Market Sectors</h2>
            <p className="text">Who are in extremely love with eco friendly system..</p>
            <div className="carosel">
                {
                    MarketSectorsData.map((data, index) => {
                        const {image, heading, text} = data
                        return(
                            <div key={index} className="carosel-info"
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className="carosel-img">
                                    <img src={image} alt="caroselImage" />
                                </div>
                                <h3>{heading}</h3>
                                <p>{text}</p>
                            </div>
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default MarketSectors