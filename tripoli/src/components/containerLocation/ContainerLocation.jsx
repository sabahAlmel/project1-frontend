import React from "react";
import Monuments from "../vector/Monuments";
import style from "./containerLocation.module.css";
import HotelContainer from "../HotelCard/HotelContainer";
// import About from '../aboutComponent/About.jsx'

export default function ContainerLocation(props) {
  const element = props.elementArray;
  let sentence = props.sentence || "Discover ";
  console.log("this is my element in container ", element);
  return (
    <div>
      <div className={style.boxCol}>
        <div className={style.line}></div>
        <div className={style.vectParag}>
          <Monuments />
          <p>{sentence}</p>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.card}>
        <HotelContainer elementArray={element} />
      </div>
    </div>
  );
}
