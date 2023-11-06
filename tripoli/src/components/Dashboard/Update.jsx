import React, { useEffect } from "react";
import axios from "axios";
import styles from "./Dash.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Update({ api }) {
  let { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    api.map((element) => {
      if (element.id == id) {
        console.log(element);
        return (
          setTitle(element.title),
          setDescription(element.description),
          setLink(element.link),
          setImage(element.image)
        );
      }
    });
  }, []);

  // const element = api.find({ id: id });
  // console.log(element);
  // setTitle(element.title);
  // setDescription(element.description);
  // setLink(element.link);
  // setImage(element.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(title, description, link, image);
      let formDataToSend = new FormData();
      formDataToSend.append("title", title);
      formDataToSend.append("description", description);
      formDataToSend.append("link", link);
      formDataToSend.append("image", image);
      console.log(formDataToSend);
      const response = await axios.put(
        `http://localhost:4000/tours/update/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Item updated:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <main id={styles["siteMain"]}>
      <div className={styles.containerDash}>
        <div
          className={`${styles.boxNav} ${styles.dFlex} ${styles.justifyBewteen}`}
        >
          <div className={styles.filter}>
            <Link to="/admin/tours">
              <i className="fas fa-angle-double-left"></i> All Heritage
            </Link>
          </div>
        </div>
        <div className={`${styles.formTitle} ${styles.textCenter}`}>
          <h2 className={styles.textDark}>Update Heritage</h2>
          <span className={styles.textLight}>
            Use The below form to update a Tour
          </span>
        </div>
        <form id={styles["updateHeritage"]} encType="multipart/form-data">
          <div className={styles.newHeritage}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.textLight}>
                Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.textLight}>
                Description
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="link" className={styles.textLight}>
                Link
              </label>
              <input
                type="text"
                name="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="image" className={styles.textLight}>
                Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className={styles.formGroup}>
              <button
                type="submit"
                className={`${styles.btn} ${styles.textDark} ${styles.update}`}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Update;
