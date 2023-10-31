import { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./DoneProjectStyle.css"

import image1 from "../assets/images/p1.jpg.webp"
import image2 from "../assets/images/p2.jpg.webp"
import image3 from "../assets/images/p3.jpg.webp"
import image4 from "../assets/images/p4.jpg.webp"


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }

        return (
            <div className="doneProjects">
                <h1>Latest Finished Projects</h1>
                <p>Who are in extremely love with eco friendly system..</p>

                <Slider {...settings} className="projects-image">

                    <div>
                    <   img src={image1} alt="" />
                    </div>

                    <div>
                    <   img src={image2} alt="" />
                    </div>

                    <div>
                        <img src={image3} alt="" />
                    </div>

                    <div>
                        <img src={image4} alt="" />
                    </div>

                </Slider>
            </div>
        )
    }
}