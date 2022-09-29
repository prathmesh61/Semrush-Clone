import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer_wrapper">
                <div className="footer_up">
                    <div className="footer_border-cta">
                        <button>Contact Us</button>
                        <p>USA, 800 Boylston Street, Suite 2475, Boston, MA 02199</p>
                    </div>
                    <div className="footer_green-cta">
                        <button className='orange'>Get Started With Semrush</button>
                    </div>
                </div>
                <div className="footer_links-container">
                    <div className="footer_links">
                        <ul className="semrush_links">
                            <h3>Semrush</h3>
                            <li>Features</li>
                            <li> Pricing</li>
                            <li>Stats and Facts</li>
                            <li>Data Studies</li>
                            <li> News</li>
                            <li> Custom Report</li>
                        </ul>
                        <ul className="Help_links">
                            <h3>Help</h3>
                            <li> Knowledge Base </li>
                            <li> Academy </li>
                            <li>Semrush API</li>
                            <li>Data Studies</li>

                        </ul>
                        <ul className="Community_links">
                            <h3> Community</h3>
                            <li>Semrush Blog </li>
                            <li> Webinars  </li>
                            <li>Semrush API</li>
                            <li>Events </li>

                        </ul>
                        <ul className="Social_links">
                            <h3> Follow Us</h3>
                            <li> Instagram </li>
                            <li> Youtube  </li>
                            <li>Linkedin API</li>
                            <li>Pinterest </li>
                            <li>Facebook </li>

                        </ul>
                    </div>
                </div>
                <div className="footer_end">
                    <p> @2008 - 2022 Semrush. All rights reserved. </p>
                </div>
            </div>
        </section>
    )
}

export default Footer