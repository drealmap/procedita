import React, {useState} from 'react'
import logo from '../Assets/icon.png'
import './style.css'

//REACT ICONS FOR SMALLER SCREENS
import { BiMenuAltRight } from "react-icons/bi"
import {  FaTimesCircle } from "react-icons/fa"


const Navbar = () => {
    const [navdisplay, setNavdisplay] = useState(false);
    const styleNavdisplay = {
        left: navdisplay ? 0 : "-100%",
    }
    
  return (
    <header className='navbar'>
        <div className='logo'>
            <a href='#logo'>
                <img src={logo} alt='logo' />
            </a>
        </div>

        <div className="navdisplay" onClick={() => setNavdisplay(!navdisplay)}>
            <BiMenuAltRight /> 
        </div>

        <ul className="nav-btn" style={styleNavdisplay} onClick={() => setNavdisplay(!navdisplay)}>
                    <li>
                        <a  href="/" className="nav btn-active" >Home</a>
                    </li>
                    <li>
                        <a href="/#about_us" className="nav" >About Us</a>
                    </li>
                    <li>
                        <a href="/#what_we_do" className="nav" >What We do</a>
                    </li>
                    <li>
                        <a href="/#hire" className="hire-btn" >Hire Us</a>
                    </li>

                    <li onClick={() => setNavdisplay(!navdisplay)}>
                        <FaTimesCircle className="close-nav" />
                    </li>

                </ul>

    </header>
  
  )
}

export default Navbar;