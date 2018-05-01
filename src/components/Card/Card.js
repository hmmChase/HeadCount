import React from 'react';
import './Card.css';

const Card = ({ location, stats }) => {
  let statsKeys = Object.keys(stats)
  let statsList = statsKeys.map((stat, index) => {
    const statColor = stats[stat] >= 0.5 ? 'aboveColor' : 'belowColor'
    return <li key={`year ${index}`}>{stat} :  <span className={statColor}>{stats[stat]}</span></li>
  })
  return (
    <article className='card'>
      <h3>{location}</h3>
      <ul>{statsList}</ul>
    </article>
  );
};

export default Card;
