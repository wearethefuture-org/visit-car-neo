import React from 'react';
import { ReactSVG } from 'react-svg';
import './InfoCard.scss';

const InfoCard = ({
  src,
  color,
  title,
  text
}) => (
  <div className={`info-card info-card--${color}`}>
    <div className="info-card__icon">
      <ReactSVG src={src} />
    </div>
    <div className="info-card__title">{title}</div>
    <div className="info-card__text">{text}</div>
  </div>
);

export default InfoCard;
