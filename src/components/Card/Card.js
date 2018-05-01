import React from 'react';
import './Card.css';

const Card = ({ location, stats }) => {
  let statsKeys = Object.keys(stats)
  let statsList = statsKeys.map((stat, index) => <li key={`year ${index}`}>{stat} :  {stats[stat]} </li>)
  return (
    <article>
      <h3>{location}</h3>
      <ul>{statsList}</ul>
    </article>
  );
};

export default Card;
