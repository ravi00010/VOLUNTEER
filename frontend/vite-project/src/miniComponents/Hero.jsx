import React from 'react';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="banner">
                <h1>Volunteers</h1>
                <h3>Needed</h3>
            <p>
                Join us in making a difference! We're seeking passionate volunteers to help with our donation campaigns. Your time and effort can change lives. Get involved today!
            </p>
            <Link to={"/donate"} className="btn">
             Donate Now
            </Link>
            </div>
            <div className="banner">
                <img src="/hero (1).png" alt="hero" />
            </div>
        </section>
    )
}

export default Hero
