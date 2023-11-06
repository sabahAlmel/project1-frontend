import React from "react";
import styles from "./TourCard.module.css";
import Card from "./Card";

function TourCard({ api, home }) {
  let newApi;
  if (home === "true") {
    newApi = api.slice(0, 3);
  } else {
    newApi = api;
  }
  return (
    <div className={styles.tour}>
      {newApi.map((element) => {
        if (element.title !== "Hero image")
          return <Card element={element} key={element.title} />;
        else if (element.title == "Hero image" && home == "false") {
          return (
            <img
              src={`http://localhost:4000/${element.image}`}
              alt="hero of tours"
              className={styles.hero}
            />
          );
        }
      })}
    </div>
  );
}

export default TourCard;
