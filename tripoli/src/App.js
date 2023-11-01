import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Map from "./components/Map";

import Citadel from "./images/alaaTripoli.jpg";
import Mansouri from "./images/mansouri.jpg";
import Khan from "./images/khan.webp";
import Taynal from "./images/taynal.jpg";
import Mina from "./images/mina.jpg";
import Maarad from "./images/m3rad-900x473.jpg";

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

  return (
    <Routes>
      <Route path="/" element={<Map api={api} />} />
    </Routes>
  );
}

export default App;
