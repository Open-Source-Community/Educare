import React from 'react';
import VertCard from './VertCard';
import '../assets/stylesheets/cardContainer.scss'

const CardContainer = ({ cardData, maxCards }) => {
  const slicedData = cardData.slice(0, maxCards);

  return (
    <div>
    <div className="card-container">
      {slicedData.map((card, index) => (
        <VertCard
          key={index}
          category={card.category}
          title={card.title}
          authorName={card.authorName}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
        />
      ))}
    </div>
    <div className="button-wrapper align-left">
          <a href={'/lessons'} className="button w-button">View More</a>
    </div>
    </div>
  );
};

export default CardContainer;
