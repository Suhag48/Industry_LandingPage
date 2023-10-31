import "./FooterStyle.css"

import { FaFacebookF } from "react-icons/fa"
import { BiLogoLinkedin } from "react-icons/bi"
import { BsYoutube } from "react-icons/bs"

const Footer = () => {
    return(
        <footer className="footer-section">
            <div className="about">
                <h2>About Us</h2>
                <p className="copyright">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    <br/>
                    <br/>
                    Copyright ©2023 All rights reserved | This template is made with <span>Colorib</span>
                </p> 
            </div>

            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>
                    Stay update with our latest
                </p>
                <div className="subscription">
                    <input type="email" placeholder="Enter Email" />
                    <button>Send</button>
                </div>
            </div>

            <div className="social">
                <h2>Follow us</h2>
                <p>let us be social</p>

                <div className="social-icons">
                    <a href="www.fb.com" target="_blank">
                        <FaFacebookF />
                    </a>

                    <a href="www.linkedin.com/in/suhag-rana" target="_blank">
                        <BiLogoLinkedin />
                    </a>

                    <a href="www.youtube.com/" target="_blank">
                        <BsYoutube />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer