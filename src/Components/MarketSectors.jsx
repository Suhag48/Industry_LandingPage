import "./MarketSectorsStyle.css"
import { MarketSectorsData } from "./MarketSectorsData"

const MarketSectors = () => {
    return(
        <div className="marketsector">
            <h2>Our Capturing Market Sectors</h2>
            <p className="text">Who are in extremely love with eco friendly system..</p>
            <div className="carosel">
                {
                    MarketSectorsData.map((data, index) => {
                        const {image, heading, text} = data
                        return(
                            <div key={index} className="carosel-info">
                                <img src={image} alt="" />
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