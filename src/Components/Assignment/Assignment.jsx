import React from "react";
import "./Assignment.css";
import "../../general.css";
const Assignment = ({ month, title, content }) => {
  return (
    <div className="assignment-container shadow">
      <div>
        <img src="./assets/grey_calendar.svg" alt="" srcset="" />
        <p className="month">{month}</p>
      </div>
      <a href="@" className="link" >
        <h3>{title}</h3>
        <p>{content}</p>
      </a>
    </div>
  );
};

export default Assignment;
