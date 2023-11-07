import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import homePageImage from "./components/heroImage/tripoli.jpg";
import Locations from "./pages/locations/Locations";
import React from "react";
import NotFound from "./components/Not Found/NotFound";

import { Route, Routes } from "react-router-dom";
// import Map from "./components/Map/Map";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Hotel from "./pages/Hotel/Hotel";
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
import AllLocations from "./pages/AllLocations/AllLocations";
import Dashboard from "./components/Dashboard/Dashboard";
import Add from "./components/Dashboard/Add";
import Update from "./components/Dashboard/Update";
import ContainerOfThePage from "./components/ContainerOfThePage/ContainerOfThePage";
import RecursiveTree from "./components/recursive/RecursiveTree";

function App() {
  let [tourApi, setTourApi] = useState([]);
  let [locationApi, setLocationApi] = useState([]);

  // let locationApi = [
  //   {
  //     id: 1,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 1,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 1,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 2,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 2,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 2,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  //   {
  //     id: 3,
  //     title: "Test Api title",
  //     address: "the test address",
  //     timeFromCenter: "5min",
  //     googleRating: 5,
  //     entranceFee: "$5",
  //     description: "This is my long description",
  //     smallDescription: "this is my short description",
  //     geoLocation: [1.5, 2.5],
  //     images: ["aaa", "bbb"],
  //     heroImage: homePageImage,
  //   },
  // ];

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


  // let tourApi = [
  //   {
  //     id: 1,
  //     image: Kazderni,
  //     title: "kazderni",
  //     description: "big big kazderni description",
  //     link: "https://www.kazderni.com",
  //   },
  //   {
  //     id: 2,
  //     image: mira,
  //     title: "mira",
  //     description: "big big mira description",
  //     link: "https://www.mira.com",
  //   },
  //   {
  //     id: 3,
  //     image: tour,
  //     title: "Lebanon Tours and Travel",
  //     description: "big big Tour description",
  //     link: "https://www.hello.com",
  //   },
  //   {
  //     id: 4,
  //     image: trip,
  //     title: "Tripadvisor",
  //     description: "big big tripAdvisor description",
  //     link: "https://www.tripadvisor.com",
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/tours");
        setTourApi(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    async function fetchLocation() {
      try {
        const response = await axios.get("http://localhost:4000/locations");
        setLocationApi(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLocation();

  }, []);
  // console.log(tourApi);
  console.log(locationApi)

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ContainerOfThePage />}>
          <Route
            index
            path="/"
            element={
              <Home api={api} tourApi={tourApi} elementArray={locationApi} />
            }
          />
          <Route path="tours" element={<Tour api={tourApi} />} />
          <Route
            path="hotels"
            element={<Hotel api={locationApi} home="false" />}
          />
          <Route
            path="locations"
            element={<AllLocations api={locationApi} />}
          />
          <Route
            path="/Location"
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
          />
        </Route>

        <Route path="/admin/tours" element={<Dashboard />} />
        <Route path="/admin/tours/update/:id" element={<Update />} />
        <Route path="/admin/tours/add" element={<Add />} />
        <Route path="/demo" element={<RecursiveTree label="Root" depth={3} />} /> {/*delete*/}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      {/* <Header></Header> */}
      {/* <HeroImage image={homePageImage} alt="tripoli"></HeroImage> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
