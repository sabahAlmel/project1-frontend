import { Link } from "react-router-dom";
import styles from "./WhenClick.module.css";

const WhenClick = ({
  responsiveStyle,
  src,
  name,
  desc,
  setDisplayImage,
  setHideImages,
  hideImages,
  displayImage,
}) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        if (responsiveStyle === "") {
          hideImages === "" ? setHideImages("hide") : setHideImages("");
          displayImage === ""
            ? setDisplayImage("visible")
            : setDisplayImage("");
        }
      }}
    >
      <div className={styles.layer}>
        <img src={`http://localhost:4000/${src}`} alt="this is image" />
        <div className={styles.bubble}>
          <h3>{name}</h3>
          <p>{desc}</p>
          <Link to={`/location/${name.split(" ")[0].toLowerCase()}`}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WhenClick;
