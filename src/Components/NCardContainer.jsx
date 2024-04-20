import NCard from "./NCard";
import React from 'react'
import '../assets/stylesheets/cardContainer.scss'

const NCardContainer = ({ cardData, maxCards }) => {
  const slicedData = cardData.slice(0, maxCards);

  return (
    <div>
    <div className="card-container">
      {slicedData.map((card, index) => (
        <NCard
          key={index}
          category={card.category}
          title={card.title}
          description={card.description}
          authorName = {card.authorName}
          link={card.link}
        />
      ))}
      </div>
      <div className="button-wrapper align-left">
          <a href={'/news'} className="button w-button">View More</a>
      </div>
    </div>
)};

export default NCardContainer
