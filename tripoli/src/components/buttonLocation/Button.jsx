import style from './Button.module.css'

import Monuments from '../vector/Monuments'

import { useEffect, useState } from 'react'

// import ContainerLocation from '../containerLocation/ContainerLocation'

const Button = ({buttonPressed}) => {
 

    return (
    <div className={style.buttonsPage}>
        <div className={style.buttons}>
            <div className={style.button} onClick={()=>{buttonPressed(1)}}>
                <Monuments />
                <span>Monuments</span>
            </div>
                <div className={style.button} onClick={()=>{buttonPressed(2)}}>
                <Monuments />
                <span>Monuments</span>
            </div>
                <div className={style.button} onClick={()=>{buttonPressed(3)}}>
                <Monuments />
                <span>Monuments</span>
            </div>
        </div>
        {/* <ContainerLocation /> */}
    </div>
  )
}

export default Button

