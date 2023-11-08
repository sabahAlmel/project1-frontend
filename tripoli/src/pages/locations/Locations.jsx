import React, { useEffect, useState } from "react";
import LocationCSS from "./Locations.module.css";
import Header from "../../components/header/Header";
import HeroImage from "../../components/heroImage/HeroImage";
import homePageImage from "../../components/heroImage/tripoli.jpg";
import Car from "../../components/SVGComponents/Car";
import MapIcon from "../../components/SVGComponents/MapIcon";
import Star from "../../components/SVGComponents/Star";
import Money from "../../components/SVGComponents/Money";

// import test from '../../components/heroImage/tripoli.png'
import testImages from "../locations/testImages/testImages";
// console.log(testImages)
import ImageSlider from "../../components/slider/ImageSlider";
import { useParams } from "react-router-dom";

export default function Locations(props) {
  // let mywidth = 500;
  // let myheight = 300;
  const [myWidth, setMyWidth] = useState(500);
  const [myHeight, setMyHeight] = useState(300);
  let {id} = useParams();
  let thisLocation;

  const allLocations = props.element;

  allLocations.map((element)=>{
    if(element._id == id ){
      thisLocation = element;
      return;
    }
  })

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) {
        setMyWidth(window.innerWidth * 0.9);
      }
      if (window.innerWidth < 400) {
        setMyHeight(350);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  let iconColor = props.iconColor || "#111";

  let title = thisLocation.title;
  let address = thisLocation.address;
  let timeFromCityCenter = thisLocation.timeFromCenter;
  let rating = thisLocation.googleRating;
  let entranceFee = thisLocation.entranceFee;
  let geoLocation = thisLocation.geoLocation;
  let thisImageArray = thisLocation.images;

  let testPath = "././tripoli.jpg";

  return (
    <>
      <Header></Header>
      <HeroImage image={thisLocation.heroImage} title="helloo" alt="tripoli"></HeroImage>
      <div className={LocationCSS.locationContainer}>
        <h1>{title}</h1>
        <div className={LocationCSS.infoContainer}>
          <ul className={LocationCSS.infoList}>
            <li>
              <span className={LocationCSS.infoSpans}>
                <MapIcon color={iconColor}></MapIcon>Location{" "}
              </span>
              <div>{address}</div>
            </li>
            <li>
              <span className={LocationCSS.infoSpans}>
                <Car color={iconColor}></Car>Time from city center{" "}
              </span>
              <div>{timeFromCityCenter}</div>
            </li>
            <li>
              <span className={LocationCSS.infoSpans}>
                <Star color={iconColor}></Star>Rating on Google{" "}
              </span>
              <div>{rating}</div>
            </li>
            <li>
              <span className={LocationCSS.infoSpans}>
                <Money color={iconColor}></Money>Entrance Fee{" "}
              </span>
              <div>{entranceFee}</div>
            </li>
          </ul>
          <div className={LocationCSS.mapDiv}>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3290.737886284978!2d${geoLocation[1]}!3d${geoLocation[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1698824057752!5m2!1sen!2slb`}
              width="500"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <article className={LocationCSS.article}>
          <p>
            {thisLocation.description}
          </p>
        </article>
        <div className={LocationCSS.mainSlider}>
          <ImageSlider images={thisImageArray} />
        </div>
      </div>
    </>
  );
}
