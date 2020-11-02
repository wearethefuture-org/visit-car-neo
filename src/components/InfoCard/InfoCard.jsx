import React from 'react';
import { ReactSVG } from 'react-svg';
import './InfoCard.scss';

const InfoCard = ({
  src,
  title,
  text
}) => (
  <div className="infocard">
    <div className="infocard__icon">
      <ReactSVG src={src} />
    </div>
    <div className="infocard__title">{title}</div>
    <div className="infocard__text">{text}</div>
  </div>
);

export default InfoCard;
