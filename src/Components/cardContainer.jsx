import React from 'react';
import VertCard from './VertCard';
import '../assets/stylesheets/cardContainer.scss'

const CardContainer = ({ cardData, maxCards }) => {
  const slicedData = cardData.slice(0, maxCards);

  return (
    <div className="vcard-container">
      {slicedData.map((card, index) => (
        <VertCard
          key={index}
          category={card.category}
          title={card.title}
          author={card.author}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardContainer;
