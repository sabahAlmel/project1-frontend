import luxuryHotel from '../images/essentia-luxury-hotel.jpg'
import LocationIcon from './LocationIcon'
import style from './card.module.css'
import CarIcon from './CarIcon'
const card = () => {
    return (
        <div className={style.card}>
            <img src={luxuryHotel} alt="hotel_image" className={style.hotelImg}/>
            <div className={style.information}>
                <p className={style.title}>Hotel super winer 96</p>
                <div className={style.LocationIconStyle}>
                    <LocationIcon /><p className={style.location}>Tripoli, Al-Mina</p>
                </div>
                <div className={style.CarIconStayle}>
                    <CarIcon /><p className={style.time}>10 min from city center</p>
                </div>
                <div className={style.priceButtun}>
                    <p className={style.price}>$3/person</p>
                <a href='https://www.google.com' target='_blank' className={style.goToHotel}>
                    <button className={style.buttonView}>View</button>
                </a>
                </div>
            </div>
        </div>
    )
}
export default card
