import React from 'react'
import './Review.scss'
import { ReviewData } from '../../common/ReviewData';
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi'
import { useState } from 'react';
import { useEffect } from 'react';

const Review = () => {
    const [index, setIndex] = useState(0);
    const images = ReviewData

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => { };
    }, [index]);

    return (
        <>
            <div className="review_title">
                <h2>Here’s why marketers 🧡 Semrush</h2>
            </div>
            <section className="review" >
                <div className="review_wrapper"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((item, index) => (
                        <img src={item.img} className='slide' key={index} alt="" />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Review