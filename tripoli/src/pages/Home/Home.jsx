import React from "react";
import styles from "./Home.module.css";
import HeroImage from "../../components/heroImage/HeroImage";
import About from "../../components/aboutComponent/About";
import Map from "../../components/Map/Map";
import testImage from "../../components/heroImage/tripoli.jpg";
import ContainerLocation from "../../components/containerLocation/ContainerLocation";
import TourCard from "../../components/TourCard/TourCard";
import { Link } from "react-router-dom";

function Home({ api, tourApi }) {
  return (
    <>
      <HeroImage image={testImage} />
      <About direction="top" />
      <About direction="bottom" />

      <Map api={api} />
      <h3 className={styles.heading}>Hotel</h3>
      <ContainerLocation />
      <Link to="/hotel" className={styles.link}>
        View more &gt;&gt;
      </Link>
      <h3 className={styles.heading}>Tours</h3>
      <TourCard api={tourApi} home="true" />
      <Link to="/tour" className={styles.link}>
        View more &gt;&gt;
      </Link>
    </>
  );
}

export default Home;
