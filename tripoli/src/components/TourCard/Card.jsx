import React from "react";
import styles from "./Card.module.css";

function Card({ element }) {
  return (
    <div className={styles.container}>
      <a href={element.link} target="_blank" className={styles.image}>
        <img
          src={`http://localhost:4000/${element.image}`}
          alt="this is image"
        />
      </a>
      <h2>{element.title}</h2>
      <p>{element.description}</p>
      <div className={styles.link}>
        <a href={element.link} target="_blank">
          Book now
        </a>
      </div>
    </div>
  );
}

export default Card;
