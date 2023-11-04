import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./FeedbackStyle.css"

const Feedback = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="client-feedback" id="feedback">
            <div className="feedback-content" data-aos="fade-right" data-aos-duration="2000">
                <p>Brand new app to blow your mind</p>
                <h2>
                    We’ve made a life
                    that will change you
                </h2>
                <p className="feedback-text">We are here to listen from you deliver exellence</p>
                <p className="feedback-details">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
                <button>get started now</button>
            </div>
            <div className="feedback-form">
                <form action="#" className="form">
                <h2>Request a quote</h2>
                    <select name="quote">
                        <option value="">Need Service</option>
                        <option value="">Work with us</option>
                        <option value="">Visit Us</option>
                        <option value="">Other</option>
                    </select>
                    <input type="text" placeholder="name" className="input-field" />
                    <input type="tel" placeholder="phone" className="input-field" />
                    <input type="email" placeholder="email" className="input-field" />
                    <textarea name="message" cols="30" rows="10" placeholder="message" className="message-field"></textarea>
                    <button>Request free quote</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback