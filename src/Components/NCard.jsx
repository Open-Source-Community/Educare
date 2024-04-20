import React from 'react';
import '../assets/stylesheets/NCard.scss'
const NCard = ({ category, title, description, authorName, authorImageUrl, href }) => {
  return (
    <div role="listitem" className="w-dyn-item">
      <div className="Ncard">
        <div className="card-data">
          <a href={href} className="category-link w-inline-block">
            <div style={{ color: 'hsla(114, 50.85%, 44.75%, 1.00)' }} className="category">
              {category}
            </div>
          </a>
          <a href={href} className="card-link">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
          </a>
        </div>
        <a href={href} className="author-info">
          <div className="author-name">{authorName}</div>
        </a>
      </div>
    </div>
  );
};

export default NCard;
