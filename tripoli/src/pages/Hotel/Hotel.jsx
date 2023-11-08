import React, { useState,useEffect } from "react";
import styles from "./Hotel.module.css";
import hotel from "../../images/hotel.jpeg";
import HotelContainer from "../../components/HotelCard/HotelContainer";
import axios from 'axios';
// import Card from "../../components/cardComponent/Card";


function Hotel({hotelapi}) {
  console.log("HOTLES:", hotelapi)
//   const [hotels, setHotels] = useState([])
//   const getHotels = () => {
//     axios.get("http://localhost:4000/api/hotel")
//     .then(res => {
//       console.log('ho')
//         setHotels(res)
//         console.log(hotels)
      
//     })
//   }
// useEffect(()=>{
//   getHotels()
  
// },[])

// const cards = hotels.map(item => {
//   return(
//     <Card
//       image={item.image}
//       rating={item.rating}
//       title={item.title}
//       time={item.time}
//       link={item.link}
//       key={item._id}
//     />
//   )
// })
  return (
    <div>
      <img src={hotel} alt="hotel" className={styles.image} />
      <HotelContainer hotelapi={hotelapi} />
      {/* {cards} */}
    </div>
  )

  }

export default Hotel;
