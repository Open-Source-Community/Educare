import React from 'react';
import '../assets/stylesheets/hCard.scss'

const HorizontalCard = ({ imageUrl, title, description, link , date}) => {
  return (
    <div className="hcard assignment">
      <div className="assignment-date">
        <img src="https://assets-global.website-files.com/5ec03c2c67cf4824e3d00674/5ec3219dfd4d5f011d90b219_grey_calendar.svg" alt="" className="calendar-icon" />
        <div className="date">jan</div>
      </div>
      <a href={link} className="card-info w-inline-block">
        <h3 className="card-title">{title}</h3>
        <div>{description}</div>
      </a>
    </div>
  );
};

export default HorizontalCard;
