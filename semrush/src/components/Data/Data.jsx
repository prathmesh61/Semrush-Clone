import React from 'react'
import './Data.scss'
import data from '../../assets/data-img.png'

const Data = () => {
    return (
        <section className="data">
            <div className="data_wrapper">
                <div className="data_left">
                    <h3>More data. More insights </h3>
                    <p>With the size of our SEO databases and speed of our<br /> backlink crawler, imagine what you can achieve if you have<br /> the insights your competitors don’t. </p>
                    <button>Learn More</button>
                </div>
                <div className="data_right">
                    <img src={data} alt="data-img" />
                </div>
            </div>
        </section>
    )
}

export default Data