import aboutImg from "../../images/essentia-luxury-hotel.jpg";
import style from "./About.module.css";

const About = (props) => {
  let direction = props.direction;

  return (
    <>
      <div
        className={`${
          direction === "top" ? style.RowDisplay : style.RowReverseDispllay
        }`}
      >
        <img src={aboutImg} className={style.aboutImage} alt="about" />
        <div>
          <h1 className={style.title}>ABOUT VISIT TRIPOLI</h1>
          <p className={style.paragAbout}>
            Welcome to Discovering Tripoli's Heritage, a platform dedicated to
            showcasing the cultural and historical marvels of Tripoli, Lebanon.
            Our aim is to take you on a virtual journey through the ancient past
            and vibrant present of this captivating city, shedding light on its
            diverse heritage and timeless beauty.
          </p>
        </div>
      </div>
      <hr className={`${direction === "top" ? style.line : style.remove}`} />
    </>
  );
};
export default About;
