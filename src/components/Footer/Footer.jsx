import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_items">
            
            <div className="footer_left">
            <img src={assets.logo} alt="" id='footer_logo' />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis, recusandae laborum dolore corrupti, voluptas inventore tempora atque culpa quibusdam soluta omnis facilis nobis quos architecto. Excepturi, facere earum?
            </p>
            <div className="social_link">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer_middle">
                <h2>
                    company
                </h2>
                <ul>
                <li>
                    home
                </li>
                <li>
                    about us
                </li>
                <li>
                    delivery
                </li>
                <li>
                    privacy policy
                </li>
                </ul>
            </div>
            <div className="footer_right">
                <h2>get in touch</h2>
                <ul>
                    <li>+123 12345 67890</li>
                    <li>contactme@tomato.co.in</li>
                </ul>
            </div>
        </div>
        <div className="footer_bottom">
            <p>
                copyright2024@tomato.com*all rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer