import React from "react";
import styles from "./TourCard.module.css";
import Card from "./Card";

function TourCard({ api }) {
  return (
    <div className={styles.tour}>
      {api.map((element) => {
        return <Card element={element} key={element.title} />;
      })}
    </div>
  );
}

export default TourCard;
