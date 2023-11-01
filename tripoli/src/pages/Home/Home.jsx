import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import HeroImage from "../../components/heroImage/HeroImage";
import About from "../../components/aboutComponent/About";
import Map from "../../components/Map/Map";
import Footer from "../../components/footer/Footer";
import testImage from "../../components/heroImage/tripoli.jpg";
import ContainerLocation from "../../components/containerLocation/ContainerLocation";
import TourCard from "../../components/TourCard/TourCard";

function Home({ api, tourApi }) {
  return (
    <>
      <Header />
      <HeroImage image={testImage} />
      <About direction="top" />
      <About direction="bottom" />

      <Map api={api} />
      <h3 className={styles.heading}>Hotel</h3>
      <ContainerLocation number="3" />
      <h3 className={styles.heading}>Tours</h3>
      <TourCard api={tourApi} home="true" />
      <Footer />
    </>
  );
}

export default Home;
