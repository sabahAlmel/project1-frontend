import Card from "../cardComponent/Card";
import styles from "./HotelContainer.module.css";

export default function HotelContainer({hotelapi}) {
  console.log("container",hotelapi)
  // const elementArray = props.elementArray;
  return (
    <div className={styles.card}>
      {hotelapi.map((ele) => {
        return <Card data={ele} />;
      })}
    </div>
  );
}
