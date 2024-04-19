import React from 'react';
import '../assets/stylesheets/vertCard.scss'
const VertCard = ({ imageUrl, category, title, description, authorName, authorImageUrl, href }) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="card lesson-card">
        <a href={href} className="card-link image w-inline-block">
          <img
            src={imageUrl}
            alt=""
            className="lesson-image"
          />
        </a>
        <div className="card-data lessons">
          <a href={href} className="category-link w-inline-block">
            <div style={{ color: 'hsla(114, 50.85%, 44.75%, 1.00)' }} className="category">
              {category}
            </div>
          </a>
          <a href={href} className="card-link w-inline-block">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
          </a>
        </div>
        <a href={href} className="author-info lesson-card w-inline-block">
          <div className="author-name">{authorName}</div>
        </a>
      </div>
    </div>
  );
};

export default VertCard;
