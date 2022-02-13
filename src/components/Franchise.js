import React from 'react'
import P from '../Assets/P-logo.png'
import FranchiseWoman from '../Assets/franchiseWoman.png'
import TextBox from '../Assets/chatbox.png'
import TextImg from '../Assets/txtimg.png'
import pattern1 from '../Assets/boxbg.png'
import Button from './Button'
import './style.css'

const Franchise = () => {
    return (
        <div  className='franchise' >
            <div className='franchise-top' > 
                <img src={P} alt='logo' />
                <h4>Own a Procredita Regional Franchise</h4>
            </div>
            <div className="franchise-body">
                <div className="body-left">
                    <img src={FranchiseWoman} className="smiling-woman" alt="smiling woman" />
                    <img src={TextBox} className="text-box" alt="text box" />
                    <img src={TextImg} className="text-img" alt="text" />
                    <img src={pattern1} className='pattern3' alt="" />
                </div>
                <div className="body-right">
                    <p>
                        We are inviting interested individuals and entities across Nigeria to help achieve our objective and earn while doing so by owning a Bawopada franchise. This allows you to collect debt on our behalf in your region and earn a 25% commission on debt recovered. We provide the training and information that allows you to effectively recover debt from debtors in your area
                    </p>
                    <p>The Bawopada Regional Franchise (BRF) Licence varies from N750,000 to N2,000,000 depending on your location, with Lagos State being the highest based off volume of debt to be recovered per region.</p>
                    <p>The average "debt to be recovered" (DBR) a BRF licence operator is entitled per year is N150M with 25% of successfully recovered debt as commission for the operator.</p>
                    <p>Our license are available for all parts of Nigeria except Borno, Zamfara and Bayelsa State.</p>
                    <h5>Become a Debt Collection Manager</h5>
                    <Button text='Sign Up' />
                </div>
            </div>
        </div>
    )
}

export default Franchise