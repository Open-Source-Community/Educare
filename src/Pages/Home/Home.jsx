import Recent from "../../Components/Recent/Recent";
import React from "react";
import "./Home.css";
import Assignment from "../../Components/Assignment/Assignment";
const assignmentData = [
  {
    month: "Jan",
    title: "One page layout",
    content: "Create a one page layout for a business website.",
  },
  {
    month: "nov",
    title: "Class naming structure",
    content: "Define your class naming convention and add it to each element.",
  },
  {
    month: "jul",
    title: "Add a page load animation",
    content: "Use Interactions to create an animation on the hero section.",
  },
];
const Home = () => {
  return (
    <>
      <Recent />
      <div className="assignments">
        <p className="title-section">Assignments</p>
        {assignmentData.map(({ month, title, content }, index) => (
          <Assignment
            key={index}
            month={month}
            title={title}
            content={content}
          />
        ))}
        <button className="btn">View all</button>
      </div>
    </>
  );
};

export default Home;
