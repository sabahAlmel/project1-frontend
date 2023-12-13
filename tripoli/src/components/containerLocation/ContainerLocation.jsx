import React from "react";
import Monuments from "../vector/Monuments";
import style from "./containerLocation.module.css";
import HotelContainer from "../HotelCard/HotelContainer";
import Activities from "../vector/Activities";
import Worshop from "../vector/Worshop";

export default function ContainerLocation(props) {
  const element = props.elementArray;
  let sentence = props.sentence || "Discover ";
  return (
    <div className={style.boxCol}>
      <div className={style.vectParag}>
        <div className={style.boxCol}>
          <div className={style.line}></div>
          <div className={style.vectParag}>
            <div>
              {props.vector == "monuments" ? (
                <Monuments />
              ) : props.vector === "activities" ? (
                <Activities />
              ) : (
                <Worshop />
              )}
            </div>
            <p>{sentence}</p>
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.card}>
          <HotelContainer elementArray={element} />
        </div>
      </div>
    </div>
  );
}
