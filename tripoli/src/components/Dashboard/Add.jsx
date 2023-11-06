import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Dash.module.css";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", title);
      formDataToSend.append("description", description);
      formDataToSend.append("link", link);
      formDataToSend.append("image", image);

      const response = await axios.post(
        "http://localhost:4000/tours/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Item added:", response.data);
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
          <h2 className={styles.textDark}>New Heritage</h2>
          <span className={styles.textLight}>
            Use the form below to create a new Tour
          </span>
        </div>
        <form id={styles["addHeritage"]} encType="multipart/form-data">
          <div className={styles.newHeritage}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.textLight}>
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
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
                placeholder="description"
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
                placeholder="https://www.google.com"
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

export default Add;
