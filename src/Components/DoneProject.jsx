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
            centerMode: false,
            centerPadding: '10px',
            slidesToShow: 3,
            speed: 500,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    },
                },
            ],
        }

        return (
            <div className="doneProjects" id="projects">
                <h1>Latest Finished Projects</h1>
                <p>Who are in extremely love with eco friendly system..</p>

                <Slider {...settings} className="projects-image">

                    <div>
                        <img src={image1} alt="slideImg" />
                    </div>

                    <div>
                        <img src={image2} alt="slideImg" />
                    </div>

                    <div>
                        <img src={image3} alt="slideImg" />
                    </div>

                    <div>
                        <img src={image4} alt="slideImg" />
                    </div>

                </Slider>
            </div>
        )
    }
}