import Card from "../cardComponent/Card";
import styles from "./HotelContainer.module.css";

export default function HotelContainer({hotelapi,elementArray}) {
  console.log("container",hotelapi)
  // const elementArray = props.elementArray;
  return (
    <>
    { hotelapi ?
    <div className={styles.card}>
      {hotelapi.map((ele) => {
        return <Card type="hotel" data={ele} />;
      })}
    </div> : (elementArray ?
    <div className={styles.card}>
    {elementArray.map((ele) => {
      return <Card type="location" data={ele} />;
    })}
  </div>
  :null)
    }
    </>
  );
}
