import React from 'react';
import Button from './Button';
import {BsFillPlayFill} from 'react-icons/bs';
import heroImage from '../Assets/hero-image.png';
import pattern1 from '../Assets/boxbg.png'
import './style.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h3>We provide a comprehensive  debt collection  service</h3>
            <p>Our professionals have a combined 85 years in debt recovery efforts that have seen the recovery of more than N19Billion in debt from very unwilling debtors.
                We use the most advanced techniques to trace debtors and recover money owed. We also offer an alternative method for loan recoveries by allowing debtors provide value worth the amount they are unable to pay.
            </p>
            <div className="hero-left-btns">
                <Button text='Hire Us' />
                <a href='#video' className='btn2'><BsFillPlayFill className='play-icon'/><span>Watch Video</span></a>
            </div>
        </div>
        <div className="hero-right">
                <img src={heroImage} alt="hero-right-pic"/>
            </div>
            <div className="pattern1">
                <img src={pattern1} alt="" />
            </div>
    </div>
  )
}

export default Hero