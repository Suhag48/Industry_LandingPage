// import {NavLink} from "react-router-dom"
import { useState } from "react"

import "./HeaderStyle.css"
import { HeaderData } from "./HeaderData"
import logo from "../assets/images/logo.png.webp"

import { FaBars, FaTimes } from "react-icons/fa"


const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        return(
            setClick(!click)
        )
    }
    return(
        <header>
            <div className="header-section">
                <div className="logo-menu">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div onClick={handleClick} className="menu-icon">
                        {
                            click ? <FaTimes size={25} /> : <FaBars size={25} />
                        }
                    </div>
                </div>

                <nav>
                    <ul className={click ? "navbar-visible" : "navbar-hide"}>
                        {
                            HeaderData.map((data, index) => {
                                const {item, link} = data
                                return(
                                    <li key={index}>
                                        <a href={link}>{item}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header