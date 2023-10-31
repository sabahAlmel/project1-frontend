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
      title: "Tripoli citadel",
      smallDescription: "tall building build in 2023",
      heroImage: Citadel,
    },
    {
      title: "Mansouri mosque",
      smallDescription: "an old mosque",
      heroImage: Mansouri,
    },
    {
      title: "Taynal mosque",
      smallDescription: "the bese mosque",
      heroImage: Taynal,
    },
    { title: "Mina port", smallDescription: "big port", heroImage: Mina },
    {
      title: "Maarad",
      smallDescription: "huge building build in 2020",
      heroImage: Maarad,
    },
    {
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
