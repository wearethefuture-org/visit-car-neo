import React from 'react';
import './PersonCard.scss';

const PersonCard = ({ img, name, profession }) => (
  <div className="person-card">
    <img
      src={img}
      alt={`${name} - ${profession}`}
      title={profession}
      className="person-card__photo"
    />
    <h2 className="person-card__name">{name}</h2>
    <h3 className="person-card__profession">{profession}</h3>
  </div>
);

export default PersonCard;
