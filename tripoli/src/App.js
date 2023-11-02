import "./App.css";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import HeroImage from "./components/heroImage/HeroImage";

// import homePageImage from "./components/heroImage/tripoli.jpg";
import Locations from "./pages/locations/Locations";
import React from "react";
// import TourCard from "./components/TourCard/TourCard";

import { Route, Routes } from "react-router-dom";
// import Map from "./components/Map/Map";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Citadel from "./images/alaaTripoli.jpg";
import Mansouri from "./images/mansouri.jpg";
import Khan from "./images/khan.webp";
import Taynal from "./images/taynal.jpg";
import Mina from "./images/mina.jpg";
import Maarad from "./images/m3rad-900x473.jpg";
import Kazderni from "./images/Kazderni-.svg";
import mira from "./images/mira.svg";
import tour from "./images/tour 1.svg";
import trip from "./images/tripadvisor.svg";
import tripoli from "./images/tripoli.jpg";

// import Card from "./components/Card";
import Button from "./components/buttonLocation/Button";
// import About from "./components/About";
// import ContainerLocation from "./components/containerLocation/ContainerLocation";
function App() {
  let api = [
    {
      id: 1,
      title: "Tripoli citadel",
      smallDescription: "tall building build in 2023",
      heroImage: Citadel,
    },
    {
      id: 2,
      title: "Mansouri mosque",
      smallDescription: "an old mosque",
      heroImage: Mansouri,
    },
    {
      id: 3,
      title: "Taynal mosque",
      smallDescription: "the bese mosque",
      heroImage: Taynal,
    },
    {
      id: 4,
      title: "Mina port",
      smallDescription: "big port",
      heroImage: Mina,
    },
    {
      id: 5,
      title: "Maarad",
      smallDescription: "huge building build in 2020",
      heroImage: Maarad,
    },
    {
      id: 6,
      title: "Khan saboun",
      smallDescription: "most big saboun factory",
      heroImage: Khan,
    },
  ];
  let tourApi = [
    {
      id: 1,
      image: Kazderni,
      title: "kazderni",
      description: "big big kazderni description",
      link: "https://www.kazderni.com",
    },
    {
      id: 2,
      image: mira,
      title: "mira",
      description: "big big mira description",
      link: "https://www.mira.com",
    },
    {
      id: 3,
      image: tour,
      title: "Lebanon Tours and Travel",
      description: "big big Tour description",
      link: "https://www.hello.com",
    },
    {
      id: 4,
      image: trip,
      title: "Tripadvisor",
      description: "big big tripAdvisor description",
      link: "https://www.tripadvisor.com",
    },
    {
      id: 5,
      image: tripoli,
      title: "Hero image",
      description: "none",
      link: "don't need",
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/Locations"
          element={
            <Locations
              title="Baalback"
              address="there on the fifth street"
              time="60 minutes"
              rating="5"
              fee="$5"
              iconColor="#123456"
            ></Locations>
          }
        ></Route>
        <Route path="/" element={<Home api={api} tourApi={tourApi} />} />
        <Route path="tour" element={<Tour api={tourApi} />} />
      </Routes>
      <Footer />
      {/* <Header></Header> */}
      {/* <HeroImage image={homePageImage} alt="tripoli"></HeroImage> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
