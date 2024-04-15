import React from "react";
import "../../general.css";
import "./Recent.css";
import Category from "../Category/Category";
const Recent = () => {
  return (
    <div className="container">
      <p className="title-section">Recent</p>
      <div className="sub-container shadow">
        <a href="@" className="project-card" target="_blank">
          <img
            className="image"
            src="./assets/5ec30a70c48921daff557fff_Screenshot 2020-05-18 at 23.21.25-p-500.png"
            alt=""
          />
        </a>
        <div className="text-content">
          <Category
            text={"webflow"}
            color={"hsla(231, 89.00%, 53.14%, 1.00)"}
            />
            <h4>Getting started with Webflow</h4>
          <a href="@" className="profile">
            <div
              style={{
                backgroundImage:
                  "url(./assets/5ec30e25752f222797ac47d3_etty-fidele-VNYCIbZju0o-unsplash.jpg)",
                backgroundPosition: "30% 0",
              }}
              className="profile-image"
            />
            <p>by Aaron Kautzer</p>
          </a>
          <p>
            Quod molestias repellat. Dignissimos soluta deleniti laudantium ab
            qui sit iste. Veniam debitis ut consequuntur. Nihil quia fugit iure
            maxime accusantium dolorem recusandae architecto iste.
          </p>
          <button className="btn" style={{alignSelf:"flex-start"}}>VIEW LESSON</button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
