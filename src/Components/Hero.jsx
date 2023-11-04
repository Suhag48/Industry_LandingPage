import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./HeroStyle.css"

const Hero = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="hero" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="hero-content">
                <h6>DON’T LOOK FURTHER, HERE IS THE KEY</h6>
                <h1>We’re Industrial solution</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt.
                </p>
                <button>get started</button>
            </div>
        </div>
    )
}

export default Hero