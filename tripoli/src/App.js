import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import HeroImage from './components/heroImage/HeroImage';

import homePageImage from './components/heroImage/tripoli.jpg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Locations from './pages/locations/Locations'

function App() {

  let locationApi = [{
    id: 1,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  {
    id: 2,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  {
    id: 0,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  {
    id: 1,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },  {
    id: 2,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  {
    id: 1,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  {
    id: 0,
    title: "Test Api title",
    address: "the test address",
    timeFromCenter: "5min",
    googleRating: 5,
    entranceFee: "$5",
    description: "This is my long description",
    smallDescription: "this is my short description",
    geoLocation: [1.5,2.5],
    images:["aaa","bbb"],
    heroImage: homePageImage,
  },
  
]



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Locations" element={<Locations title="Baalback" address="there on the fifth street" time="60 minutes" rating="5" fee="$5" iconColor="#123456"></Locations>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Header></Header> */}
    {/* <HeroImage image={homePageImage} alt="tripoli"></HeroImage> */}
    {/* <Footer></Footer> */}
    
    </>
  );
}

export default App;
