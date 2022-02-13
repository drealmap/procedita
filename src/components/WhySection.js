import React from 'react'
import P from '../Assets/P-logo.png'
import whyMan from '../Assets/whyMan.png'
import { BsGraphUp, BsCloudFill } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi'
import Button from './Button'
import pattern1 from '../Assets/boxbg.png'
import './style.css'

const WhySection = () => {
  return (
    <div className='why'>
        <div className='why-top' > 
            <img src={P} alt='logo' />
            <h4>Why Procedita</h4>
        </div>
        <div className='why-body'>
            <div>
                <p>
                    Dealing with debtors can be very stressful for clients, not to mention the time it can take to recover the debt. 
                    At Procredita, we help to take the stress away from business owners and allow them to refocus their attention back on what they do best, growing their business.
                </p>
                <p>Procredita, offers a range of different debt collection services including our “value for cash” service. This means that if debtors are truly unable to pay back, they can provide value for the monies owed, by working for it.</p>
                <p>We work with businesses of all types and sizes, from start-ups through to large corporate companies who operate in a multitude of different industries. Our specialist team are able to adapt to the needs of each client and are skilled in the art of negotiation. We pride ourselves on our professionalism and how we handle our cases. Where possible, we will always attempt to resolve cases through negotiation, however, should you need to pursue the legal option, we can help.</p>
            </div>
            <div>
                <img src={whyMan} alt='whyman'/>
            </div>
        </div>
        <div className='why-card'>
            <div className="cards">
                <div className="card1">
                    <BsGraphUp className='growth-icon' />
                    <p>We have a high success rate, envied by many of our competitors. In fact we are proud to act for a number of other debt collection agencies as the final step when they failed to collect themselves.</p>
                </div>
                <div className="card2">
                    <BsCloudFill className='cloud-icon'  />
                    <p>Our modern computer technology has direct access to up-to-date credit information systems, which enables us to investigate the profile of your debtors more thoroughly, thus ensuring the best course of debt collection action is taken for each and every account.</p>
                </div>
                <div className="card3">
                    <HiShoppingCart className='cart-icon' />
                    <p>We buy your debt, and incur the full cost of collecting. This is how we stand out from the rest.</p>
                </div>
            </div>
            <Button text='Hire Us' />
        </div>
        <div className="pattern2">
            <img src={pattern1} alt="" />
        </div>
    </div>
  )
}

export default WhySection