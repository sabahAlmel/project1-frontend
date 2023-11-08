import React from "react";
import Monuments from "../vector/Monuments";
import style from "./containerLocation.module.css";
import HotelContainer from "../HotelCard/HotelContainer";
import Card from "../cardComponent/Card";
import Activities from "../vector/Activities";
import Worshop from "../vector/Worshop";
// import About from '../aboutComponent/About.jsx'

export default function ContainerLocation(props) {
  const element = props.elementArray;
  let sentence = props.sentence || "Discover ";
  console.log("this is my element in container ", element);
  return (
    <div className={style.boxCol}>
      {/* <div className={style.line}></div> */}
      <div className={style.vectParag}>
        {/* <Monuments />
        <p>{sentence}</p> */}
        {/* <div> */}
        <div className={style.boxCol}>
          <div className={style.line}></div>
          <div className={style.vectParag}>
            <div>{props.vector =="monuments" ? <Monuments/> : ( props.vector === "activities" ? <Activities/>: <Worshop/>)}</div>
            <p>{sentence}</p>
            {/* <span className={style.monuments}> */}
            {/* <Monuments />
            </span>
            <p className={style.title}>Discover Tripoli's Monuments</p> */}
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.card}>
          {/* <Card data={element} />
          <Card data={element} />
          <Card data={element} /> */}
          <HotelContainer elementArray={element} />
        </div>
        {/* </div> */}
        {/* <div className={style.line}></div> */}
      </div>
      {/* <div className={style.card}>
        <HotelContainer elementArray={element} />
      </div> */}
    </div>
  );
}
