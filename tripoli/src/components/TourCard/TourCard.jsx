import React from "react";
import styles from "./TourCard.module.css";
import Card from "./Card";

function TourCard({ api, home }) {
  let newApi;
  if (home === "true") {
    newApi = api.slice(0, 2);
  } else {
    newApi = api;
  }
  return (
    <div className={styles.tour}>
      {newApi.map((element) => {
        if (element.title !== "Hero image")
          return <Card element={element} key={element.title} />;
      })}
    </div>
  );
}

export default TourCard;
