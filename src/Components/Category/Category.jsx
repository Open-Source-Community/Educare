import React from "react";
import "./Category.css";
const Category = ({ text, color }) => {
  return (
    <a className="category" href="@" style={{ color: color }}>
      {text}
    </a>
  );
};

export default Category;
