import React from "react";
import styles from "./Hotel.module.css";
import hotel from "../../images/hotel.jpeg";
import HotelContainer from "../../components/HotelCard/HotelContainer";

function Hotel({ api }) {
  return (
    <div>
      <img src={hotel} alt="hotel" className={styles.image} />
      <HotelContainer elementArray={api} />
    </div>
  );
}

export default Hotel;
