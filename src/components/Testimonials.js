   import React from 'react'
import Avatar1 from '../Assets/avatar1.png'
import Avatar2 from '../Assets/avatar2.png'
import Avatar3 from '../Assets/avatar3.png'
import Avatar4 from '../Assets/avatar4.png'
import './style.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h4>Hear from some of our clients</h4>
            <div className="testimonial-one">
                <div className="testimonial one">
                    <div className='testimonial-text'>
                        I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <img src={Avatar1} alt="client 1" />
                </div>
                <div className="testimonial ">
                    <div className='testimonial-text'>
                        I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <img src={Avatar2} alt="client 2" />
                </div>
            </div>
            <div className="testimonial-two">
                <div className="testimonial three">
                    <div className='testimonial-text'>
                        I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <img src={Avatar3} alt="client 3" />
                </div>
                <div className="testimonial ">
                    <div className='testimonial-text'>
                        I never believed I could get my 3.5 Million naira back until Procredita stepped in and even collected the interest from the debtor.
                    </div>
                    <img src={Avatar4} alt="client 4" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials