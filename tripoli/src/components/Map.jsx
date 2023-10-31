import styles from "./Map.module.css";
import WhenClick from "./WhenClick";
import React, { useState, useEffect } from "react";

const Map = ({ api }) => {
  let [displayImage, setDisplayImage] = useState("");
  let [hideImages, setHideImages] = useState("");
  let [name, setName] = useState("");
  let [source, setSource] = useState("");
  let [desc, setDesc] = useState("");

  let [responsiveStyle, setResponsiveStyle] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setResponsiveStyle("visible");
        setSource(api[0].heroImage);
        setName(api[0].title);
        setDesc(api[0].smallDescription);
      } else {
        setResponsiveStyle("");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setResponsiveStyle]);

  return (
    <div className={styles.map}>
      {api.map((element) => {
        if (hideImages === "") {
          return (
            <img
              key={element.title}
              src={element.heroImage}
              className={`${
                styles[element.title.split(" ")[0].toLowerCase()]
              } ${styles.first} }}`}
              alt="image"
              onClick={() => {
                setSource(element.heroImage);
                setName(element.title);
                setDesc(element.smallDescription);
                hideImages === "" ? setHideImages("hide") : setHideImages("");
                displayImage === ""
                  ? setDisplayImage("visible")
                  : setDisplayImage("");
              }}
            />
          );
        }
      })}
      {displayImage || responsiveStyle === "visible" ? (
        <WhenClick
          responsiveStyle={responsiveStyle}
          src={source}
          name={name}
          desc={desc}
          setHideImages={setHideImages}
          setDisplayImage={setDisplayImage}
          hideImages={hideImages}
          displayImage={displayImage}
        />
      ) : null}
    </div>
  );
};
export default Map;
