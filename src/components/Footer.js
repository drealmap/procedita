import React from 'react';
import FooterLogo from '../Assets/footerlogo.png';
import MapPoint from '../Assets/mappoint.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhone, FiMail } from "react-icons/fi";
import './style.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className='logo-socials'>
                    <img src={FooterLogo} alt="procedita logo" />
                    <div className="socials">
                        <FaInstagram />
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaTwitter/>
                    </div>
                </div>
                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li>Why Procedita</li>
                        <li>FAQ</li>
                        <li>Loan terms</li>
                        <li>Apply Now</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="legal">
                    <h5>Legal</h5>
                    <ul>
                        <li>Cookies Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="map-contact">
                    <img src={MapPoint} alt="location" />
                    <div className="contacts">
                        <div className="address">
                            <GoLocation className='contacts-icon' />
                            <small>1686 Oladele Olashore Street, Off Sanusi Fafunwa Street, Victoria Island, Lagos.</small>
                        </div>
                        <div className="phone">
                            <FiPhone  className='contacts-icon' />
                            <a href="tel:+2348147630499">+ (234) 814 7630 499 </a>
                        </div>
                        <div className="mail">
                            <FiMail  className='contacts-icon' />
                            <a href="mailto:info@procredita.com">info@procredita.com</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*this only shows on mobile*/}
            <div className="mobile-contact">
                    <div className="address">
                            <GoLocation className='contacts-icon' />
                            <small>1686 Oladele Olashore Street, Off Sanusi Fafunwa Street, Victoria Island, Lagos.</small>
                    </div>
                    <div className="phone">
                        <FiPhone  className='contacts-icon' />
                        <a href="tel:+2348147630499">+ (234) 814 7630 499 </a>
                    </div>
                    <div className="mail">
                        <FiMail  className='contacts-icon' />
                        <a href="mailto:info@procredita.com">info@procredita.com</a>
                    </div>
            </div>
            {/*this only shows on mobile*/}
            <p className='cookies'>This website uses cookies</p>
            <p className='privacy-word'>This website uses cookies
                We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. Check <a href="http://privary" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
            <p className="copyright">© Procredita 2020, all rights reserved</p>
        </div>
    )
}

export default Footer;