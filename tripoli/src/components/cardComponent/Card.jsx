import luxuryHotel from "../../images/essentia-luxury-hotel.jpg";

import LocationIcon from "../vector/LocationIcon";

import style from "./card.module.css";

import CarIcon from "../vector/CarIcon";

const Card = ({data}) => {
  console.log("data to card")
  // const data = props.data;

  return (
    <div>
      <div className={style.card}>
        <div className={style.overflow}>
          <a
            href="https://www.google.com"
            target="_blank"
            className={style.goToHotel}
          >
            <img
              src={data.heroImage}
              alt="hotel_image"
              className={style.hotelImg}
            />
          </a>
        </div>
        <div className={style.information}>
          <p className={style.title}>{data.title}</p>
          <div className={style.LocationIconStyle}>
            <LocationIcon />
            <p className={style.location}>{data.address}</p>
          </div>
          <div className={style.CarIconStayle}>
            <CarIcon />
            <p className={style.time}>{data.timeFromCenter}</p>
          </div>
          <div className={style.priceButtun}>
            <p className={style.price}>{data.entranceFee}</p>
            <a
              href="https://www.google.com"
              target="_blank"
              className={style.goToHotel}
            >
              <button className={style.buttonView}>View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
