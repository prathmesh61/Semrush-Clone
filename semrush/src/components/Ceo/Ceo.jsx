import React from 'react'
import './Ceo.scss'
import ceo from '../../assets/ceo.png'
import { TbArrowUpRightCircle } from 'react-icons/tb'

const Ceo = () => {
    return (
        <section className="ceo">
            <div className="ceo_wrapper">
                <div className="ceo_left">
                    <img src={ceo} alt="" />
                </div>
                <div className="ceo_right">
                    <h3>Our CEO will eat his hat </h3>
                    <p> ... if you find another tool that lets you do all these things </p>
                    <ul className="ul_item">
                        <li><TbArrowUpRightCircle className='orange' /> Access over 22 billion keywords for 130 countries </li>
                        <li><TbArrowUpRightCircle className='orange' /> Run in-depth website audit based on 130+ checks </li>
                        <li><TbArrowUpRightCircle className='orange' /> Get recommendations to improve your content to increase search rankings </li>
                        <li><TbArrowUpRightCircle className='orange' />
                            Track and analyze competitor websites and marketing strategies </li>
                        <li>
                            <TbArrowUpRightCircle className='orange' /> Create and track your PPC campaigns </li>
                        <li><TbArrowUpRightCircle className='orange' /> Draft, schedule and post content on social </li>
                        <li>
                            <TbArrowUpRightCircle className='orange' /> Create and schedule white-labeled or branded reports </li>
                    </ul>
                    <button>Discover Semrush More</button>
                </div>

            </div>
        </section>
    )
}

export default Ceo