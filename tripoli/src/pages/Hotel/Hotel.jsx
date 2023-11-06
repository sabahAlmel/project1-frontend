import React from "react";
import styles from "./Hotel.module.css";
import hotel from "../../images/hotel.jpeg";
import HeroImage from "../../components/heroImage/HeroImage";
import HotelContainer from "../../components/HotelCard/HotelContainer";

function Hotel({ api }) {
  return (
    <div>
      <HeroImage image={hotel} />
      <HotelContainer elementArray={api} />
    </div>
  );
}

export default Hotel;
