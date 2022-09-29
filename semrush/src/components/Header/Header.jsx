import React from 'react'
import './Header.scss'
import semrush from "/semrush-logo.png"
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from 'react'

const Header = () => {
    const [nav, setNav] = useState(false)
    const clickHandle = () => setNav(!nav)
    return (
        <header className='header'>
            <div className="header_wrapper">
                <div className="logo">
                    <img src={semrush} alt="" />
                </div>
                <ul className={nav ? "ul_item active" : "ul_item"}>
                    <li className="li_item">Resource</li>
                    <li className="li_item">Features</li>
                    <li className="li_item">SEO databases</li>
                    <li className="li_item">Contact</li>
                </ul>
                <div className="buttons">
                    <button className='border_cta'>Log in</button>
                    <button className='green_cta'>Sign Up</button>
                </div>
            </div>
            <div className="menu" ><RiMenu3Fill size={25} onClick={clickHandle} /></div>
        </header>
    )
}

export default Header