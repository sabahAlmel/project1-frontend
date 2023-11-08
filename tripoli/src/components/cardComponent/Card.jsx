import luxuryHotel from "../../images/essentia-luxury-hotel.jpg";

import LocationIcon from "../vector/LocationIcon";

import style from "./card.module.css";

import CarIcon from "../vector/CarIcon";

const Card = ({ data }) => {
  console.log("data to card",data);
  // const data = props.data;

  return (
    <div>
      <div className={style.card}>
        <div className={style.overflow}>
          <a
            href={data.link}
            target="_blank"
            className={style.goToHotel} rel="noreferrer"
          >
            <img
              src={data.image}
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
            <p className={style.time}>{data.time} min</p>
          </div>
          <div className={style.priceButtun}>
            <p className={style.price}>{data.rating}</p>
            <a
              href={data.link}
              target="_blank"
              className={style.goToHotel} rel="noreferrer"
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
