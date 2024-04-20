import React from 'react';
import HorizontalCard from './hCard';
import '../assets/stylesheets/hCardContainer.scss'
const HorizontalCardContainer = ({ cardData, maxCards }) => {
  const slicedData = cardData.slice(0, maxCards);

  return (
    <div className="horizontal-card-container">
      {slicedData.map((card, index) => (
        <HorizontalCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    <div className="button-wrapper align-left">
      <a href={'/assignments'} className="button w-button">View More</a>
    </div>
    </div>
  );
};

export default HorizontalCardContainer;
