import React from 'react'
import './Slider.scss'
import { useState } from 'react'
import { Sliderdata } from '../../common/SliderData'
import { useEffect } from 'react'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const image = Sliderdata

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === image.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => { };
    }, [index]);



    return (
        <>
            <section className='main_slider'>
                <div className="slider_title">
                    <h2>See what's inside</h2>
                </div>

                <div className="slider" >
                    <div className="slider_wrapper"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {image.map((item, index) => (
                            <img src={item.img} className='slide' key={index} alt="" />
                        ))}

                    </div>
                </div>

            </section>
        </>
    )
}

export default Slider