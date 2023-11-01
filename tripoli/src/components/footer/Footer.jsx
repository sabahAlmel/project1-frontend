import React, { useState } from 'react'
import FooterCSS from './Footer.module.css'
import Logo from '../SVGComponents/Logo'

import Whatsapp from '../SVGComponents/socialMedia/Whatsapp'
import Instagram from '../SVGComponents/socialMedia/Instagram'
import Facebook from '../SVGComponents/socialMedia/Facebook'
import Twitter from '../SVGComponents/socialMedia/Twitter'

export default function Footer() {

  const [iconHoveredFacebook, setIconHoveredFacebook] = useState(false);
  const [iconHoveredWhatsapp, setIconHoveredWhatsapp] = useState(false);
  const [iconHoveredTwitter, setIconHoveredTwitter] = useState(false);
  const [iconHoveredInstagram, setIconHoveredInstagram] = useState(false);


  const handleFacebookIcon = (e)=>{
    if(iconHoveredFacebook){
      setIconHoveredFacebook(false);
    } else {
      setIconHoveredFacebook(true);
    }
  }
  const handleTwitterIcon = (e)=>{
    if(iconHoveredTwitter){
      setIconHoveredTwitter(false);
    } else {
      setIconHoveredTwitter(true);
    }
  }
  const handleWhatsappIcon = (e)=>{
    if(iconHoveredWhatsapp){
      setIconHoveredWhatsapp(false);
    } else {
      setIconHoveredWhatsapp(true);
    }
  }
  const handleInstagramIcon = (e)=>{
    if(iconHoveredInstagram){
      setIconHoveredInstagram(false);
    } else {
      setIconHoveredInstagram(true);
    }
  }

  return (
    <footer className={FooterCSS.footerMainStyle}>
      <div className={FooterCSS.divContainer}>
        <div className={FooterCSS.footerLeft}>
          <Logo place="footer"></Logo>
          <p>We provide assistance for obtaining travel, 
            education, and business travel visas to any country in the world.</p>
        </div>
        <div className={FooterCSS.footerCenter}>
          <h2>Navigate</h2>
          <ul>
          <li>Locations</li>
          <li>Hotels</li>
          <li>Tours</li>
          <li>Map</li>
          </ul>
        </div>
        <div className={FooterCSS.footerRight}>
          <h2>Resources</h2>
          <ul>
          <li><a href='#'>Flights</a></li>
          <li><a href='#'>Hotels</a></li>
          <li><a href='#'>Map</a></li>
          <li><a href='#'>News</a></li>
          </ul>
        </div>
        <div className={FooterCSS.socialMedia}>
          <h2>Connect With Us</h2>
            <ul>
            <li onMouseEnter={handleWhatsappIcon} onMouseLeave={handleWhatsappIcon}><a href='#'><Whatsapp hovered={iconHoveredWhatsapp}></Whatsapp></a></li>
            <li onMouseEnter={handleInstagramIcon} onMouseLeave={handleInstagramIcon}><a href='#'><Instagram hovered={iconHoveredInstagram}></Instagram></a></li>
            <li onMouseEnter={handleFacebookIcon} onMouseLeave={handleFacebookIcon}><a href='#'><Facebook hovered={iconHoveredFacebook}></Facebook></a></li>
            <li onMouseEnter={handleTwitterIcon} onMouseLeave={handleTwitterIcon}><a href='#'><Twitter hovered={iconHoveredTwitter}></Twitter></a></li>
            </ul>
        </div>
      </div>
      <div className={FooterCSS.rightsSection}>
        <span>© 2023 Codi T04 | All Rights Reserved</span>
      </div>
    </footer>
  )
}
