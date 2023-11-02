import style from './Button.module.css'

import Monuments from '../vector/Monuments'

import { useState } from 'react'

// import ContainerLocation from '../containerLocation/ContainerLocation'

const Button = () => {
    const [monument, setMonument] = useState('')

    const [islands, setisLands] = useState('')

    const [mosques, setMosques] = useState('')

    return (
    <div className={style.buttonsPage}>
        <div className={style.buttons}>
            <div className={style.button} onClick={() => setMonument()}>
                <Monuments />
                <span>Monuments</span>
            </div>
                <div className={style.button}>
                <Monuments />
                <span>Monuments</span>
            </div>
                <div className={style.button}>
                <Monuments />
                <span>Monuments</span>
            </div>
        </div>
        {/* <ContainerLocation /> */}
    </div>
  )
}

export default Button

