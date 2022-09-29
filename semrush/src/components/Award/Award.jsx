import React from 'react'
import './Award.scss'

const Award = () => {
    return (
        <section className="award">
            <div className="award_title">
                <h2>Award-winning tools trusted<br /> by the world’s leading companies</h2>
            </div>
            <div className="award_wrapper">
                <div className="award_box">
                    <h3>10M</h3>
                    <p className='bold'>marketing professionals </p>
                    <p className='italic'>have already used Semrush </p>
                </div>
                <div className="award_box">
                    <h3>21</h3>
                    <p className='bold'>international awards  </p>
                    <p className='italic'>as best SEO software suite  </p>
                </div>
                <div className="award_box">
                    <h3>30%</h3>
                    <p className='bold'>Fortune 500 companies </p>
                    <p className='italic'>use Semrush as their go-to<br /> marketing tool </p>
                </div>
            </div>
            <div className="red-circel"></div>
            <div className="yellow-circel"></div>
            <div className="light-green-circel"></div>
        </section>
    )
}

export default Award