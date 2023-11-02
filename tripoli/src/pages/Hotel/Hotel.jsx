import React from "react";
import styles from "./Hotel.module.css";
import hotel from "../../images/hotel.jpeg";
import HotelCard from "../../components/HotelCard/HotelContainer";

function Hotel() {
  return (
    <div>
      <img src={hotel} alt="hotel" className={styles.image} />
      <HotelCard />
    </div>
  );
}

export default Hotel;
