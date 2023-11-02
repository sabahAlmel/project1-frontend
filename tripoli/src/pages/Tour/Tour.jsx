import React from "react";
import styles from "./Tour.module.css";
import HeroImage from "../../components/heroImage/HeroImage";
import TourCard from "../../components/TourCard/TourCard";

function Tour({ api }) {
  let source = "";
  api.map((element) => {
    if (element.title == "Hero image") {
      source = element.image;
    }
  });

  return (
    <>
      <img src={source} className={styles.img} alt="tripoli image" />
      {/* <HeroImage image={source} /> */}
      <TourCard api={api} home="false" />
    </>
  );
}

export default Tour;
