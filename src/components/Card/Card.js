import React from 'react';
import './Card.css';

const Card = ({ location, stats }) => {
  return (
    <article>
      <h3>{location}</h3>
    </article>
  );
};

export default Card;
