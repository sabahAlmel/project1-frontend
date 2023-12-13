import React from "react";
import HeroImage from "../../components/heroImage/HeroImage";
import TourCard from "../../components/TourCard/TourCard";
import tour from "../../images/tripoli.jpg";

function Tour({ api }) {
  return (
    <>
      <HeroImage image={tour} tours={true} />
      <TourCard api={api} home="false" />
    </>
  );
}

export default Tour;
