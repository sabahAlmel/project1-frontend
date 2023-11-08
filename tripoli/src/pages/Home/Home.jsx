import React from "react";
import styles from "./Home.module.css";
import HeroImage from "../../components/heroImage/HeroImage";
import About from "../../components/aboutComponent/About";
import Map from "../../components/Map/Map";
import testImage from "../../components/heroImage/tripoli.jpg";
import TourCard from "../../components/TourCard/TourCard";
import { Link } from "react-router-dom";
import HotelContainer from "../../components/HotelCard/HotelContainer";

function Home({ api, tourApi, elementArray }) {
  let newApi = elementArray.slice(0, 3);
  // let new2Api = elementArray.slice(0, 6);
  return (
    <>
      <HeroImage image={testImage} home={true} />
      <About direction="top" />
      <About direction="bottom" />

      <Map api={api} />
      <h3 className={styles.heading}>Hotel</h3>
      <HotelContainer elementArray={newApi} />
      <Link to="/hotels" className={styles.link}>
        View more &gt;&gt;
      </Link>
      <h3 className={styles.heading}>Tours</h3>
      <TourCard api={tourApi} home="true" />
      <Link to="/tours" className={styles.link}>
        View more &gt;&gt;
      </Link>
    </>
  );
}

export default Home;
