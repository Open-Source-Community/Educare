import React from 'react';
import '../assets/stylesheets/heroCard.scss';

const Card = ({ category, title, author, description, imageUrl, link }) => {
  return (
    <div className="hero-grid">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div className="card-container">
            <div className="card hero">
              <div className="image-container">
                <img src={imageUrl} alt={title} className="card-image" />
              </div>
              <div className="featured-info">
                <div className="category">{category}</div>
                <h1 className="card-title hero-title">{title}</h1>
                <div className="author-info hero-author">{author}</div>
                <p>{description}</p>
                <div className="button-wrapper align-left">
                  <a href={link} className="button w-button">View Lesson</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
