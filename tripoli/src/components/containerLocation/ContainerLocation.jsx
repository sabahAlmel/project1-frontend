import React from 'react'
import Monuments from '../vector/Monuments'
import Card from '../cardComponent/Card'
import style from './containerLocation.module.css'
import About from '../aboutComponent/About.jsx'


export default function ContainerLocation() {
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>            
        </div>
  )
}

