import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <main id="siteMain">
      <div className="container">
        <div className="boxNav dFlex justifyBewteen">
          <div className="filter">
            <Link to="/admin/tours">
              <i className="fas fa-angle-double-left"></i> All Heritage
            </Link>
          </div>
        </div>
        <div className="formTitle textCenter">
          <h2 className="textDark">New Heritage</h2>
          <span className="textLight">
            Use the form below to create a new Heritage
          </span>
        </div>
        <form id="addHeritage" encType="multipart/form-data">
          <div className="newHeritage">
            <div className="formGroup">
              <label htmlFor="title" className="textLight">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="description" className="textLight">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="link" className="textLight">
                Link
              </label>
              <input
                type="text"
                name="link"
                placeholder="https://www.google.com"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="image" className="textLight">
                Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="formGroup">
              <button
                type="submit"
                className="btn textDark update"
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
