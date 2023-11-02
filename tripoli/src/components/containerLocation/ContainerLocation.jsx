import React from 'react'
import Monuments from '../vector/Monuments'
import style from './containerLocation.module.css'
import HotelContainer from '../HotelCard/HotelContainer'
// import About from '../aboutComponent/About.jsx'


export default function ContainerLocation(props) {
  const element = props.element
  return (
        <div>
            <div className={style.boxCol}>
                <div className={style.line}></div>
                <div className={style.vectParag}>
                  <Monuments />
                  <p>Discover Tripoli's Monuments</p>
                </div>
                <div className={style.line}></div>
            </div>
            <div className={style.card}>
              <HotelContainer element={element}/>
            </div>            
        </div>
  )
}

