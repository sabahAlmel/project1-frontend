import Card from "../cardComponent/Card";
import styles from "./HotelContainer.module.css";

export default function HotelContainer(props) {
  const elementArray = props.elementArray;
  return (
    <div className={styles.card}>
      {elementArray.map((ele) => {
        return <Card data={ele} />;
      })}
    </div>
  );
}
