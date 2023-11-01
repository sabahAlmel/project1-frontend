import React, { useState } from 'react'
import Logo from '../SVGComponents/Logo'
import HeaderCSS from './Header.module.css'
import MapIcon from '../SVGComponents/MapIcon'

export default function Header() {
  const [locationsTrigger, setLocationsTrigger] = useState(false);
  const [mapHovered, setMapHovered] = useState(false);

  const handleLocations = (e)=>{
    if(locationsTrigger){
      setLocationsTrigger(false);
    } else {
      setLocationsTrigger(true);
    }

  }

  const handleMapIcon = (e)=>{
    e.preventDefault();
    if(mapHovered){
      setMapHovered(false);
    } else {
      setMapHovered(true);
    }
  }

  return (
    <header className={HeaderCSS.headerMainStyle}>
      <div className={HeaderCSS.logoContainer}><a  href='#'><Logo></Logo></a></div>
      <nav className={HeaderCSS.navMainStyle}>
        <ul className={HeaderCSS.navUl}>
          <li onClick={handleLocations}>
            <div className={HeaderCSS.locationsTrigger}>
                {locationsTrigger ?
                  <>
                    <div>Locations</div> 
                    <i class="fa fa-caret-up"></i> 
                    <div className={HeaderCSS.locationsList}>
                      <a>Monuments</a>
                      <a>Activities</a>
                      <a>Places of Worship</a>
                    </div>
                  </>
                : 
                  <>
                    <div>Locations</div> 
                    <i class="fa fa-caret-down"></i>
                  </>
                }
              
            </div>
          </li>
          <li><a href='#'>Hotels</a></li>
          <li><a href='#'>Tours</a></li>
          <li onMouseEnter={handleMapIcon} onMouseLeave={handleMapIcon}><a href='#'><MapIcon place="header" hovered={mapHovered}></MapIcon></a></li>
        </ul>
      </nav>
    </header>
  )
}
