import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import HeroImage from './components/heroImage/HeroImage';

import homePageImage from './components/heroImage/tripoli.jpg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Locations from './pages/locations/Locations'

function App() {
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
