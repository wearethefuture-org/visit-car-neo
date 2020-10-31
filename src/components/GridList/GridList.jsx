import React from 'react';
import './GridList.scss';

const GridList = ({ items }) => (
  <div className="grid-list">
    {items.map(item => (
      <div key={item.title} className="grid-list__item">
        <h1 className="grid-list__title">{item.title}</h1>
        <h2 className="grid-list__text">{item.text}</h2>
      </div>
    ))}
  </div>
);

export default GridList;
