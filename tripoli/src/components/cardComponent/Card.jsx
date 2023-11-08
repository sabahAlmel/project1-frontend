import LocationIcon from "../vector/LocationIcon";
import style from "./card.module.css";
import CarIcon from "../vector/CarIcon";
import Star from "..//SVGComponents/Star"


const Card = ({ data, type }) => {
  // console.log("data to card",data);
  // const data = props.data;
let cardImage = "";
let cardTime = "";
let cardRating = "";
let locationId = data._id;
if(type === "hotel"){
  cardImage = data.image;
  cardTime = data.time;
  cardRating = data.rating;
}
if(type ==="location"){
  cardImage = data.heroImage;
  cardTime = data.timeFromCenter;
  cardRating = data.googleRating;

}
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
              src={`http://localhost:4000/${cardImage}`}
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
            <p className={style.time}>{cardTime} {type ==='hotel' ? <>min</> : ""}</p>
          </div>
          <div className={style.priceButtun}>
            <div className={style.starRatiang}>
            <Star color="#ffd700"/>
            <p className={style.price}>{cardRating}</p>
            </div>
            {type==="hotel" ?
            <a
              href={data.link}
              target="_blank"
              className={style.goToHotel} rel="noreferrer"
            >
              <button className={style.buttonView}>View</button>
            </a>

            :
            
            <a
            href={`/location/${locationId}`}
            
            className={style.goToHotel} rel="noreferrer"
          >
            <button className={style.buttonView}>View</button>
          </a>
                }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
