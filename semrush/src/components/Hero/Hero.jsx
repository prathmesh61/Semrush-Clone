import React from 'react'
import './Hero.scss'
import Slider from '../Slider/Slider.jsx'

const Hero = () => {
    return (
        <>
            <main className="hero">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <h1>Get measurable results<br /> from online marketing</h1>
                        <p>Do SEO, content marketing, competitor research,<br />
                            PPC and social media marketing from just one platform. </p>
                        <div className="hero_cta">
                            <input type="text" placeholder='Enter Domain,Keywords' />
                            <button className="orange-cta">Start Now</button>
                        </div>
                    </div>
                </div>
                <div className="light_purpal"></div>
                <div className="green"></div>
            </main>

        </>
    )
}

export default Hero